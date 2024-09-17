import React from 'react';
import { Link } from 'react-router-dom';
import HomeBanner from '../user/HomeBanner';

export default function RootHome() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <HomeBanner />

      <div className="mt-10 text-center">
        <h1 className="text-4xl font-bold text-gray-800">Welcome to Car Rental Service</h1>
        <p className="text-gray-600 mt-4">
          The easiest way to rent a car online. Please Register or Login now!
        </p>

        <div className="mt-8 space-x-4">
        <Link to="/signup">
           <button className="btn btn-primary">Register Now</button>
         </Link>
          <Link to="/login">
          <button className="btn btn-primary">Login</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

