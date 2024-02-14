import React from 'react';
import { useNavigate } from 'react-router-dom'; 

function Completion(props) {
  const navigate = useNavigate(); 

  const handleContinue = () => {
    navigate('/'); 
  }

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-3xl font-bold mb-4">Thank you for your payment! 🎉</h1>
      <p className="text-lg mb-8">Your transaction has been successfully processed.</p>
      <button 
        onClick={handleContinue}
        className="px-6 py-2 border rounded-lg text-lg font-medium hover:bg-gray-100 transition duration-300"
      >
        Continue Learning
      </button>
      <div className="mt-8">
        <p className="text-gray-600">Having trouble? <a href="/support" className="text-blue-500 hover:underline">Contact Support</a></p>
      </div>
    </div>
  );
}

export default Completion;
