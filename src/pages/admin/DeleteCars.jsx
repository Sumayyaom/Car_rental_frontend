import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { carDelete } from '../../services/carAPI';
import toast from 'react-hot-toast';

export default function DeleteCars() {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onCarDelete = async (data) => {
    try {
      const response = await carDelete({ id: data.id });
      console.log('response====>', response.data);
      if (response.data) {
        toast.success('Cars Found');
      } else {
        toast.error('No cars found at this location.');
      }
    } catch (error) {
      console.log(error);
      toast.error('Car not found');
    }
  };

  return (
    <div className="hero bg-base-200 py-20">
        <div className="hero-content flex-col lg:flex-row lg:w-6/12">
          <div className="card bg-base-100 w-full max-w-l shrink-0 shadow-2xl">
            <form className="card-body" onSubmit={handleSubmit(onCarDelete)}>
              <div className="form-control">
                <h1 className="text-3xl font-bold">Delete car</h1>
                <label className="label">
                  <span className="label-text">Enter the car id</span>
                </label>
                <input
                  type="text"
                  placeholder="car id"
                  className="input input-bordered" 
                  {...register('_id', { required: true })}
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">
                  Delete
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
  )
}
