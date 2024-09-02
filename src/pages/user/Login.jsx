import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { userLogin } from '../../services/userAPI';

export default function Login() {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const navigate = useNavigate();

  const onSubmit =  async (data) => {
    try{
      console.log(data, "=======> data");
      const response = await userLogin(data)
      console.log(response);
      if (response?.status) {
        toast.success('Login successfully');

        // Check the role and navigate accordingly
        if (response.role === 'admin') {
          navigate('/admin/home');
        } else {
          navigate('/user/home');
        }
      } else {
        toast.error('Login Failed');
      }
    }catch(error){
      console.log(error);
      toast.error('Login Failed');
    }
  }

  return (
    <div className="hero bg-base-200 py-20">
  <div className="hero-content flex-col lg:flex-row lg:w-6/12">
    <div className="card bg-base-100 w-full max-w-l shrink-0 shadow-2xl">
      <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control">
          <h1 className="text-3xl font-bold">Login now!</h1>
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" {...register("email", { required: true })} className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" {...register("password", { required: true })} className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
          <label className="label">
            <Link to={'/signup'}>New User?</Link>
          </label>
        </div>
        <div className="form-control mt-6">
          <button type="submit" className="btn btn-primary">Login</button>
        </div>
      </form>
    </div>
  </div>
</div>
  )
}
