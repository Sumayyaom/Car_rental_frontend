import React from 'react'

export default function About() {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">About Us</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Welcome to the Car Rental Website, your trusted partner in providing reliable, affordable, and convenient car rental services. Our mission is to make your travel experience seamless and enjoyable, whether it's for business, leisure, or adventure.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div style={{ backgroundColor: '#ece3cf' }} className="p-6 rounded-lg shadow-md">
            <div className="text-center">
              <h3 className="text-xl font-semibold mt-4">Our Mission</h3>
              <p className="text-gray-600 mt-2">
                Our mission is to provide high-quality vehicles and excellent customer service that ensures a hassle-free rental experience for all our clients.
              </p>
            </div>
          </div>

          <div style={{ backgroundColor: '#ece3cf' }} className="p-6 rounded-lg shadow-md">
            <div className="text-center">
              <h3 className="text-xl font-semibold mt-4">Why Choose Us</h3>
              <p className="text-gray-600 mt-2">
                We offer a wide range of vehicles at competitive prices, with easy booking and flexible rental terms to suit your needs.
              </p>
            </div>
          </div>
          <div style={{ backgroundColor: '#ece3cf' }} className="p-6 rounded-lg shadow-md">
            <div className="text-center">
              <h3 className="text-xl font-semibold mt-4">Our Values</h3>
              <p className="text-gray-600 mt-2">
                Integrity, customer satisfaction, and safety are at the core of everything we do. We strive to exceed your expectations with every rental.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <a
            href="/contact"
            className="bg-green-600 text-white px-6 py-3 rounded-md shadow hover:bg-blue-700">
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  )
}
