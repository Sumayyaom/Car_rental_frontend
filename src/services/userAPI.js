import axios from "axios";
import { axiosInstance } from "../config/axiosinstance";
import toast from "react-hot-toast";

export const userLogin = async(data)=>{
    try {
        const response = await axiosInstance({
            url:"/user/login",
            method:"POST",
            data,
            withCredentials: true,
          });
        //   console.log("Axios Base URL:", axiosInstance.defaults.baseURL);
          return response?.data;
    } catch (error) {
        console.log(error);
        toast.error('Login Failed');
    }
};

export const userSignup = async(data)=>{
    try {
        // Create a FormData object to handle file uploads
        const formData = new FormData();
        Object.keys(data).forEach((key) => {
        if (key === 'profilePicture') {
            formData.append(key, data[key][0]); // Access the file object in the array
        } else {
            formData.append(key, data[key]);
        }
    });
        const response = await axiosInstance({
            url:"/user/signup",
            method:"POST",
            formData,
            withCredentials: true,
            headers: {
                'Content-Type': 'multipart/form-data',
              },
          });
          
          return response?.data;
          toast.success('Registered successfully');
    } catch (error) {
        console.log(error);
        toast.error('User registration Failed');
    }
};

export const userCheck = async() =>{

    // try {
    //     const response = await axiosInstance({
    //         url:'/user/user-check',
    //         method:"GET",
    //     })
    //     return response;
    // } catch (error) {
    //     console.log(error);
    // }
}