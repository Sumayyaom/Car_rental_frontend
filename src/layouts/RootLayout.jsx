import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'
import Carousel from '../pages/user/HomeBanner'
import HomeBanner from '../pages/user/HomeBanner'
 
export default function RootLayout() {
  return (
    <div>
        <Header />
        <HomeBanner />
        <div className='min-h-96'>
          <Outlet />
        </div>
        <Footer />
    </div>
  )
}
