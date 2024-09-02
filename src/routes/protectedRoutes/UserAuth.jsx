import React, { useEffect } from "react";
export const UserAuth = ({children}) => {
    const CheckUser = async() => {
        try {
            const response = await axiosInstance({
                url:'/user/check-user',
                method:"GET"
            })
            console.log(response, "======>response");
            
        } catch (error) {
            console.log(error); 
        }
    };

    useEffect(()=>{
        CheckUser();
    },[])
    return children;
}