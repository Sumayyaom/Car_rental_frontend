import React from 'react'
import { Link } from 'react-router-dom'

export default function SuccessPay() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md text-center">
        <h1 className="text-3xl font-bold text-green-600">Payment Successful!</h1>
        <p className="text-lg text-gray-700 mt-4">Thank you for your payment.</p>
        <p className="text-lg text-gray-700">Your booking has been confirmed.</p>
        <div className="mt-6">
          <Link
            to="/user/home"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Go to Home Page
          </Link>
        </div>
      </div>
    </div>
  )
}
