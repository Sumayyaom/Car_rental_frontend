import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import { deleteReview, ViewAllReviews } from '../../services/adminAPI';

export default function ViewReviews() {
    const [Reviews, setReviews] = useState([]);
    let toastFired = false;

    useEffect(() => {
      const fetchReviews = async () => {
        const review = await ViewAllReviews();
        if (review.length > 0) {
          setReviews(review);
          console.log("SetReviews",review);
          if (!toastFired) {
            toast.success('Reviews fetched successfully');
            toastFired = true;
          }
        } else {
          toast.error('No Reviews found');
        }
      };
  
      fetchReviews();
    }, []); 
  
    const handleDeleteReview = async (reviewId) => {
      if (window.confirm('Are you sure you want to delete this review?')) {
        try {
          const response = await deleteReview(reviewId);
          setReviews((prevUsers) => prevUsers.filter((review) => Reviews._id !== reviewId));
        //   console.log("response=====>",response);
          toast.success('Review deleted successfully');
        } catch (error) {
          toast.error('Failed to delete review');
          console.error(error);
        }
      }
    };
  
  
    return (
      <div className="overflow-x-auto mt-4 mb-4 ml-5">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Review Details</th>
            </tr>
          </thead>
          <tbody>
            {Reviews.map((review) => (
              <tr key={Reviews._id}>
                <td>
                  <div className="flex items-center gap-3">
                    <div>
                      <div className="font-bold">{review.carid}</div>
                      <div className="text-sm opacity-50">{review.carname || 'Unknown'}</div>
                    </div>
                    <div>
                      <div className="font-bold">{review.userid}</div>
                      <div className="text-sm opacity-50">{review.username || 'Unknown'}</div> 
                    </div>
                    <div>
                      <div className="font-bold">{review.reviewstring}</div>
                      <div className="text-sm opacity-50">{review.rating}</div>
                    </div>
                  </div>
                </td>
                <td>
                <button className="btn btn-error" onClick={() => handleDeleteReview(review._id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
}

