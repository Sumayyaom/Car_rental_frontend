import React from 'react';
import { Link } from 'react-router-dom';
import Mode from '../Mode';
import { CircleUserRound } from 'lucide-react';

export default function UserHeader() {
  return (
    <div className='flex items-center justify-between w-full h-32 px-20 shadow-xl'>
        <div>
            <h1 className='text-4xl font-bold'>Car Rental</h1>
        </div>

    <nav className='flex gap-10 font-semibold'>
        <Link to="/user/home">Home</Link>
        <Link to="/user/about">About</Link>
        <Link to="/user/search">Search</Link>
        <Link to="/user/cars">Cars</Link>
        <Link to="/user/carDetails/:id">CarDetails</Link>
    </nav>

    <div className='flex items-center gap-8'>
        <Mode />
        <CircleUserRound />
    </div>
    </div>
  )
}
