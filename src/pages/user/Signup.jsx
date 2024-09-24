import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { userSignup } from '../../services/userAPI';
import eyeImage from '../../assets/eye.png';  
import eyeSlashImage from '../../assets/eye-slash.png'; 

export default function Signup() {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors }, watch } = useForm();
  const password = watch('password');

  // State to toggle password visibility
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  const toggleConfirmPasswordVisibility = () => setShowConfirmPassword(!showConfirmPassword);

  // const onSubmit = async (data) => {
  //   try {
  //             data.role = "user";
  //             console.log(data, "=======> data");
  //             const response = await userSignup(data);
  //             console.log("Response:",response);
  //             if(response.success){
  //               toast.success('Registered successfully');
  //             navigate('/login');
  //             }
  //           } catch (error) {
  //             console.log(error);
  //             toast.error('User registration failed');
  //           }
  // };
  const onSubmit = async (data) => {
    try {
      data.role = "user";
      const response = await userSignup(data);
      console.log("Response:",response)
  
      if (response.success) {
        toast.success('Registered successfully');
        navigate('/login');
      }
    } catch (error) {
      console.log('Error:', error); 
      if (error.response) {
        if (error.status == 400) {
          // Email is already registered
          toast.error(error.response.data.message);
        } else {
          // Other errors like server or validation errors
          toast.error('User registration failed');
        }
      } else {
        // Handle errors without a response (e.g., network errors)
        toast.error("An undefined Error occured");
      }
    }
  };
  
  

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
              <input
                type="text"
                placeholder="username"
                {...register('username', { required: 'Username is required', minLength: { value: 3, message: 'Username must be at least 3 characters' } })}
                className="input input-bordered"
              />
              {errors.username && <p className="text-red-500">{errors.username.message}</p>}
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: 'Please enter a valid email address',
                  },
                })}
                className="input input-bordered"
              />
              {errors.email && <p className="text-red-500">{errors.email.message}</p>}
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Phone Number</span>
              </label>
              <input
                type="tel"
                placeholder="phone number"
                {...register('phone', {
                  required: 'Phone number is required',
                  pattern: {
                    value: /^[0-9]{10}$/,
                    message: 'Phone number must be 10 digits',
                  },
                })}
                className="input input-bordered"
              />
              {errors.phone && <p className="text-red-500">{errors.phone.message}</p>}
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Address</span>
              </label>
              <textarea
                placeholder="address"
                {...register('address', { required: 'Address is required' })}
                className="textarea textarea-bordered"
              ></textarea>
              {errors.address && <p className="text-red-500">{errors.address.message}</p>}
            </div>

            <div className="form-control relative">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="password"
                  {...register('password', { required: 'Password is required', minLength: { value: 6, message: 'Password must be at least 6 characters' } })}
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
            </div>

            <div className="form-control relative">
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  placeholder="confirm password"
                  {...register('confirmPassword', {
                    required: 'Please confirm your password',
                    validate: (value) => value === password || 'Passwords do not match',
                  })}
                  className="input input-bordered w-full pr-12"
                />
                <img
                  src={showConfirmPassword ? eyeSlashImage : eyeImage}
                  alt="Toggle Confirm Password Visibility"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                  onClick={toggleConfirmPasswordVisibility}
                  style={{ width: '24px', height: '24px' }}  
                />
              </div>
              {errors.confirmPassword && <p className="text-red-500">{errors.confirmPassword.message}</p>}
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Profile Picture</span>
              </label>
              <input
                type="file"
                {...register('profilepicture', {
                  required: 'Profile picture is required',
                  validate: {
                    acceptedFormats: (files) =>
                      ['image/jpeg', 'image/png', 'image/gif'].includes(files[0]?.type) || 'Only JPG, PNG, and GIF files are allowed',
                  },
                })}
                className="input input-bordered"
              />
              {errors.profilepicture && <p className="text-red-500">{errors.profilepicture.message}</p>}
            </div>

            <div>
              <label className="label">
                <Link to={'/login'}>Existing User?</Link>
              </label>
            </div>

            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary">Sign Up</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

