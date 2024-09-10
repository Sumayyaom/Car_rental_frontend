import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Viewcar } from "../../services/carAPI";


export default function CarDetails() {
  const [cars, setCars] = useState([]);  
  const { id } = useParams();

  useEffect(() => {
    const fetchCarDetails = async () => {
      const data = await Viewcar({ id });
      setCars(data.data)
      console.log("response===>",data.data);
    };
    fetchCarDetails();
  }, [id]);

  return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-4xl w-full">
        <div className="flex flex-col md:flex-row">
          {/* Car Image */}
          <div className="md:w-1/2">
            <img
              src={cars.photo}  // Make sure to have the correct image URL in the car object
              alt="Car Details"
              className="rounded-lg object-cover w-full h-64 md:h-auto"
            />
          </div>

          {/* Car Details */}
          <div className="md:w-1/2 md:pl-6 mt-4 md:mt-0">
            <h1 className="text-2xl font-bold text-gray-800">{cars.name}</h1><br />
            <p className="text-gray-800 mt-4 text-xl font-semibold">Car name: {cars.name}</p>
            <p className="text-gray-800 mt-4 text-xl font-semibold">Model no: {cars.modelno}</p>
            <p className="text-gray-800 mt-4 text-xl font-semibold">Brand: {cars.brand}</p>
            <p className="text-gray-800 mt-4 text-xl font-semibold">Price: {cars.price}</p>
            <p className="text-gray-800 mt-4 text-xl font-semibold">Fuel Type: {cars.fueltype}</p>
            <p className="text-gray-800 mt-4 text-xl font-semibold">Transmission: {cars.transmission}</p>
            <p className="text-gray-800 mt-4 text-xl font-semibold">Location: {cars.location}</p>

            <div className="mt-6">
              <Link to={{
                  pathname: `/user/bookcar/${cars._id}`,
                  state: {
                    carid: cars._id,
                    cars: cars
                  },
                }}>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md">
               Book Now
              </button></Link>
            </div>
          </div>
        </div>
      </div>
    </div>  
  )
}
