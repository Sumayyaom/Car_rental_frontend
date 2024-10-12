import React, { useEffect, useState } from 'react'
import { deleteBooking, ViewAllBookings } from '../../services/adminAPI';
import toast from 'react-hot-toast';

export default function ViewBookings() {
    const [Bookings, setBookings] = useState([]);
    let toastFired = false;

    useEffect(() => {
      const fetchBookings = async () => {
        const data = await ViewAllBookings();
        if (data.length > 0) {
          setBookings(data);
          console.log("SetBookings",data);
          if (!toastFired) {
            toast.success('Bookings fetched successfully');
            toastFired = true;
          }
        } else {
          toast.error('No Bookings found');
        }
      };
  
      fetchBookings();
    }, []); // Runs only once when component mounts
  
    const handleDeleteBooking = async (bookingId) => {
      if (window.confirm('Are you sure you want to delete this booking?')) {
        try {
          const response = await deleteBooking(bookingId);
          // Remove the deleted user from the state
          setBookings((prevUsers) => prevUsers.filter((user) => Bookings._id !== bookingId));
          console.log("response=====>",response);
          toast.success('Booking deleted successfully');
        } catch (error) {
          toast.error('Failed to delete booking');
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
              <th>Booking Details</th>
              <th>Pick up time</th>
              <th>Drop off time</th>
              <th>Days</th>
              <th>Amount</th>
              <th>Payment Status</th>
            </tr>
          </thead>
          <tbody>
            {Bookings.map((Booking) => (
              <tr key={Booking._id}>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={Booking.carphoto || "https://img.daisyui.com/images/profile/demo/2@94.webp"} // Default avatar if not available
                          alt="User Avatar"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{Booking.carid}</div>
                      <div className="text-sm opacity-50">{Booking.carname || 'Unknown'}</div> {/* Adjust as per your data */}
                    </div>
                    <div>
                      <div className="font-bold">{Booking.userid}</div>
                      <div className="text-sm opacity-50">{Booking.username || 'Unknown'}</div> {/* Adjust as per your data */}
                    </div>
                  </div>
                </td>
                <td>{Booking.pickupdate}</td>
                <td>{Booking.dropoffdate}</td>
                <td>{Booking.totaldays}</td>
                <td>{Booking.totalprice}</td>
                <td>{Booking.paymentstatus}</td>
                <td>
                <button className="btn btn-error" onClick={() => handleDeleteBooking(Booking._id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
}
