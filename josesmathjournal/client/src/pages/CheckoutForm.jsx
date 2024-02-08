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
    <form id="payment-form" onSubmit={handleSubmit} className="border border-light-grey rounded-custom-radius p-5 my-5 shadow-custom">
      <PaymentElement id="payment-element" className="block mb-2.5" />
      <button 
        disabled={isProcessing || !stripe || !elements} 
        id="submit"
        className="bg-accent rounded-custom-radius text-white border-0 py-3 px-4 mt-4 font-semibold cursor-pointer transition-all ease-in-out block hover:filter-contrast active:transform-active disabled:opacity-50 disabled:cursor-none"
      >
        <span id="button-text">
          {isProcessing ? "Processing ... " : "Pay now"}
        </span>
      </button>
      {/* Show any error or success messages */}
      {message && <div id="payment-message" className="font-source-code-pro bg-message-background text-message-text rounded-custom-radius p-5 my-5 font-tiny">{message}</div>}
    </form>
  );
}
