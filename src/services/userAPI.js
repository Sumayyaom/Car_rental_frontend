import toast from "react-hot-toast";
import { axiosInstances } from "../config/axiosInstances";

export const userLogin = async(data)=>{
    try {
        const response = await axiosInstances({
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
        if (key === 'profilepicture') {
            formData.append(key, data[key][0]); // Access the file object in the array
        } else {
            formData.append(key, data[key]);
        }
    });
        const response = await axiosInstances({
            url:"/user/signup",
            method:"POST",
            data: formData,
            withCredentials: true,
            headers: {
                'Content-Type': 'multipart/form-data',
              },
          });
          return response?.data;
          
    } catch (error) {
        console.log(error);
        
    }
};

// export const userCheck = async() =>{

//     // try {
//     //     const response = await axiosInstance({
//     //         url:'/user/user-check',
//     //         method:"GET",
//     //     })
//     //     return response;
//     // } catch (error) {
//     //     console.log(error);
//     // }
// }

export const Profile = async (req,res,next) => {
    try{
        const response = await axiosInstances({
            url: "/user/profile",
            method: "GET",
            withCredentials: true
        })
        console.log("Profile",response);
        return response?.data;
    }
    catch{
        console.log("Error fetching data");
        toast.error("Error fetching data");
    }
};

export const Logout = async() => {
    try {
        const response = await axiosInstances({
            url: "/user/logout",
            method: "POST",
            withCredentials: true
        });
        return response?.data;
        
    } catch (error) {
        toast.error("Log out failed")
        console.log(error);
    }
};

export const userDelete = async() =>{
    try {
        const response = await axiosInstances({
            url: "/admin/deleteuser",
            method: "DELETE",
            withCredentials: true
        });
        return response?.data;
        toast.error("Error while deleting user");
    } catch (error) {
        toast.error("Error while deleting user");
        console.log(error);
    }
}

export const userUpdate = async(formData) =>{
    try{
        const response = await axiosInstances({
            url: `/user/updateuser`,
            method: "PUT",
            withCredentials: true,
            data: formData,
            headers: {
                'Content-Type': 'multipart/form-data',
              },
        })
        console.log("Updated data",response);
        return response?.data;
    }
    catch{
        console.log("Error updating data");
        toast.error("Error updating data");
    }
}

export const BookCar = async(data) =>{
    try{
        const response = await axiosInstances({
            url: `/user/book`,
            method: "POST",
            withCredentials: true,
            data
        })
        console.log("Booking data",response);
        return response?.data;
    }
    catch{
        console.log("Error booking car");
        toast.error("Error booking car");
    }
}