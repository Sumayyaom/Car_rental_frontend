import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'
import Carousel from '../pages/user/HomeBanner'
 
export default function RootLayout() {
  return (
    <div>
        <Header />
        <Carousel />
        <div className='min-h-96'>
          <Outlet />
        </div>
        <Footer />
    </div>
  )
}
