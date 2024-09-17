import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { carAdd } from '../../services/carAPI';

export default function AddCar() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const formData = new FormData();
      for (const key in data) {
        formData.append(key, data[key]);
      }

      console.log(data, "=======> data");
      const response = await carAdd(formData);
      console.log(response);
      toast.success('Car Registered Successfully');
      reset(); 
    } catch (error) {
      console.log(error);
      toast.error('Car Registration Failed');
    }
  };

  return (
    <div className="hero bg-base-200 py-20">
      <div className="hero-content flex-col lg:flex-row lg:w-6/12">
        <div className="card bg-base-100 w-full max-w-l shrink-0 shadow-2xl">
          <form className="card-body" onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
            <div className="form-control">
              <h1 className="text-3xl font-bold">Add a new car</h1>
              
              <label className="label">
                <span className="label-text">Car name</span>
              </label>
              <input
                type="text"
                placeholder="Car name"
                {...register("name", { required: "Car name is required" })}
                className="input input-bordered"
              />
              {errors.name && <p className="text-red-500">{errors.name.message}</p>}

              <label className="label">
                <span className="label-text">Model Number</span>
              </label>
              <input
                type="text"
                placeholder="Model number"
                {...register("modelno", { required: "Model number is required" })}
                className="input input-bordered"
              />
              {errors.modelno && <p className="text-red-500">{errors.modelno.message}</p>}

              <label className="label">
                <span className="label-text">Brand</span>
              </label>
              <input
                type="text"
                placeholder="Brand"
                {...register("brand", { required: "Brand is required" })}
                className="input input-bordered"
              />

              <label className="label">
                <span className="label-text">Price Per Day</span>
              </label>
              <input
                type="number"
                step="0.01"
                placeholder="Price per day"
                {...register("price", {
                  required: "Price per day is required",
                  valueAsNumber: true,
                  min: { value: 1, message: "Price must be at least $1" },
                })}
                className="input input-bordered"
              />
              {errors.price && <p className="text-red-500">{errors.price.message}</p>}

              <label className="label">
                <span className="label-text">Fuel Type</span>
              </label>
              <input
                type="text"
                placeholder="Fuel type"
                {...register("fueltype", { required: "Fuel type is required" })}
                className="input input-bordered"
              />
              {errors.fueltype && <p className="text-red-500">{errors.fueltype.message}</p>}

              <label className="label">
                <span className="label-text">Transmission</span>
              </label>
              <input
                type="text"
                placeholder="Transmission"
                {...register("transmission", { required: "Transmission type is required" })}
                className="input input-bordered"
              />
              {errors.transmission && <p className="text-red-500">{errors.transmission.message}</p>}

              <label className="label">
                <span className="label-text">Location</span>
              </label>
              <input
                type="text"
                placeholder="Location"
                {...register("location", { required: "Location is required" })}
                className="input input-bordered"
              />
              {errors.location && <p className="text-red-500">{errors.location.message}</p>}
              
              <label className="label">
                <span className="label-text">Photo</span>
              </label>
              <input
                type="file"
                accept="image/*"
                {...register("photo", { required: "Photo is required" })}
                className="input input-bordered"
              />
              {errors.photo && <p className="text-red-500">{errors.photo.message}</p>}

            </div>

            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary">Add Car</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
