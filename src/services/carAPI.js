import toast from "react-hot-toast";
import { axiosInstance } from "../config/axiosinstance";

export const ViewAllCars = async() => {
    try{
        const response = await axiosInstance({
          url: "/car/viewallcars",
          method: "GET",
      })
      console.log("response====>",response)
      return response?.data;
      }
    catch(error){
      console.error("error");
      toast.error("Failed to fetch cars");
      return null;
    }
}

export const Viewcar = async({ id }) => {
  try {
    const response = await axiosInstance({
      url: `/car/viewcar/${id}`,
      method: "GET"
    })
      return response?.data;
  } catch (error) {
    console.log(error);
    
  }
}

export const searchCar = async(data) => {
  try {
    const response = await axiosInstance({
      url: `/car/search`,
      params: { name: data.location }, 
      method: "GET",
      data
    })
    return response?.data.data;
  } catch (error) {
    console.log(error);
  }
}

export const carAdd = async(data)=>{
  try {
      // Create a FormData object to handle file uploads
      const formData = new FormData();
      Object.keys(data).forEach((key) => {
      if (key === 'photo') {
          formData.append(key, data[key][0]); // Access the file object in the array
      } else {
          formData.append(key, data[key]);
      }
  });
      const response = await axiosInstance({
          url:"/car/addcar",
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

export const carDelete = async({ id }) =>{
  try {
    console.log("id==========>",{id});
    
      const response = await axiosInstance({
          url: `/car/deletecar/${ id }`,
          method: "DELETE",
          withCredentials: true
      });
      return response?.data;
  } catch (error) {
      toast.error("Error while deleting user");
      console.log(error);
  }
}

export const Updatecar = async (id, formData) => {
  try {
    const response = await axiosInstance({
      url:`/car/updatecar/${id}`, 
      method: "PUT",
      data: formData, 
      withCredentials: true
    });
    console.log("update===>",formData)
    return response.data;
  } catch (error) {
    console.error("Error updating car", error);
    throw error;
  }
};
