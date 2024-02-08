import { useEffect, useState } from "react";
import axios from "axios"; // Import axios

import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";

export default function Donate() {
  const [stripePromise, setStripePromise] = useState(null);
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    axios.get("http://localhost:5000/config")
      .then(response => {
        // Make sure that publishableKey is a string and not undefined
        if (typeof response.data.publishableKey === 'string') {
          setStripePromise(loadStripe(response.data.publishableKey));
        } else {
          // Log an error if publishableKey is not a string
          console.error('publishableKey is not a string:', response.data.publishableKey);
        }
      })
      .catch(error => {
        // Log any error that occurs during the axios request
        console.error('Error fetching publishableKey:', error);
      });
  }, []);
  

  useEffect(() => {
    // Use axios to post and create a payment intent
    axios.post("http://localhost:5000/create-payment-intent", {})
      .then(response => {
        const { clientSecret } = response.data;
        setClientSecret(clientSecret);
      })
      .catch(error => {
        console.error('Error creating payment intent:', error);
      });
  }, []);

return (
  <div className="flex flex-col justify-center items-center min-h-screen p-6">
    <h1 className="text-3xl font-bold mb-4">React Stripe and the Payment Element</h1>
    {clientSecret && stripePromise && (
      <div className="w-full max-w-md"> {/* This container will limit the width of your form */}
        <Elements stripe={stripePromise} options={{ clientSecret }}>
          <CheckoutForm />
        </Elements>
      </div>
    )}
  </div>
);
}
