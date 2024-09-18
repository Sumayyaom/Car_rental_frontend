import React, { useEffect, useState } from 'react'
import { Link, Outlet, useNavigate, useParams } from 'react-router-dom';
import { carDelete, Viewcar } from '../../services/carAPI';
import toast from 'react-hot-toast';

export default function AdminCarDetails() {

  const navigate = useNavigate();
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
  
    const handleCarDelete = async({id}) => {
      try{
        const response = await carDelete({ id });
        console.log(response);
        toast.success('Car deleted successfully');
        navigate("/admin/viewCars");
      }catch(error){
        console.log(error);
      }
    };

    return (

      <div className="flex justify-center items-center min-h-screen bg-gray-100 w-full">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-4xl w-full">
        <div className="flex flex-col md:flex-row">
          {/* Car Image */}
          <div className="md:w-1/2">
            <img
              src={cars.photo}  // Ensure the correct image URL
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

            <div className="mt-6 flex gap-4">
              <Link to={`/admin/carDetails/${id}/editCar/${id}`}>
                <button className="btn btn-success" style={{ backgroundColor: "Highlight", color: "white", padding: "10px 20px" }}>
                  Edit
                </button>
              </Link>
              <button className="btn btn-danger" onClick={() => handleCarDelete({ id })} style={{ backgroundColor: "red", color: "white", padding: "10px 20px" }}>
                Delete
              </button>
            </div>
          </div>
        </div>
        <Outlet />
      </div>
    </div>  
    )
}
