import React, { useEffect, useState } from 'react'
import { deletePayment, ViewAllPayments } from '../../services/adminAPI';
import toast from 'react-hot-toast';

export default function ViewPayments() {
    const [payments, setPayments] = useState([]);

    useEffect(() => {
      const fetchUsers = async () => {
        const data = await ViewAllPayments();
        if (data.length > 0) {
          setPayments(data);
          console.log("setPayments",data)
        } 
      };
      fetchUsers();
    }, []); // Runs only once when component mounts
  
    const handleDeletePayments = async (paymentId) => {
      if (window.confirm('Are you sure you want to delete this Payment?')) {
        try {
          const response = await deletePayment(bookingId);
          // Remove the deleted user from the state
          setPayments((prevUsers) => prevUsers.filter((payments) => payments._id !== paymentId));
          console.log("response=====>",response);
          toast.success('Payment deleted successfully');
        } catch (error) {
          toast.error('Failed to delete Payment');
          console.error(error);
        }
      }
    };

    return (
      <div className="overflow-x-auto mt-4 mb-4 ml-5">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Payment</th>
              <th>Status</th>
              <th>Date & Time</th>
              <th>Receipt URL</th>
              <th>User ID</th>
              <th>Booking ID</th>
              <th>Transaction ID</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((payment) => (
              <tr key={payment._id}>
                <td>
                  <div className="flex items-center gap-3">
                    <div>
                      <div className="font-bold">{payment.amount}</div>
                      <div className="text-sm opacity-50">{payment.paymentMethod || 'Unknown'}</div> {/* Adjust as per your data */}
                    </div>
                  </div>
                </td>
                <td>{payment.status}</td>
                <td>{payment.transactionDate}</td>
                <td>{payment.receiptUrl}</td>
                <td>{payment.userId}</td>
                <td>{payment.bookingId}</td>
                <td>{payment.transactionId}</td>
                <td>
                <button className="btn btn-error" onClick={handleDeletePayments}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
}
