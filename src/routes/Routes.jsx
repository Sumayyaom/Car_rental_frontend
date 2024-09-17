import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/user/Home";
import Search from "../pages/user/Search";
import Contact from "../pages/user/Contact";
import Login from "../pages/user/Login";
import Signup from "../pages/user/Signup";
import RootLayout from "../layouts/RootLayout";
import UserLayout from "../layouts/UserLayout";
import ErrorPage from "../pages/user/ErrorPage";
import About from "../pages/user/About";
import AddCar from "../pages/admin/AddCar";
import DeleteCars from "../pages/admin/DeleteCars";
import AdminLayout from "../layouts/AdminLayout";
import { UserCheck } from "lucide-react";
import UserProfile from "../pages/user/UserProfile";
import EditProfile from "../pages/user/EditProfile";
import CarDetails from "../pages/user/CarDetails";
import Cars from "../pages/user/Cars";
import CarBook from "../pages/user/CarBook";
import AdminViewCar from "../pages/admin/AdminViewCar";
import AdminCarDetails from "../pages/admin/AdminCarDetails";
import ViewUsers from "../pages/admin/ViewUsers";
import AdminProfile from "../pages/admin/AdminProfile";
import AdminEdit from "../pages/admin/AdminEdit";
import EditCar from "../pages/admin/EditCar";
import ViewBookings from "../pages/admin/ViewBookings";
import ViewPayments from "../pages/admin/ViewPayments";
// import Bookings from "../pages/user/Bookings";
import AdminHome from "../pages/admin/AdminHome";
import AdminSearchCar from "../pages/admin/AdminSearchCar";
import RootHome from "../pages/root/RootHome";
import Review from "../pages/user/Review";
import ViewReviews from "../pages/admin/ViewReviews";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
            path: "",
            element: <RootHome />
        },
        {
            path: "about",
            element: <About />
        },
        {
            path: "contact",
            element: <Contact />
        },
        {
            path: "login",
            element: <Login />
        },
        {
            path: "signup",
            element: <Signup />
        },
      ]
    },
    {
        path: 'user',
        element: <UserLayout />,
        
        children: [
            {
                path: 'home',
                element: <Home />
            },
            {
                path: "about",
                element: <About />
            },
            {
                path: 'search',
                element: <Search />
            },
            {
                path: 'cars',
                element: <Cars />
            },
            {
                path: 'bookcar/:id',
                element: <CarBook />
            },
            {
                path: 'profile',
                element: <UserProfile />,
                
                children: [
                    {
                      path: 'editprofile', 
                      element: <EditProfile />
                    },
                  ]
            }, 
            {
                path: 'carDetails/:id',
                element: <CarDetails />
            },
            {
                path: 'review/:id',
                element: <Review />
            }
        ]
    },
    {
        path: 'admin',
        element: <AdminLayout />,
        
        children: [
            {
                path: 'home',
                element: <AdminHome />
            },
            {
                path: "addCar",
                element: <AddCar />
            },
            {
                path: 'viewCars',
                element: <AdminViewCar />
            },
            {
                path: 'deleteCar/:id',
                element: <DeleteCars />
            },
            {
                path: 'search',
                element: <AdminSearchCar />,
            },
            {
                path: 'carDetails/:id',
                element: <AdminCarDetails />,
                children: [
                    {
                        path: 'editCar/:id',
                        element: <EditCar />
                    }
                ]
            },
            {
                path: 'viewUsers',
                element: <ViewUsers />
            },
            {
                path: 'profile',
                element: <AdminProfile /> ,
                children: [
                    {
                      path: 'editprofile', 
                      element: <AdminEdit />
                    }
                  ]
            },
            {
                path: 'viewBookings',
                element: <ViewBookings />
            },
            {
                path: 'viewPayments',
                element: <ViewPayments /> 
            },
            {
                path: "review",
                element: <ViewReviews />
            }
        ]
    }
  ]);