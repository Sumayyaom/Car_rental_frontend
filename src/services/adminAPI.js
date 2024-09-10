import toast from "react-hot-toast";
import { axiosInstances } from "../config/axiosInstances";

export const ViewAllUsers = async() => {
    try{
        const response = await axiosInstances({
          url: "/admin/viewuser",
          method: "GET",
          withCredentials: true
      })
      return response?.data.data;
      }
    catch(error){
      console.error("error");
      toast.error("Failed to fetch users");
      return null;
    }
}

export const deleteUser = async (userId) => {
  try {
    console.log("Entering try");
    
    const response = await axiosInstances({
      url: `/admin/deleteuser/${userId}`,
      method: "DELETE",
      withCredentials: true
    });
    console.log("response1======>",response)
    return response?.data;
  } catch (error) {
    console.error("Error deleting user", error);
  }
};

export const ViewAllBookings = async() => {
  try{
      const response = await axiosInstances({
        url: "/admin/viewbookings",
        method: "GET",
        withCredentials: true
    })
    return response?.data.data;
    }
  catch(error){
    console.error("error");
    toast.error("Failed to fetch users");
    return null;
  }
}

export const deleteBooking = async (bookingId) => {
  try {
    const response = await axiosInstances({
      url: `/admin/deletebooking/${bookingId}`,
      method: "DELETE",
      withCredentials: true
    });
    console.log("response1======>",response)
    return response?.data;
  } catch (error) {
    console.error("Error deleting user", error);
  }
};


export const ViewAllPayments = async() => {
  try{
      const response = await axiosInstances({
        url: "/admin/viewpayments",
        method: "GET",
        withCredentials: true
    })
    return response?.data.data;
    }
  catch(error){
    console.error("error");
    toast.error("Failed to fetch users");
    return null;
  }
}

export const deletePayment = async (paymentId) => {
  try {
    const response = await axiosInstances({
      url: `/admin/deletebooking/${paymentId}`,
      method: "DELETE",
      withCredentials: true
    });
    console.log("response1======>",response)
    return response?.data;
  } catch (error) {
    console.error("Error deleting user", error);
  }
};

