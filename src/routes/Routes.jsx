import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/user/Home";
import Search from "../pages/user/Search";
import Contact from "../pages/user/Contact";
import Login from "../pages/user/Login";
import Signup from "../pages/user/Signup";
import RootLayout from "../layouts/RootLayout";
import UserLayout from "../layouts/UserLayout";
import CarDetails from "../pages/user/carDetails";
import Cars from "../pages/user/cars";
import ErrorPage from "../pages/user/ErrorPage";
import About from "../pages/user/About";
import AddCar from "../pages/admin/AddCar";
import DeleteCars from "../pages/admin/DeleteCars";
import AdminLayout from "../layouts/AdminLayout";



export const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
            path: "",
            element: <Home />
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
            path: "Login",
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
                path: 'carDetails/:id',
                element: <CarDetails />
            }
        ]
    },
    {
        path: 'admin',
        element: <AdminLayout />,
        
        children: [
            {
                path: 'home',
                element: <Home />
            },
            {
                path: "addCar",
                element: <AddCar />
            },
            {
                path: 'viewCars',
                element: <Cars />
            },
            {
                path: 'deleteCar/:id',
                element: <DeleteCars />
            },
            {
                path: 'search',
                element: <Search />
            }
        ]
    }
  ]);