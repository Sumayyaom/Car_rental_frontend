import React from 'react'
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { carAdd } from '../../services/carAPI';

export default function AddCar() {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  
  const onSubmit =  async (data) => {
    try{
      console.log(data, "=======> data");
      const response = await carAdd(data)
      console.log(response);
      toast.success('Car Registered Successfully');
    }catch(error){
      console.log(error);
      toast.error('Car Registration Failed');
    }
  }

  return (
    <div className="hero bg-base-200 py-20">
    <div className="hero-content flex-col lg:flex-row lg:w-6/12">
      <div className="card bg-base-100 w-full max-w-l shrink-0 shadow-2xl">
        <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control">
            <h1 className="text-3xl font-bold">Add a new car</h1>
            <label className="label">
              <span className="label-text">Car name</span>
            </label>
            <input type="text" placeholder="name" {...register("name", { required: true })} className="input input-bordered" />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Model Number</span>
            </label>
            <input type="text" placeholder="modelno"  {...register("modelno", { required: true })} className="input input-bordered" />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Brand</span>
            </label>
            <input type="text" placeholder="brand"  {...register("brand", { required: true })} className="input input-bordered" />
            </div>
            <div className="form-control">
            <label className="label">
              <span className="label-text">Price Per Day</span>
            </label>
            <input type="text" placeholder="price per day"  {...register("price", { required: true })} className="input input-bordered" />
            </div>
            <div className="form-control">
            <label className="label">
              <span className="label-text">Fuel Type</span>
            </label>
            <input type="text" placeholder="fueltype" {...register("fueltype", { required: true })} className="input input-bordered" />
            </div>
            <div className="form-control">
            <label className="label">
              <span className="label-text">Transmission</span>
            </label>
            <input type="text" placeholder="transmission" {...register("transmission", { required: true })} className="input input-bordered"  />
            </div>
            <div className="form-control">
            <label className="label">
              <span className="label-text">Location</span>
            </label>
            <input type="text" placeholder="location" {...register("location", { required: true })} className="input input-bordered" />
            </div>
            <div className="form-control">
            <label className="label">
              <span className="label-text">Photo</span>
            </label>
            <input type="file" placeholder="photo" {...register("photo", { required: true })} className="input input-bordered"/>
            </div>
            <div>
            <label className="label">
            </label>
          </div>
          <div className="form-control mt-6">
            <button type="submit" className="btn btn-primary">Add Car</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  )
}
