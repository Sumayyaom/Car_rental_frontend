import React, { useEffect, useState } from 'react'
import { ViewAllCars } from '../../services/carAPI';
import AdminCarCards from '../../components/ui/AdminCarCards';
import toast from 'react-hot-toast';


export default function AdminViewCar() {
    const [cars, setCars] = useState([]);
    let toastFired = false;

    useEffect(() => {
      const fetchCars = async () => {
        const data = await ViewAllCars();
        setCars(data.data);
        if (!toastFired) {
          toast.success('Cars fetched successfully');
          toastFired = true;
        }
      };
      fetchCars();
    }, []);
  
    return (

      <div className="flex flex-col flex-1 w-full px-4 py-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">List of Cars</h1>
      {/* Car cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
        {cars.map((value) => (
          <AdminCarCards key={value._id} cars={value} />
        ))}
      </div>
    </div>

    );
}
