import React from 'react';
import { Link } from 'react-router-dom';
import {useForm } from 'react-hook-form';
import axios from 'axios';
import toast from 'react-hot-toast';
import { userSignup } from '../../services/userAPI';


export default function Signup() {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit =  async (data) => {
    try{
      console.log(data, "=======> data");
      const response = await userSignup(data)
      console.log(response);
      toast.success('Registered successfully');
    }catch(error){
      console.log(error);
      toast.error('User registration Failed');
    }
  }

  return (
    <div className="hero bg-base-200 py-20">
    <div className="hero-content flex-col lg:flex-row lg:w-6/12">
      <div className="card bg-base-100 w-full max-w-l shrink-0 shadow-2xl">
        <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control">
            <h1 className="text-3xl font-bold">Sign Up</h1>
            <label className="label">
              <span className="label-text">User Name</span>
            </label>
            <input type="text" placeholder="username" {...register("username", { required: true })} className="input input-bordered" />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="email" placeholder="email" {...register("email", { required: true })} className="input input-bordered" />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Phone Number</span>
            </label>
            <input type="tel" placeholder="phone number" {...register("phone", { required: true })} className="input input-bordered" />
            </div>
            <div className="form-control">
            <label className="label">
              <span className="label-text">Address</span>
            </label>
            <textarea placeholder="address" {...register("address", { required: true })} className="textarea textarea-bordered" ></textarea>
            </div>
            <div className="form-control">
            <label className="label">
              <span className="label-text">Role</span>
            </label>
            <input type="text" placeholder="role" {...register("role", { required: true })} className="input input-bordered" />
            </div>
            <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input type="password" placeholder="password" {...register("password", { required: true })} className="input input-bordered"  />
            </div>
            <div className="form-control">
            <label className="label">
              <span className="label-text">Confirm Password</span>
            </label>
            <input type="password" placeholder="confirm password" {...register("confirmPassword", { required: true })} className="input input-bordered" />
            </div>
            <div className="form-control">
            <label className="label">
              <span className="label-text">Profile Picture</span>
            </label>
            <input type="file" placeholder="profilepicture" {...register("profilepicture", { required: true })} className="input input-bordered"/>
            </div>
            <div>
            <label className="label">
            <Link to={'/login'}>
                Existing User?
                </Link>
            </label>
          </div>
          <div className="form-control mt-6">
            <button type="submit" className="btn btn-primary">Sign Up</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  )
}
