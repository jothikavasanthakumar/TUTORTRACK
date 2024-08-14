import React, { useState } from 'react';
import './CSS/RequestTutorMgmt.css'; // Import the CSS file for styling
import RequestTutorCount from './RequestTutorCount';

const RequestTutorManagement = () => {
  const [requests, setRequests] = useState([
    { 
      request_id: 1, 
      preferred_subject: 'Mathematics', 
      preferred_place: 'Online', 
      details: 'Experienced tutor needed.', 
      city: 'New York', 
      locality: 'Downtown', 
      address: '123 Main St', 
      yearofbirth: 1985, 
      contact_via: 'Email',
      status: 'pending'
    },
    { 
      request_id: 2, 
      preferred_subject: 'Computer Science', 
      preferred_place: 'Students Place', 
      details: 'Looking for a tutor with industry experience.', 
      city: 'Los Angeles', 
      locality: 'Hollywood', 
      address: '456 Elm St', 
      yearofbirth: 1990, 
      contact_via: 'Phone',
      status: 'confirmed'
    },
    { 
      request_id: 3, 
      preferred_subject: 'English', 
      preferred_place: 'Tutors Place', 
      details: 'Needs a native speaker.', 
      city: 'San Francisco', 
      locality: 'Mission', 
      address: '789 Market St', 
      yearofbirth: 1988, 
      contact_via: 'Email',
      status: 'declined'
    },
  ]);

  const [filterStatus, setFilterStatus] = useState('');

  const handleFilterChange = (e) => {
    const status = e.target.value;
    setFilterStatus(status);
  };

  const filteredRequests = requests.filter(request => {
    if (filterStatus === '') return true; // Show all requests if no filter is applied
    return request.status === filterStatus;
  });

  const handleAction = (request_id, action) => {
    if (action === 'delete') {
      setRequests(requests.filter(request => request.request_id !== request_id));
    } else {
      setRequests(requests.map(request => {
        if (request.request_id === request_id) {
          if (action === 'confirm') {
            return { ...request, status: 'confirmed' };
          } else if (action === 'decline') {
            return { ...request, status: 'declined' };
          }
        }
        return request;
      }));
    }
  };

  const renderActionButtons = (status, request_id) => {
    if (status === 'pending') {
      return (
        <>
          <button 
            onClick={() => handleAction(request_id, 'confirm')} 
            className='action-button-request confirm-button-request'
          >
            Accept
          </button>
          <button 
            onClick={() => handleAction(request_id, 'decline')} 
            className='action-button-request decline-button-request'
          >
            Decline
          </button>
        </>
      );
    }
    if (status === 'declined') {
      return (
        <button 
          onClick={() => handleAction(request_id, 'confirm')} 
          className='action-button-request confirm-button-request'
        >
          Accept
        </button>
      );
    }
    if (status === 'confirmed') {
      return (
        <button 
          onClick={() => handleAction(request_id, 'decline')} 
          className='action-button-request decline-button-request'
        >
          Decline
        </button>
      );
    }
  };

  // Count the number of requests in each status
  const countStatus = (status) => {
    return requests.filter(request => request.status === status).length;
  };

  return (
    <div className="request-tutor-management">
      <h2>Request Tutor Management</h2>
      <RequestTutorCount
        all={requests.length}
        confirmed={countStatus('confirmed')}
        pending={countStatus('pending')}
        declined={countStatus('declined')}
      /><br/><br/>
      <div className="sort-controls-request">
        <select
          value={filterStatus}
          onChange={handleFilterChange}
          className="sort-dropdown-request"
        >
          <option value="">All Status</option>
          <option value="pending">Pending Status</option>
          <option value="confirmed">Confirmed Status</option>
          <option value="declined">Declined Status</option>
        </select>
      </div>
      <table className="data-table-request">
        <thead>
          <tr>
            <th>Request ID</th>
            <th>Preferred Subject</th>
            <th>Preferred Place</th>
            <th>Details</th>
            <th>City</th>
            <th>Locality</th>
            <th>Address</th>
            <th>Year of Birth</th>
            <th>Contact Via</th>
            <th>Actions</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {filteredRequests.map((request) => (
            <tr key={request.request_id}>
              <td>{request.request_id}</td>
              <td>{request.preferred_subject}</td>
              <td>{request.preferred_place}</td>
              <td>{request.details}</td>
              <td>{request.city}</td>
              <td>{request.locality}</td>
              <td>{request.address}</td>
              <td>{request.yearofbirth}</td>
              <td>{request.contact_via}</td>
              <td className="actions-column">
                {renderActionButtons(request.status, request.request_id)}
              </td>
              <td className="delete-column">
                <button 
                  onClick={() => handleAction(request.request_id, 'delete')} 
                  className='delete-button-request'
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

export default RequestTutorManagement;
