import React, { useState } from 'react';
import './CSS/BecomeTutorMgmt.css'; // Import the CSS file for styling
// import staff1 from '../Assets/staff-1.jpg';
// import staff2 from '../Assets/staff-2.jpg';
import BecomeTutorCount from './BecomeTutorCount';

const BecomeTutorManagement = () => {
  const [tutors, setTutors] = useState([
    { 
      staffReq_id: 1, 
      // staff_image: staff1, 
      firstname: 'Alice', 
      lastname: 'Johnson', 
      location: 'New York', 
      email: 'alice@example.com', 
      gender: 'Female', 
      qualification: 'M.Sc Mathematics', 
      subject: 'Mathematics', 
      mobilenumber: '1234567890',
      status: 'pending'
    },
    { 
      staffReq_id: 2, 
      // staff_image: staff2, 
      firstname: 'Bob', 
      lastname: 'Brown', 
      location: 'Los Angeles', 
      email: 'bob@example.com', 
      gender: 'Male', 
      qualification: 'Ph.D Computer Science', 
      subject: 'Computer Science', 
      mobilenumber: '0987654321',
      status: 'pending'
    },
    // Add more tutor data here as needed
  ]);

  const [filterStatus, setFilterStatus] = useState('');

  const handleFilterChange = (e) => {
    setFilterStatus(e.target.value);
  };

  const filteredTutors = tutors.filter(tutor => {
    if (filterStatus === '') return true; // Show all tutors if no filter is applied
    return tutor.status === filterStatus;
  });

  const handleAction = (staffReq_id, action) => {
    if (action === 'delete') {
      setTutors(tutors.filter(tutor => tutor.staffReq_id !== staffReq_id));
    } else {
      setTutors(tutors.map(tutor => {
        if (tutor.staffReq_id === staffReq_id) {
          if (action === 'confirm') {
            return { ...tutor, status: 'confirmed' };
          } else if (action === 'decline') {
            return { ...tutor, status: 'declined' };
          }
        }
        return tutor;
      }));
    }
  };

  const renderActionButtons = (status, staffReq_id) => {
    if (status === 'pending') {
      return (
        <>
          <button 
            onClick={() => handleAction(staffReq_id, 'confirm')} 
            className='action-button-become confirm-button-tut'
          >
            Accept
          </button>
          <button 
            onClick={() => handleAction(staffReq_id, 'decline')} 
            className='action-button-become decline-button-tut'
          >
            Decline
          </button>
        </>
      );
    }
    if (status === 'declined') {
      return (
        <button 
          onClick={() => handleAction(staffReq_id, 'confirm')} 
          className='action-button-become confirm-button-tut'
        >
          Accept
        </button>
      );
    }
    if (status === 'confirmed') {
      return (
        <button 
          onClick={() => handleAction(staffReq_id, 'decline')} 
          className='action-button-become decline-button-tut'
        >
          Decline
        </button>
      );
    }
  };

  // Count the number of tutors in each status
  const countStatus = (status) => {
    return tutors.filter(tutor => tutor.status === status).length;
  };

  return (
    <div className="become-tutor-management">
      <h2>Become Tutor Management</h2>
      <BecomeTutorCount
        all={tutors.length}
        confirmed={countStatus('confirmed')}
        pending={countStatus('pending')}
        declined={countStatus('declined')}
      /><br/><br/>
      <div className="filter-controls-become">
        <select
          value={filterStatus}
          onChange={handleFilterChange}
          className="sort-dropdown-become"
        >
          <option value="">All Status</option>
          <option value="pending">Pending Status</option>
          <option value="confirmed">Confirmed Status</option>
          <option value="declined">Declined Status</option>
        </select>
      </div>
      <table className="data-table-become">
        <thead>
          <tr>
            <th>Staff Image</th>
            <th>Name</th>
            <th>Location</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Qualification</th>
            <th>Subject</th>
            <th>Mobile Number</th>
            <th>Actions</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {filteredTutors.map((tutor) => (
            <tr key={tutor.staffReq_id}>
              <td>
                <img src={tutor.staff_image} alt={`${tutor.firstname} ${tutor.lastname}`} className="tutor-image-become" />
              </td>
              <td>{tutor.firstname} {tutor.lastname}</td>
              <td>{tutor.location}</td>
              <td>{tutor.email}</td>
              <td>{tutor.gender}</td>
              <td>{tutor.qualification}</td>
              <td>{tutor.subject}</td>
              <td>{tutor.mobilenumber}</td>
              <td className="actions-column">
                {renderActionButtons(tutor.status, tutor.staffReq_id)}
              </td>
              <td className="delete-column">
                <button 
                  onClick={() => handleAction(tutor.staffReq_id, 'delete')} 
                  className='delete-button-become'
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

export default BecomeTutorManagement;
