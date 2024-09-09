import React from "react";
import { useNavigate } from "react-router-dom";

export const Home: React.FC = () => {
  const navigate = useNavigate();
  const handleGetStarted = () => {
    navigate("/questions");
  };

  return (
    <div className="text-center mt-9">
      <h1 className="mb-4 text-4xl font-bold text-black">
        Welcome to Our Agnos
      </h1>
      <p className="mb-8 text-lg text-black">Take a question for your health</p>
      <button
        onClick={handleGetStarted}
        className="px-6 py-3 font-semibold text-blue-500 transition duration-300 bg-white rounded-lg shadow-lg hover:bg-blue-500 hover:text-white"
      >
        Get Started
      </button>
    </div>
  );
};
