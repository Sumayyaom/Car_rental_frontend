import React, { useEffect, useState } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { Booking, Logout, Profile, userDelete } from '../../services/userAPI';
import toast from 'react-hot-toast';
import { deleteBooking } from '../../services/adminAPI'; 
import dayjs from 'dayjs'; 

export default function UserProfile() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [bookings, setBookings] = useState([]);

  const handleLogout = async () => {
    try {
      const response = await Logout();
      toast.success('Successfully Logged out');
      navigate('/');
    } catch (error) {
      console.log(error);
      toast.error('Error in Logging out');
    }
  };

  const handleDeleteBooking = async (bookingId) => {
    if (window.confirm('Are you sure you want to delete this booking?')) {
      try {
        const response = await deleteBooking(bookingId);
        setBookings((prevUsers) => prevUsers.filter((book) => bookings._id !== bookingId));
        toast.success('Booking deleted successfully');
      } catch (error) {
        toast.error('Failed to delete booking');
        console.error(error);
      }
    }
  };

  const handleDelete = async() => {
    try{
      const response = await userDelete(user._id);
      console.log(response);
      toast.success('User deleted successfully');
      navigate("/");
    }catch(error){
      console.log(error);
      toast.error('Error Deleting user');
    }
  };

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await Profile();
        setUser(response.data);
      } catch (error) {
        console.error('Error fetching profile:', error);
      }
    };

    const fetchBookings = async () => {
      try {
        const booking = await Booking();
        setBookings(booking.data);
      } catch (error) {
        console.error('Error fetching bookings:', error);
      }
    };

    fetchProfile();
    fetchBookings();
  }, []);

  return (
    <div className="profile-page-container">
      <div className="profile-header">
        <img
          src={user?.profilepicture || 'https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png'}
          alt="User Avatar"
          className="profile-avatar"
        />
        <div className="profile-info">
          <h2>Welcome <b>{user?.username}</b></h2>
          <p>Email: {user?.email}</p>
          <p>Phone Number: {user?.phone}</p>
          <p>Address: {user?.address}</p>
        </div>
      </div>

      <div className="profile-section">
        <h3>Booking History</h3>
        {bookings.length > 0 ? (
          <ul className="booking-list">
            {bookings.map((booking) => (
              <li key={booking?.carid} className="booking-item">
                <div className="avatar">
                  <div className="mask mask-squircle h-12 w-12">
                    <img
                      src={booking.carphoto || "https://img.daisyui.com/images/profile/demo/2@94.webp"} 
                      alt="Car Avatar"
                    />
                  </div>
                </div>
                <div>Car: {booking?.carname}</div>
                <div>Pick up: {booking?.pickupdate}</div>
                <div>Drop off: {booking?.dropoffdate}</div>

                {/* Review Button: Show only if pick-up date is before today */}
                {dayjs(booking.pickupdate).isBefore(dayjs()) && (
                  <Link 
                  to={`/user/review/${booking._id}`} 
                  state={{ booking: booking }} >
                    <button className="btn-edit-profile">Review</button>
                  </Link>                   
                )}

                <button className="btn-delete-account" onClick={() => handleDeleteBooking(booking._id)}>Delete</button>
              </li>
            ))}
          </ul>
        ) : (
          <p>No bookings made yet.</p>
        )}
      </div>

      <div className="profile-section">
        <h3>Account Settings</h3>
        <Link to={'/user/profile/editprofile'}>
          <button className="btn-edit-profile">Edit Profile</button>
        </Link>
        <button className="btn-delete-account" onClick={handleDelete}>
          Delete Account
        </button>
        <br />
        <button className="btn-logout" onClick={handleLogout}>Logout</button>
      </div>

      <Outlet />
    </div>
  );
}



// import React, { useEffect, useState } from 'react';
// import { Link, Outlet, useNavigate } from 'react-router-dom';
// import { Booking, Logout, Profile, userDelete } from '../../services/userAPI';
// import toast from 'react-hot-toast';
// import { deleteBooking } from '../../services/adminAPI';

// export default function UserProfile() {
//   const navigate = useNavigate();
//   const [user, setUser] = useState(null); // Start with null
//   const [bookings, setBookings] = useState([]); // Initialize with an empty array

//   const handleLogout = async () => {
//     try {
//       const response = await Logout();
//       console.log(response);
//       toast.success('Successfully Logged out');
//       navigate('/');
//     } catch (error) {
//       console.log(error);
//       toast.error('Error in Logging out');
//     }
//   };

//   const handleDelete = async () => {
//     try {
//       const response = await userDelete();
//       console.log(response);
//       toast.success('User deleted successfully');
//       navigate('/');
//     } catch (error) {
//       console.log(error);
//       toast.error('Error Deleting user');
//     }
//   };

//   const handleDeleteBooking = async (bookingId) => {
//     if (window.confirm('Are you sure you want to delete this booking?')) {
//       try {
//         console.log("ID",bookingId);
//         const response = await deleteBooking(bookingId);
//         setBookings((prevUsers) => prevUsers.filter((book) => bookings._id !== bookingId));
//         console.log("response=====>",response);
//         toast.success('Booking deleted successfully');
//       } catch (error) {
//         toast.error('Failed to delete booking');
//         console.error(error);
//       }
//     }
//   };

//   useEffect(() => {
//     const fetchProfile = async () => {
//       try {
//         const response = await Profile();
//         setUser(response.data); 
//       } catch (error) {
//         console.error('Error fetching profile:', error);
//       }
//     };

//     const fetchBookings = async () => {
//       try {
//         const booking = await Booking();
//         setBookings(booking.data); 
//       } catch (error) {
//         console.error('Error fetching bookings:', error);
//       }
//     };

//     fetchProfile();
//     fetchBookings();
//   }, []);

//   return (
//     <div className="profile-page-container">
//       <div className="profile-header">
//         <img
//           src={user?.profilepicture || 'https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png'}
//           alt="User Avatar"
//           className="profile-avatar"
//         />
//         <div className="profile-info">
//           <h2>Welcome <b>{user?.username}</b></h2>
//           <p>Email: {user?.email}</p>
//           <p>Phone Number: {user?.phone}</p>
//           <p>Address: {user?.address}</p>
//         </div>
//       </div>

//       <div className="profile-section">
//         <h3>Booking History</h3>
//         {bookings.length > 0 ? (
//           <ul className="booking-list">
//             {bookings.map((booking) => (
//               <li key={booking?.carid} className="booking-item">
//                 <div className="avatar">
//                     <div className="mask mask-squircle h-12 w-12">
//                       <img
//                         src={booking.carphoto || "https://img.daisyui.com/images/profile/demo/2@94.webp"} 
//                         alt="User Avatar"
//                       />
//                     </div>
//                   </div>
//                 <div>Car: {booking?.carname}</div>
//                 <div>Pick up: {booking?.pickupdate}</div>
//                 <div>Drop off: {booking?.dropoffdate}</div>
//                 <button className="btn-delete-account" onClick={() => handleDeleteBooking(booking._id)}>Delete</button>
//               </li>
//             ))}
//           </ul>
//         ) : (
//           <p>No bookings made yet.</p>
//         )}
//       </div>

//       <div className="profile-section">
//         <h3>Account Settings</h3>
//         <Link to={'/user/profile/editprofile'}>
//           <button className="btn-edit-profile">Edit Profile</button>
//         </Link>
//         <button className="btn-delete-account" onClick={handleDelete}>
//           Delete Account
//         </button>
//         <br />
//         <button className="btn-logout" onClick={handleLogout}>Logout</button>
//       </div>

//       <Outlet />
//     </div>
//   );
// }