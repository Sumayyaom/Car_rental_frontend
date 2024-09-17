import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { addReview } from '../../services/userAPI';
import toast from 'react-hot-toast';

export default function Review() {

    const navigate = useNavigate();
    const { state } = useLocation(); // Get the passed state
    const { booking } = state || {};
  const [rating, setRating] = useState(0); // Star rating (1-5)
  const [hover, setHover] = useState(0); // To show hover effect on stars
  const [reviewText, setReviewText] = useState(''); // Review string
 
  console.log("bookind username",booking.userid);

  const handleSubmitReview = async () => {
    if (rating < 1) {
      toast.error('Please give a rating');
      return;
    }
    if (!reviewText.trim()) {
      toast.error('Please enter your review');
      return;
    }

    try {
      const reviewData = {
        userid: booking.userid,
        username: booking.username,
        carid: booking.carid, 
        carname: booking.carname,
        rating,
        reviewstring: reviewText,
      };

      await addReview(reviewData); // Submit review to backend
      toast.success('Review submitted successfully');
      navigate('/user/profile'); // Redirect after successful submission
    } catch (error) {
      toast.error('Failed to submit review');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
    <h2 className="text-2xl font-bold text-center mb-6">Leave a Review</h2>

    {/* Rating Stars */}
    <div className="flex justify-center mb-4">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          onClick={() => setRating(star)}
          onMouseEnter={() => setHover(star)}
          onMouseLeave={() => setHover(0)}
          xmlns="http://www.w3.org/2000/svg"
          fill={star <= (hover || rating) ? 'yellow' : 'gray'}
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-8 h-8 cursor-pointer"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l2.304 7.09h7.458c.969 0 1.371 1.24.588 1.81l-6.042 4.387 2.302 7.089c.3.921-.755 1.688-1.538 1.117l-6.041-4.386-6.042 4.386c-.783.571-1.838-.196-1.538-1.117l2.302-7.089L.713 11.827c-.783-.57-.381-1.81.588-1.81h7.458l2.304-7.09z"
          />
        </svg>
      ))}
    </div>

    {/* Review Text Area */}
    <div className="mb-4">
      <textarea
        value={reviewText}
        onChange={(e) => setReviewText(e.target.value)}
        rows="5"
        className="w-full border border-gray-300 rounded-md px-3 py-2"
        placeholder="Write your review here..."
      />
    </div>

    {/* Submit Button */}
    <button
      onClick={handleSubmitReview}
      className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300"
    >
      Submit Review
    </button>
  </div>
  )
}

