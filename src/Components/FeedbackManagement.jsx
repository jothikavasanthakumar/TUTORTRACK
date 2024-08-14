import React, { useState } from 'react';
import './CSS/FeedbackManagement.css'; // Import the CSS file for styling
import FeedbackCount from './FeedbackCount';

const FeedbackManagement = () => {
  const [feedbacks, setFeedbacks] = useState([
    { 
      feedback_id: 1, 
      student_id: 101, 
      student_name: 'Alice Johnson', 
      staff_id: 201, 
      staff_name: 'John Smith', 
      feedback: 'Great course! Really enjoyed it.', 
      date: '2024-07-15',
      isRead: false
    },
    { 
      feedback_id: 2, 
      student_id: 102, 
      student_name: 'Bob Brown', 
      staff_id: 202, 
      staff_name: 'Jane Doe', 
      feedback: 'The course content could be improved.', 
      date: '2024-07-16',
      isRead: true
    },
  ]);

  const [sortOrder, setSortOrder] = useState('');

  const handleSortChange = (e) => {
    const order = e.target.value;
    setSortOrder(order);

    // Sort feedbacks based on the selected order
    const sortedFeedbacks = [...feedbacks].sort((a, b) => {
      if (order === 'asc') {
        return new Date(a.date) - new Date(b.date);
      }
      if (order === 'desc') {
        return new Date(b.date) - new Date(a.date);
      }
      return 0;
    });

    setFeedbacks(sortedFeedbacks);
  };

  const handleReadToggle = (feedback_id) => {
    setFeedbacks(feedbacks.map(feedback =>
      feedback.feedback_id === feedback_id
        ? { ...feedback, isRead: !feedback.isRead }
        : feedback
    ));
  };

  const handleDelete = (feedback_id) => {
    setFeedbacks(feedbacks.filter(feedback => feedback.feedback_id !== feedback_id));
  };

  // Calculate counts
  const totalFeedbacks = feedbacks.length;
  const readCount = feedbacks.filter(feedback => feedback.isRead).length;
  const unreadCount = feedbacks.filter(feedback => !feedback.isRead).length;

  return (
    <div className="feedback-management">
      <h2>Feedback Management</h2>
      <FeedbackCount
        totalFeedbacks={totalFeedbacks}
        readCount={readCount}
        unreadCount={unreadCount}
      />
      <br /><br />
      <div className="sort-controls">
        <select
          value={sortOrder}
          onChange={handleSortChange}
          className="sort-dropdown"
        >
          <option value="">Sort by Date</option>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </div>
      <table className="data-table">
        <thead>
          <tr>
            <th>Feedback ID</th>
            <th>Student ID</th>
            <th>Student Name</th>
            <th>Staff ID</th>
            <th>Staff Name</th>
            <th>Feedback</th>
            <th>Date</th>
            <th>Status</th>
            <th>Actions</th>
            <th>Delete Data</th>
          </tr>
        </thead>
        <tbody>
          {feedbacks.map((feedback) => (
            <tr key={feedback.feedback_id}>
              <td>{feedback.feedback_id}</td>
              <td>{feedback.student_id}</td>
              <td>{feedback.student_name}</td>
              <td>{feedback.staff_id}</td>
              <td>{feedback.staff_name}</td>
              <td>{feedback.feedback}</td>
              <td>{feedback.date}</td>
              <td className='status-column'>
                {feedback.isRead ? 'Read' : 'Unread'}
              </td>
              <td className='actions-column'>
                <button 
                  onClick={() => handleReadToggle(feedback.feedback_id)} 
                  className={`action-button ${feedback.isRead ? 'unread' : 'read'}`}
                >
                  Mark as {feedback.isRead ? 'Unread' : 'Read'}
                </button>
              </td>
              <td className='delete-column'>
                <button 
                  onClick={() => handleDelete(feedback.feedback_id)} 
                  className='delete-button'
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FeedbackManagement;
