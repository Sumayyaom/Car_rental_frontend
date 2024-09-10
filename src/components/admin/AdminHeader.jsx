import React from 'react';
import { Link } from 'react-router-dom';
import Mode from '../Mode';
import { CircleUserRound } from 'lucide-react';

export default function AdminHeader() {
  return (
    <div className='flex items-center justify-between w-full h-32 px-20 shadow-xl'>
        <div>
            <h1 className='text-4xl font-bold'>Car Rental</h1>
        </div>

    <nav className='flex gap-10 font-semibold'>
        <Link to="/admin/home">Home</Link>
        <Link to="/admin/deleteCar/:id">DeleteCar</Link>
        <Link to="/admin/search">Search</Link>
    </nav>

    <div className='flex items-center gap-8'>
        <Mode />
        <Link to="/admin/profile" className='text-gray-700 hover:text-blue-500'>
        <CircleUserRound /></Link>
    </div>
    </div>
  )
}
