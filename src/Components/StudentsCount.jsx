import React from 'react';
import './CSS/AdminDashboard.css'; // Import the CSS file for styling

const StudentsCount = ({ totalCount, mathematicsCount, englishCount, biologyCount, economicsCount, computerScienceCount }) => {
  return (
    <div className="container-stu">
      <div className="module-container-stu">
        <h3>Total Students</h3>
        <p>{totalCount}</p>
      </div>
      <div className="module-container-stu">
        <h3>Mathematics</h3>
        <p>{mathematicsCount}</p>
      </div>
      <div className="module-container-stu">
        <h3>English</h3>
        <p>{englishCount}</p>
      </div>
      <div className="module-container-stu">
        <h3>Biology</h3>
        <p>{biologyCount}</p>
      </div>
      <div className="module-container-stu">
        <h3>Economics</h3>
        <p>{economicsCount}</p>
      </div>
      <div className="module-container-stu">
        <h3>Computer Science</h3>
        <p>{computerScienceCount}</p>
      </div>
    </div>
  );
};

export default StudentsCount;
