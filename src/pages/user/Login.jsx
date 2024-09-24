import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { userLogin } from '../../services/userAPI';
import eyeImage from '../../assets/eye.png';  
import eyeSlashImage from '../../assets/eye-slash.png'; 

export default function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = async (data) => {
    try {
      const response = await userLogin(data);
      console.log(response);
      if (response?.status) {
        toast.success('Login successfully');
        if (response.role === 'admin') {
          navigate('/admin/home');
        } else {
          navigate('/user/home');
        }
      } else {
        toast.error('Wrong username or password');
      }
    } catch (error) {
      console.log(error);
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
              <input
                type="email"
                placeholder="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Please enter a valid email address",
                  }
                })}
                className="input input-bordered"
              />
              {errors.email && <p className="text-red-500">{errors.email.message}</p>}
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="password"
                  {...register("password", {
                    required: "Password is required"
                  })}
                  className="input input-bordered w-full pr-12"
                />
                <img
                  src={showPassword ? eyeSlashImage : eyeImage} 
                  alt="Toggle Password Visibility"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                  onClick={togglePasswordVisibility}
                  style={{ width: '24px', height: '24px' }}  
                />
              </div>
              {errors.password && <p className="text-red-500">{errors.password.message}</p>}
              <label className="label">
                <Link to="/signup">New User?</Link>
              </label>
            </div>

            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

