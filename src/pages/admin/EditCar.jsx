import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Viewcar, Updatecar } from '../../services/carAPI'; 
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

export default function EditCar() {
  const { id } = useParams();
  const { register, handleSubmit, setValue } = useForm();
  const [car, setCar] = useState(null);

  useEffect(() => {
    const fetchCarDetails = async () => {
      const data = await Viewcar({ id });
      setCar(data.data);
      // Pre-fill form fields
      setValue('name', data.data.name);
      setValue('modelno', data.data.modelno);
      setValue('brand', data.data.brand);
      setValue('price', data.data.price);
      setValue('fueltype', data.data.fueltype);
      setValue('transmission', data.data.transmission);
      setValue('location', data.data.location);
      setValue('photo', data.data.photo); // Handle file input separately if needed
    };

    fetchCarDetails();
  }, [id, setValue]);
  

  const onCarUpdate = async (data) => {
    try {
      const formData = new FormData();
  
      // Only append the fields that are changed
      if (car.name !== data.name) formData.append("name", data.name);
      if (car.modelno !== data.modelno) formData.append("modelno", data.modelno);
      if (car.brand !== data.brand) formData.append("brand", data.brand);
      if (car.price !== data.price) formData.append("price", data.price);
      if (car.fueltype !== data.fueltype) formData.append("fueltype", data.fueltype);
      if (car.transmission !== data.transmission) formData.append("transmission", data.transmission);
      if (car.location !== data.location) formData.append("location", data.location);
  
     // Handle file input (if user changes profile picture)
     if (data.photo instanceof File) {
      formData.append("photo", data.photo[0]);
    }

    // Debugging
    for (const pair of formData.entries()) {
      console.log(pair[0], pair[1]);
    }

      const response = await Updatecar(id, formData); 
      toast.success('Car updated successfully');
      console.log("Updated car details===========>",response);
    } catch (error) {
      console.log(error);
      toast.error('Car updation failed');
    }
  };

  if (!car) return <p>Loading...</p>;

  return (
    <div className="hero bg-base-200 py-20">
      <div className="hero-content flex-col lg:flex-row lg:w-6/12">
        <div className="card bg-base-100 w-full max-w-l shrink-0 shadow-2xl">
          <form className="card-body" onSubmit={handleSubmit(onCarUpdate)}>
            <div className="form-control">
              <h1 className="text-3xl font-bold">Edit Car</h1>
              <label className="label">
                <span className="label-text">Car Name</span>
              </label>
              <input type="text" placeholder="name" {...register("name")} className="input input-bordered" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Model Number</span>
              </label>
              <input type="text" placeholder="modelno" {...register("modelno")} className="input input-bordered" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Brand</span>
              </label>
              <input type="text" placeholder="brand" {...register("brand")} className="input input-bordered" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Price Per Day</span>
              </label>
              <input type="text" placeholder="price" {...register("price")} className="input input-bordered" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Fuel Type</span>
              </label>
              <input type="text" placeholder="fueltype" {...register("fueltype")} className="input input-bordered" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Transmission</span>
              </label>
              <input type="text" placeholder="transmission" {...register("transmission")} className="input input-bordered" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Location</span>
              </label>
              <input type="text" placeholder="location" {...register("location")} className="input input-bordered" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo</span>
              </label>
              <input type="file" {...register("photo")} className="input input-bordered" />
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary">Update Car</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
