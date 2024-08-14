import React, { useState } from 'react';
import './CSS/PaymentManagement.css'; // Import the CSS file for styling
import PaymentCount from './PaymentCount';

const PaymentManagement = () => {
  const [payments, setPayments] = useState([
    { payment_id: 1, student_id: 101, amount: 5000, date: '2024-07-15', status: 'Completed', payment_type: 'UPI' },
    { payment_id: 2, student_id: 102, amount: 3000, date: '2024-07-16', status: 'Pending', payment_type: 'Pay on Meet' },
  ]);

  const [sortOrder, setSortOrder] = useState('');

  const handleSortChange = (e) => {
    const order = e.target.value;
    setSortOrder(order);

    const sortedPayments = [...payments].sort((a, b) => {
      if (order === 'asc') {
        return new Date(a.date) - new Date(b.date);
      }
      if (order === 'desc') {
        return new Date(b.date) - new Date(a.date);
      }
      return 0;
    });

    setPayments(sortedPayments);
  };

  const handleUpdateStatus = (payment_id, status) => {
    setPayments(payments.map(payment =>
      payment.payment_id === payment_id
        ? { ...payment, status }
        : payment
    ));
  };

  const handleDelete = (payment_id) => {
    setPayments(payments.filter(payment => payment.payment_id !== payment_id));
  };

  // Calculate counts for payment types and statuses
  const countPaymentType = (type) => {
    return payments.filter(payment => payment.payment_type === type).length;
  };

  const countStatus = (status) => {
    return payments.filter(payment => payment.status === status).length;
  };

  return (
    <div>
      <PaymentCount
        payOnMeetCount={countPaymentType('Pay on Meet')}
        onlinePaymentCount={countPaymentType('UPI')}
        completedCount={countStatus('Completed')}
        pendingCount={countStatus('Pending')}
      />
      <br/><br/>
      <div className="payment-management">
        <h2>Payment Management</h2>
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
              <th>Payment ID</th>
              <th>Student ID</th>
              <th>Amount</th>
              <th>Date</th>
              <th>Status</th>
              <th>Payment Type</th>
              <th>Actions</th>
              <th>Delete Data</th>
            </tr>
          </thead>
          <tbody>
            {payments.map(payment => (
              <tr key={payment.payment_id}>
                <td>{payment.payment_id}</td>
                <td>{payment.student_id}</td>
                <td>{payment.amount}</td>
                <td>{payment.date}</td>
                <td className='status-column'>
                  <span className='status-text'>{payment.status}</span>
                </td>
                <td className='payment-type-column'>{payment.payment_type}</td>
                <td className='actions-column'>
                  <button
                    onClick={() => handleUpdateStatus(payment.payment_id, payment.status === 'Completed' ? 'Pending' : 'Completed')}
                    className={`action-button ${payment.status === 'Pending' ? 'pending' : 'completed'}`}
                  >
                    Mark as {payment.status === 'Completed' ? 'Pending' : 'Completed'}
                  </button>
                </td>
                <td className='delete-column'>
                  <button
                    onClick={() => handleDelete(payment.payment_id)}
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
    </div>
  );
};

export default PaymentManagement;
