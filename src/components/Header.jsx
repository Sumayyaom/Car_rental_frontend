import React from 'react';
import { Link } from 'react-router-dom';
import Mode from './Mode';

export default function Header() {
  return (
    
    <header className='w-full px-4 py-4 bg-white shadow-xl'>
      <div className='container mx-auto flex flex-wrap items-center justify-between'>
        <div className='flex-shrink-0'>
          <h1 className='text-3xl font-bold sm:text-4xl'>Car Rental</h1>
        </div>

        <nav className='flex flex-col sm:flex-row gap-4 sm:gap-10 font-semibold'>
          <Link to="/" className='hover:text-blue-500'>Home</Link>
          <Link to="/about" className='hover:text-blue-500'>About</Link>
          <Link to="/contact" className='hover:text-blue-500'>Contact</Link>
        </nav>

        <div className='flex items-center gap-4 sm:gap-8'>
          <Mode />
          <Link to="/signup">
           <button className="btn btn-primary">Register Now</button>
         </Link>
        </div>
      </div>
    </header>
  )
}
