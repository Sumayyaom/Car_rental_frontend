import React, { useEffect, useState } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { Logout, Profile, userDelete } from '../../services/userAPI';
import toast from 'react-hot-toast';

export default function AdminProfile() {

    const navigate = useNavigate();
    const [user,setUser] = useState([null])

    const handleLogout =  async() => {
      try{
        const response =  await Logout();
        console.log(response);
        toast.success('Successfully Logged out');
        navigate("/");
      }catch(error){
        console.log(error);
        toast.error('Error in Logging out');
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

    useEffect(()=>{
        const fetchProfile = async () => {
            try {
                const response = await Profile();  
                setUser(response.data);  // Update user state with fetched data
            } catch (error) {
                console.error("Error fetching profile:", error);
            }
        };
        
        fetchProfile();
    },[])

  return (
    <div className="profile-page-container">
      <div className="profile-header">
        <img
          src = {user.profilepicture ? user.profilepicture : 'https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png'}
          alt="User Avatar"
          className="profile-avatar"
        />
        <div className="profile-info">
          <h2>Welcome <b>{user.username}</b></h2>
          <p>Email id : {user.email}</p>
          <p>Phone Number : {user.phone}</p>
          <p>Address : {user.address}</p>
        </div>
      </div>

      <div className="profile-section">      
        <Link to={"/admin/profile/editprofile"}><button className="btn-edit-profile">Edit Profile</button></Link>
        <button className="btn-delete-account" onClick={handleDelete}>Delete Account</button><br />
        <button className="btn-logout" onClick={handleLogout}>Logout</button>
      </div>

      <Outlet />
    </div>
  )
}
