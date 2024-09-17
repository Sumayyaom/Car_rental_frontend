import React from 'react'
import { Link } from 'react-router-dom'

export default function SearchCards({cars}) {
  return (
    <div className="card card-compact bg-base-100 w-82 shadow-xl mb-6">
  <figure>
    <img
      src={cars.photo}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{cars.name}</h2>
    <p>Price : Rs.{cars.price}</p>
    <div className="card-actions justify-end ">
      <Link to={`/user/carDetails/${cars._id}`}>
        <button className="btn btn-primary">More Details</button>
      </Link>
    </div>
  </div>
</div>
  )
}