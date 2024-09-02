import React from 'react'
import { Link } from 'react-router-dom'

export default function AddCar() {
  return (
    <div className="hero bg-base-200 py-20">
    <div className="hero-content flex-col lg:flex-row lg:w-6/12">
      <div className="card bg-base-100 w-full max-w-l shrink-0 shadow-2xl">
        <form className="card-body" >
          <div className="form-control">
            <h1 className="text-3xl font-bold">Add a new car</h1>
            <label className="label">
              <span className="label-text">Car name</span>
            </label>
            <input type="text" placeholder="name" className="input input-bordered" />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Model Number</span>
            </label>
            <input type="text" placeholder="modelno"  className="input input-bordered" />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Brand</span>
            </label>
            <input type="text" placeholder="brand"  className="input input-bordered" />
            </div>
            <div className="form-control">
            <label className="label">
              <span className="label-text">Price Per Day</span>
            </label>
            <input type="text" placeholder="pay per click"  className="input input-bordered" />
            </div>
            <div className="form-control">
            <label className="label">
              <span className="label-text">Fuel Type</span>
            </label>
            <input type="text" placeholder="fueltype" className="input input-bordered" />
            </div>
            <div className="form-control">
            <label className="label">
              <span className="label-text">Transmission</span>
            </label>
            <input type="text" placeholder="transmission" className="input input-bordered"  />
            </div>
            <div className="form-control">
            <label className="label">
              <span className="label-text">Location</span>
            </label>
            <input type="text" placeholder="location" className="input input-bordered" />
            </div>
            <div className="form-control">
            <label className="label">
              <span className="label-text">Photo</span>
            </label>
            <input type="file" placeholder="photo" className="input input-bordered"/>
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
