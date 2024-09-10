import React, { useEffect, useState } from 'react';
import { ViewAllCars } from '../../services/carAPI';
import SearchCards from '../../components/ui/SearchCards';

const Cars = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const fetchCars = async () => {
      const data = await ViewAllCars();
      setCars(data.data)
    };
    fetchCars();
  }, []);

  return (
    <div>
      <div className="flex flex-col flex-1 w-full px-4 py-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">List of Cars</h1>
      {/* Car cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full">
        {cars.map((value) => (
          <SearchCards key={value._id} cars={value} />
        ))}
      </div>
    </div>
    </div>
  );
};

export default Cars;
