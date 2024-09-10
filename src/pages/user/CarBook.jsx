import React, { useEffect, useState } from 'react';
import Cookies from "js-cookie"; 
import toast from 'react-hot-toast';
import { Viewcar } from '../../services/carAPI';
import { useParams } from 'react-router-dom';
import { BookCar } from '../../services/userAPI';
import CheckoutForm from '../../components/ui/CheckoutForm';
import {loadStripe} from '@stripe/stripe-js';
import { axiosInstance } from '../../config/axiosinstance';
import { Elements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

export default function CarBook() {

  const [clientSecret, setClientSecret] = useState('');

  const { id } = useParams();
  const [cars, setCars] = useState(null);
 
  const [pickupDate, setPickupDate] = useState('');
  const [dropoffDate, setDropoffDate] = useState('');
  const [totalPrice, setTotalPrice] = useState(0);
  const [diffDays, setDiffDays] = useState(0);

  const userid = Cookies.get("userId");  
  console.log("userID====>",userid);


  useEffect(() => {
    const fetchCarDetails = async () => {
      const data = await Viewcar({ id });
      setCars(data.data)
      console.log("response===>",data.data);
    };
    fetchCarDetails();
  }, [id]);

  // Function to calculate total price based on dates
  const calculateTotalPrice = () => {
    const pickup = new Date(pickupDate);
    const dropoff = new Date(dropoffDate);

    if (pickup >= dropoff) {
      toast.error("Dropoff date should be later than pickup date.");
      return;
    }

    const diffTime = Math.abs(dropoff - pickup);
    const calculatedDiffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); // Convert time difference to days

    if (calculatedDiffDays && cars?.price) {
      setDiffDays(calculatedDiffDays);
      setTotalPrice(calculatedDiffDays * cars.price);
    }
  };

  // Function to handle booking
  const handleBooking = async () => {
    if (!pickupDate || !dropoffDate || diffDays === 0 || totalPrice === 0) {
      toast.error('Please provide valid dates and calculate the price first.');
      return;
    }

    const bookingData = {
      userid: userid,
      // username: username,
      carid: cars._id,
      // carname: cars.name,
      pickupdate: pickupDate,
      dropoffdate: dropoffDate,
      totaldays: diffDays,
      totalprice: totalPrice,
    };

    try {
      const response = await BookCar(bookingData);
      console.log('Booking successful:', response.data);

      const paymentResponse = await axiosInstance.post('/payment/create-checkout-session', { totalPrice });
      setClientSecret(paymentResponse.data.clientSecret);

      toast.success('Booking confirmed! Proceed to payment.');
    } catch (error) {
      console.error('Error booking car or creating payment intent:', error);
      toast.error('Booking or payment failed. Please try again.');
    }
  };

  // Display a loading message while the car data is being fetched
  if (!cars) {
    return <div className="text-center text-lg">Loading car details...</div>;
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-4xl w-full">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2">
            <img
              src={cars?.photo || '/placeholder.png'} // Provide a fallback image
              alt="Car Image"
              className="rounded-lg object-cover w-full h-64 md:h-auto"
            />
          </div>

          <div className="md:w-1/2 md:pl-6 mt-4 md:mt-0">
            <h1 className="text-2xl font-bold text-gray-800">
              {cars.name}
            </h1>
            <p className="text-gray-800 mt-4 text-xl font-semibold">${cars?.price} per day</p>

            {/* Booking Form */}
            <div className="mt-6">
              <label className="block text-gray-700">Pickup Date</label>
              <input
                type="date"
                value={pickupDate}
                onChange={(e) => setPickupDate(e.target.value)}
                className="border rounded-md px-4 py-2 w-full mt-2"
              />

              <label className="block text-gray-700 mt-4">Dropoff Date</label>
              <input
                type="date"
                value={dropoffDate}
                onChange={(e) => setDropoffDate(e.target.value)}
                className="border rounded-md px-4 py-2 w-full mt-2"
              />

              <button
                onClick={calculateTotalPrice}
                className="bg-green-500 text-white px-6 py-2 mt-4 rounded">
                Calculate Total Price
              </button>

              {totalPrice > 0 && (
                <div className="mt-4 text-lg font-semibold text-gray-800">
                  Total Price: ${totalPrice}
                </div>
              )}

              <button
                onClick={handleBooking}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 mt-4 rounded">
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {clientSecret && (
        <Elements stripe={stripePromise} options={{ clientSecret }}>
          <CheckoutForm  clientSecret={clientSecret}/>
        </Elements>
      )}

    </div>
  )
}



