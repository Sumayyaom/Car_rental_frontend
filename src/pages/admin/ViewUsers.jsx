import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { deleteUser, ViewAllUsers } from '../../services/adminAPI';

export default function ViewUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const data = await ViewAllUsers();
      if (data.length > 0) {
        setUsers(data);
        console.log("SetUsers",data)
        toast.success('Users fetched successfully');
      } else {
        toast.error('No users found');
      }
    };

    fetchUsers();
  }, []); // Runs only once when component mounts


  const handleDelete = async (userId) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      try {
        const response = await deleteUser(userId);
        // Remove the deleted user from the state
        setUsers((prevUsers) => prevUsers.filter((user) => user._id !== userId));
        console.log("response=====>",response);
        
        toast.success('User deleted successfully');
      } catch (error) {
        toast.error('Failed to delete user');
        console.error(error);
      }
    }
  };

  return (
    <div className="overflow-x-auto mt-4 mb-4 ml-20">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img
                        src={user.profilepicture || "https://img.daisyui.com/images/profile/demo/2@94.webp"} // Default avatar if not available
                        alt="User Avatar"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{user.username}</div>
                    <div className="text-sm opacity-50">{user.address || 'Unknown'}</div> {/* Adjust as per your data */}
                  </div>
                </div>
              </td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>
              <button className="btn btn-error" onClick={() => handleDelete(user._id)} >Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
