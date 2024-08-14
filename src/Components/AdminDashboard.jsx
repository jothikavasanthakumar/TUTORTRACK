import React, { useState } from 'react';
import StaffPage from './StaffPage';
import StudentPage from './StudentPage';
import CoursesPage from './CoursesPage';
// import AvailableCourses from './AvailableCourses';
// import RegisteredStaff from './RegisteredStaff';
// import RegisteredStudents from './RegisteredStudents';
// import FeedbacksReceived from './FeedbacksReceived';
import FeedbackManagement from './FeedbackManagement';
import StaffChart from './StaffChart';
import StudentChart from './StudentChart';
import CourseChart from './CourseChart';
import PaymentManagement from './PaymentManagement';
import './CSS/AdminDashboard.css'; // Import the CSS file for styling
import BecomeTutorManagement from './BecomeTutorManagement';
import RequestTutorManagement from './RequestTutorManagment';

const AdminDashboard = () => {
  const [activeChart, setActiveChart] = useState('overview');

  return (
    <div className="dashboard-container">
      <div className="sidebar">
        <h3>Admin Dashboard</h3>
        <ul>
          <li onClick={() => setActiveChart('overview')}>Overview</li>
          <li onClick={() => setActiveChart('student')}>Student Enrollments</li>
          <li onClick={() => setActiveChart('staff')}>Staff Registrations</li>
          <li onClick={() => setActiveChart('course')}>Course Distribution</li>
          <li onClick={() => setActiveChart('feedback')}>Feedback Management</li>
          <li onClick={() => setActiveChart('payment')}>Payment Management</li>
          <li onClick={() => setActiveChart('becometutormgmt')}>BecomeTutor Management</li>
          <li onClick={() => setActiveChart('requesttutormgmt')}>RequestTutor Management</li>
        </ul>
      </div>
      <div className="content">
        <h1>Admin Dashboard</h1>
        <br/><br/>
        {activeChart === 'overview' && (
          <div className="overview-section">
            {/* <div className="modules-section">
              <AvailableCourses />
              <RegisteredStaff />
              <RegisteredStudents />
              <FeedbacksReceived />
            </div> */}
            <div className="chart-container">
        <h2>Staff Registrations</h2>
        <StaffChart />
      </div>
      <div className="chart-container">
        <h2>Student Enrollments</h2>
        <StudentChart />
      </div>
      <div className="chart-container">
        <h2>Course Distribution</h2>
        <CourseChart />
      </div>
          </div>
        )}
        {activeChart === 'student' && (
          <>
            <h2>Student Enrollments</h2>
            <StudentPage />
          </>
        )}
        {activeChart === 'staff' && (
          <>
            <h2>Staff Registrations</h2>
            <StaffPage />
          </>
        )}
        {activeChart === 'course' && (
          <>
            <h2>Course Distribution</h2>
            <CoursesPage />
          </>
        )}
        {activeChart === 'feedback' && (
          <>
            <FeedbackManagement />
          </>
        )}
         {activeChart === 'payment' && (
          <>
            <PaymentManagement />
          </>
        )}
         {activeChart === 'requesttutormgmt' && (
          <>
            <RequestTutorManagement />
          </>
        )}
         {activeChart === 'becometutormgmt' && (
          <>
            <BecomeTutorManagement />
          </>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
