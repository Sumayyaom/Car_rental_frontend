import React, { useEffect, useState } from 'react'
import { ViewAllCars } from '../../services/carAPI';
import { ViewAllBookings, ViewAllUsers } from '../../services/adminAPI';

export default function AdminHome() {

  const [cars, setCars] = useState([]);
  const [users,setUsers] = useState([]);
  const [bookings,setBookings] = useState([]);

    useEffect(() => {
      const fetchCars = async () => {
        const carData = await ViewAllCars();
        setCars(carData.data)
      };

      const fetchUsers = async() => {
        const userData = await ViewAllUsers();
        setUsers(userData);
      };

      const fetchBookings = async() => {
        const bookingData = await ViewAllBookings();
        setBookings(bookingData);
      };

      fetchCars();
      fetchUsers();
      fetchBookings();
    }, []);

    console.log("Users------>",users);
    console.log("Cars------>",cars);
    console.log("Bookings------>",bookings);
    
    const No_of_cars = cars?.length || 0;
    console.log("No of cars:", No_of_cars);

    const No_of_users = users?.length || 0;
    console.log("No of users:", No_of_users);

    const No_of_Bookings = bookings?.length || 0;
    console.log("No of Bookings:", No_of_Bookings);
    
    

    return (

      <div className="min-h-screen flex flex-col w-full">
      <section className="flex-1 p-6 shadow-md rounded-lg">
          <h1 className="text-2xl font-semibold mb-6">Welcome, Admin!</h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-blue-500 text-white p-6 rounded-lg shadow-lg">
              <h2 className="text-lg font-semibold">Active Users</h2>
              <p className="text-3xl mt-2">{No_of_users}</p>
            </div>
            <div className="bg-green-500 text-white p-6 rounded-lg shadow-lg">
              <h2 className="text-lg font-semibold">Total Cars</h2>
              <p className="text-3xl mt-2">{No_of_cars}</p>
            </div>
            <div className="bg-yellow-500 text-white p-6 rounded-lg shadow-lg">
              <h2 className="text-lg font-semibold">Total Bookings</h2>
              <p className="text-3xl mt-2">{No_of_Bookings}</p>
            </div>
          </div>
        </section>
        </div>

      );
}
