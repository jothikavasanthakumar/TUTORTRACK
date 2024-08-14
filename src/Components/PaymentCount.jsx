import React from 'react';
import './CSS/PaymentManagement.css'; // Import the CSS file for styling

const PaymentCount = ({ payOnMeetCount, onlinePaymentCount, completedCount, pendingCount }) => {
  return (
    <div className="container-stu">
      <div className="module-container-stu">
        <h3>Pay on Meet</h3>
        <p>{payOnMeetCount}</p>
      </div>
      <div className="module-container-stu">
        <h3>Online Payment</h3>
        <p>{onlinePaymentCount}</p>
      </div>
      <div className="module-container-stu">
        <h3>Completed Payments</h3>
        <p>{completedCount}</p>
      </div>
      <div className="module-container-stu">
        <h3>Pending Payments</h3>
        <p>{pendingCount}</p>
      </div>
    </div>
  );
};

export default PaymentCount;
