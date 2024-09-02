import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function Search() {
  return (
    <div className="hero bg-base-200 py-20">
  <div className="hero-content flex-col lg:flex-row lg:w-6/12">
    <div className="card bg-base-100 w-full max-w-l shrink-0 shadow-2xl">
      <form className="card-body" >
        <div className="form-control">
          <h1 className="text-3xl font-bold">Search car</h1>
          <label className="label">
            <span className="label-text">Enter the place to search</span>
          </label>
          <input type="text" placeholder="Location" className="input input-bordered" required />
        </div>
        <div className="form-control mt-6">
          <button type="submit" className="btn btn-primary">Login</button>
        </div>
      </form>
    </div>
  </div>
</div>
  )
}
