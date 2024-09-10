import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { Profile, userUpdate } from '../../services/userAPI';
import toast from 'react-hot-toast';

export default function AdminEdit() {
    const [user,setUser] = useState([null])

    const {
      register,
      handleSubmit,
      formState: { errors },
      setValue
    } = useForm()
  
    useEffect(() => {
  
      const fetchProfile = async () => {
        try {
            const response = await Profile();  
            setUser(response.data);  // Update user state with fetched data
            
            // Use setValue to populate form fields with fetched data
          setValue("username", response.data.username);
          setValue("email", response.data.email);
          setValue("phone", response.data.phone);
          setValue("address", response.data.address);
          setValue("role", response.data.role);
          setValue("profilepicture", response.data.profilepicture);
  
        } catch (error) {
            console.error("Error fetching profile:", error);
        }
    };
    fetchProfile();
  },[setValue])
  
  const onUserUpdate = async (data) => {
    try {
      const formData = new FormData();
  
      // Only append the fields that are changed
      if (data.username !== user.username) formData.append("username", data.username);
      if (data.email !== user.email) formData.append("email", data.email);
      if (data.phone !== user.phone) formData.append("phone", data.phone);
      if (data.address !== user.address) formData.append("address", data.address);
      if (data.role !== user.role) formData.append("role", data.role);
  
      // Handle file input (if user changes profile picture)
      if (data.profilepicture instanceof File) {
        formData.append("profilepicture", data.profilepicture[0]);
      }
  
      // Debugging
      for (const pair of formData.entries()) {
        console.log(pair[0], pair[1]);
      }
  
      // Call the update function
      await userUpdate(formData);  
      toast.success('Profile updated successfully');
    } catch (error) {
      console.log(error);
      toast.error('Profile update failed');
    }
  };
  
    return (  
        <div className="hero bg-base-200 py-20">
       <div className="hero-content flex-col lg:flex-row lg:w-15/15">
         <div className="card bg-base-100 w-full max-w-l shrink-0 shadow-2xl">
           <form className="card-body" onSubmit={handleSubmit(onUserUpdate)}>
             <div className="form-control">
               <h1 className="text-3xl font-bold">Edit Profile</h1>
             <label className="label">
                 <span className="label-text">User Name</span>
               </label>
               <input type="text" placeholder="username" {...register("username")} className="input input-bordered" />
             </div>
             <div className="form-control">
               <label className="label">
              <span className="label-text">Email</span>
               </label>
               <input type="email" placeholder="email" {...register("email")} className="input input-bordered" />
             </div>
             <div className="form-control">
               <label className="label">
                 <span className="label-text">Phone Number</span>
               </label>
               <input type="tel" placeholder="phone number" {...register("phone")} className="input input-bordered" />
               </div>
               <div className="form-control">
               <label className="label">
                 <span className="label-text">Address</span>
               </label>
               <textarea placeholder="address" {...register("address")} className="textarea textarea-bordered" ></textarea>
               </div>
               <div className="form-control">
               <label className="label">
                 <span className="label-text">Role</span>
               </label>
               <input type="text" placeholder="role" {...register("role")} className="input input-bordered" />
               </div>
               <div className="form-control">
               <label className="label">
                 <span className="label-text">Profile Picture</span>
               </label>
               <input type="file" placeholder="profilepicture" {...register("profilepicture")} className="input input-bordered"/>
               </div>
             <div className="form-control mt-6">
               <button type="submit" className="btn btn-primary">Update</button>
             </div>
           </form>
         </div>
       </div>
    </div>
  )
}
