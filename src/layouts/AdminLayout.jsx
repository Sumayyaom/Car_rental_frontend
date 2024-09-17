import { Link, Outlet } from "react-router-dom";
import AdminHeader from "../components/admin/AdminHeader";
import Footer from "../components/Footer";

export default function AdminLayout() {
    return (
      <div>
          <AdminHeader />
          <main className="flex flex-1 flex-col md:flex-row min-h-screen">
          {/* Sidebar */}
          <aside className="w-full md:w-1/4 bg-gray-800 text-white p-4">
              <ul><Link to={'/admin/home'}>
                <li className="py-2 px-4 hover:bg-gray-700 rounded cursor-pointer">
                  Admin Dashboard
                </li></Link>
                <Link to="/admin/addCar">
                <li className="py-2 px-4 hover:bg-gray-700 rounded cursor-pointer">
                  Add new car
                </li></Link>
                <Link to="/admin/viewCars">
                <li className="py-2 px-4 hover:bg-gray-700 rounded cursor-pointer">
                  View Cars
                </li></Link>
                <Link to="/admin/viewUsers">
                <li className="py-2 px-4 hover:bg-gray-700 rounded cursor-pointer">
                  View Users
                </li></Link>
                <Link to="/admin/viewBookings">
                <li className="py-2 px-4 hover:bg-gray-700 rounded cursor-pointer">
                  View Bookings
                </li></Link>
                <Link to="/admin/review">
                <li className="py-2 px-4 hover:bg-gray-700 rounded cursor-pointer">
                  View Reviews
                </li></Link>
                <Link to="/admin/search">
                <li className="py-2 px-4 hover:bg-gray-700 rounded cursor-pointer">
                  Search
                </li></Link>
              </ul>
            </aside>
            <Outlet />
            </main>
          <Footer />
      </div>
    )
  }