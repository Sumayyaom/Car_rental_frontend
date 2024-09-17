import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { searchCar } from '../../services/carAPI';
import AdminCarCards from '../../components/ui/AdminCarCards';

export default function AdminSearchCar() {
  const [cars, setCars] = useState([]); 

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSearch = async (data) => {
    try {
      const response = await searchCar(data);
      console.log('response====>', response);
      setCars(response || []); 

      if (response.length > 0) {
        toast.success('Cars Found');
      } else {
        toast.error('No cars found at this location.');
      }
    } catch (error) {
      console.error('Error fetching cars:', error);
      toast.error('An error occurred while searching for cars.');
    }
  };

  return (
    <div className="hero bg-base-200 py-20">
      {/* Only show form if cars are not found */}
      {cars.length === 0 && (
        <div className="hero-content flex-col lg:flex-row lg:w-12/12">
          <div className="card bg-base-100 w-full max-w-l shrink-0 shadow-2xl">
            <form className="card-body" onSubmit={handleSubmit(onSearch)}>
              <div className="form-control">
                <h1 className="text-3xl font-bold">Search Car</h1>
                <label className="label">
                  <span className="label-text">Enter the location to search</span>
                </label>
                <input
                  type="text"
                  placeholder="Location"
                  {...register('location', {
                    required: 'Location is required',
                    minLength: {
                      value: 3,
                      message: 'Location must be at least 3 characters long',
                    },
                  })}
                  className={`input input-bordered ${errors.location ? 'border-red-500' : ''}`}
                />
                {errors.location && (
                  <p className="text-red-500 text-sm">{errors.location.message}</p>
                )}
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary w-full">
                  Search
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Conditional rendering of car cards */}
      {cars.length > 0 && (
        <div className="mt-10 px-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {cars.map((value) => (
            <AdminCarCards key={value._id} cars={value} />
          ))}
        </div>
      )}

      {cars.length === 0 && (
        <div className="text-center mt-10 text-lg text-gray-500">
          No cars found
        </div>
      )}
    </div>
  );
}

