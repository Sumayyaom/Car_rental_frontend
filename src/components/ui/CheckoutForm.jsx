import { CardNumberElement, CardExpiryElement, CardCvcElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { axiosInstances } from '../../config/axiosInstances';



export default function CheckoutForm({ clientSecret, bookingId, userId }) {
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    console.log("Booking ID: ", bookingId);
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const cardNumberElement = elements.getElement(CardNumberElement);
    // const cardExpiryElement = elements.getElement(CardExpiryElement);
    // const cardCvcElement = elements.getElement(CardCvcElement);

    try {
      const { error, paymentIntent } = await stripe.confirmCardPayment(
        clientSecret,
        {
          payment_method: {
            card: cardNumberElement,
          },
        }
        
      );
      console.log(paymentIntent.id);
      const transactionID = paymentIntent.id;
      const paymentstatus = 'Completed';
      console.log(transactionID);
      if (error) {
        toast.error(error.message);
      } else if (paymentIntent.status === 'succeeded') {
        
        try {
          await axiosInstances.post('/user/update-payment-status', {
            bookingId,
            paymentstatus
          });

          toast.success('Payment status updated in booking!');
          navigate('/user/Success');
        } catch (err) {
          console.error('Error updating payment status:', err);
          toast.error('Failed to update payment status. Please try again.');
        }

       toast.success('Payment successful!');
        navigate('/user/Success');
        // window.location.reload();
        // Extract receipt URL safely
        // const receiptUrl = paymentIntent.charges?.data[0]?.receipt_url || '';

        // // Open receipt URL if available
        // if (receiptUrl) {
        //   window.open(receiptUrl, '_blank'); // Opens the receipt in a new tab
        // } else {
        //   console.log("No Receipt URL available",receiptUrl);
        // }

        // Save payment details
        // await axiosInstance.post('user/payment', {
        //   amount: paymentIntent.amount / 100, // Convert cents to dollars
        //   status: paymentIntent.status,
        //   paymentMethod: paymentIntent.payment_method_types[0],
        //   transactionId: transactionID,
        //   receiptUrl,
        // }, {
        //   withCredentials: true,
        // });

      }
    } catch (error) {
      console.error('Error during payment or saving payment details:', error);
      toast.error('Payment failed. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label className="block text-gray-700 mt-4">Card Number</label>
      <CardNumberElement className="border rounded-md px-4 py-2 w-full mt-2" />

      <label className="block text-gray-700 mt-4">Expiry Date</label>
      <CardExpiryElement className="border rounded-md px-4 py-2 w-full mt-2" />

      <label className="block text-gray-700 mt-4">CVC</label>
      <CardCvcElement className="border rounded-md px-4 py-2 w-full mt-2" />

      <button
        type="submit"
        className="bg-blue-600 text-white px-6 py-2 mt-4 rounded"
        disabled={!stripe}
      >
        Pay Now
      </button>
    </form>
  );
}
