import { Outlet } from "react-router-dom";
import AdminHeader from "../components/admin/AdminHeader";
import Footer from "../components/Footer";
import Carousel from "../pages/user/HomeBanner";

export default function AdminLayout() {
    return (
      <div>
          <AdminHeader />
          <Carousel />
          <div className='min-h-96'>
            <Outlet />
          </div>
          <Footer />
      </div>
    )
  }