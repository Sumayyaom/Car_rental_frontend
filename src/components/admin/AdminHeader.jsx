import React from 'react';
import { Link } from 'react-router-dom';
import Mode from '../Mode';
import { CircleUserRound } from 'lucide-react';

export default function AdminHeader() {
  return (

    <header className='w-full px-4 py-4 bg-white shadow-xl'>
    <div className='container mx-auto flex flex-wrap items-center justify-between'>
      <div className='flex-shrink-0'>
        <h1 className='text-3xl font-bold sm:text-4xl'>Car Rental</h1>
      </div>

      <nav className='flex flex-col sm:flex-row gap-4 sm:gap-10 font-semibold'>
      <Link to="/admin/home">Home</Link>
        {/* <Link to="/admin/deleteCar/:id">DeleteCar</Link> */}
        <Link to="/admin/search">Search</Link>
      </nav>

      <div className='flex items-center gap-4 sm:gap-8'>
        <Mode />
        <Link to="/admin/profile" className='text-gray-700 hover:text-blue-500'>
          <CircleUserRound size={24} />
        </Link>
      </div>
    </div>
  </header>
  )
}
