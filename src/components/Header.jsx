import React from 'react';
import { Link } from 'react-router-dom';
import Mode from './Mode';

export default function Header() {
  return (
    <div className='flex items-center justify-between w-full h-32 px-20 shadow-xl'>
        <div>
            <h1 className='text-4xl font-bold'>Car Rental</h1>
        </div>

    <nav className='flex gap-10 font-semibold'>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
    </nav>

    <div className='flex items-center gap-8'>
        <Mode />
        <Link to="/signup">
          <button className="btn btn-primary">Register Now</button>
        </Link>
    </div>
    </div>
  )
}
