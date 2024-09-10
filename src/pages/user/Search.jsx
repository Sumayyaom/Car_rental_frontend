import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { searchCar } from '../../services/carAPI';
import SearchCards from '../../components/ui/SearchCards';

export default function Search() {
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
      console.log(error);
      toast.error('Car not found');
    }
  };

  return (
    <div>
      {/* Search Form */}
      <div className="hero bg-base-200 py-20">
        <div className="hero-content flex-col lg:flex-row lg:w-15/15">
          <div className="card bg-base-100 w-full max-w-l shrink-0 shadow-2xl">
            <form className="card-body" onSubmit={handleSubmit(onSearch)}>
              <div className="form-control">
                <h1 className="text-3xl font-bold">Search car</h1>
                <label className="label">
                  <span className="label-text">Enter the place to search</span>
                </label>
                <input
                  type="text"
                  placeholder="Location"
                  {...register('location', { required: true })}
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">
                  Search
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Conditional rendering of car cards */}
      {cars.length > 0 && (
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-6">
          {cars.map((value) => (
        <SearchCards key={value._id} cars={value} />
          ))}
        </div>
      )}
    </div>
  );
}
