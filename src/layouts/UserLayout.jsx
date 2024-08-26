import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import UserHeader from '../components/user/userHeader';
import Carousel from '../pages/user/HomeBanner';

export default function UserLayout() {
    return (
      <div>
          <UserHeader />
          <Carousel />
          <div className='min-h-96'>
            <Outlet />
          </div>
          <Footer />
      </div>
    )
  }