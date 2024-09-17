import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import UserHeaders from '../components/user/UserHeaders';

export default function UserLayout() {
    return (
      <div>
          <UserHeaders />
          <div className='min-h-96'>
            <Outlet />
          </div>
          <Footer />
      </div>
    )
  }