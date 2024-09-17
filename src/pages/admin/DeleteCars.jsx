import React from 'react';
import { useForm } from 'react-hook-form';
import { carDelete } from '../../services/carAPI';
import toast from 'react-hot-toast';

export default function DeleteCars() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const onCarDelete = async (data) => {
    try {
      const response = await carDelete({ id: data._id });
      console.log('response====>', response.data);
      if (response.data) {
        toast.success('Car deleted successfully.');
        reset();
      } else {
        toast.error('No car found with this ID.');
      }
    } catch (error) {
      console.log(error);
      toast.error('Error deleting car. Please try again.');
    }
  };

  return (
    <div className="hero bg-base-200 py-20">
      <div className="hero-content flex-col lg:flex-row lg:w-6/12">
        <div className="card bg-base-100 w-full max-w-l shrink-0 shadow-2xl">
          <form className="card-body" onSubmit={handleSubmit(onCarDelete)}>
            <div className="form-control">
              <h1 className="text-3xl font-bold">Delete Car</h1>
              <label className="label">
                <span className="label-text">Enter the Car ID</span>
              </label>
              <input
                type="text"
                placeholder="Car ID"
                className={`input input-bordered ${errors._id ? 'border-red-500' : ''}`}
                {...register('_id', { 
                  required: 'Car ID is required', 
                  pattern: {
                    value: /^[a-fA-F0-9]{24}$/, // Validates for MongoDB ObjectID
                    message: 'Invalid Car ID format' 
                  }
                })}
              />
              {errors._id && <p className="text-red-500">{errors._id.message}</p>}
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
  );
}
