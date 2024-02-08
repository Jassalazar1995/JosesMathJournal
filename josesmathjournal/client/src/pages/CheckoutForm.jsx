import { useState } from "react";
import { useStripe, useElements } from "@stripe/react-stripe-js";
import { PaymentElement } from "@stripe/react-stripe-js";

export default function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();

  const [message, setMessage] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      console.log('line18')
      return;
    }

    setIsProcessing(true);
    
    const { error, paymentIntent } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/completion`,
      },
      redirect: "if_required",
    });
    console.log('line30')

    if (error) {
      setMessage(error.message);
      console.log('line33')
    } else if(paymentIntent && paymentIntent.status === "succeeded") {
      console.log('line35')
      setMessage(`Payment status: ${paymentIntent.status}`);
    } else {
      setMessage("Unexpected state")
      console.log('line39')
    }


    setIsProcessing(false)
  };

  return (
    <form id="payment-form" onSubmit={handleSubmit}>
      <PaymentElement id="payment-element" />
      <button className = "bg-purple-600 rounded-3 text-white border-0 py-3 px-4 mt-4 font-semibold cursor-pointer transition-all ease-in-out block" disabled={isProcessing || !stripe || !elements} id="submit">
        <span id="button-text">
          {isProcessing ? "Processing ... " : "Pay now"}
        </span>
      </button>
      {/* Show any error or success messages */}
      {message && <div id="payment-message">{message}</div>}
    </form>
  );
}
