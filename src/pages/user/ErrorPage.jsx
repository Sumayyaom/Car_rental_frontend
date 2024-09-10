import React from 'react'
import { Link } from 'react-router-dom'

export default function ErrorPage() {
  return (
    <div className='min-h-screen w-full'>
        <h1>404 page not found</h1>
        <Link to={'/'}>Go to the Home Page</Link>
    </div>
  )
}
