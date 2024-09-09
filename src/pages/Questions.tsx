import React, { useState } from "react";
import { FingerBase } from "../components/Finger/FingerBase";
import { AbdominalBase } from "../components/Abdominal/AbdominalBase";

const Questions: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const steps = [
    {
      id: 1,
      name: "Abdominal Pain",
      content: <AbdominalBase />,
    },
    {
      id: 2,
      name: "Finger Pain",
      content: <FingerBase />,
    },
  ];

  const handleNext = () => {
    if (currentStep < 2) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
        {/* Stepper Header */}
        <div className="flex justify-between mb-6">
          {steps.map((step) => (
            <div
              key={step.id}
              className={`w-full p-2 text-center border-b-4 ${
                currentStep === step.id ? "border-blue-500" : "border-gray-300"
              }`}
            >
              {step.name}
            </div>
          ))}
        </div>

        {/* Stepper Content */}
        <div className="mb-4">{steps[currentStep - 1].content}</div>

        {/* Stepper Controls */}
        <div className="flex justify-between">
          <button
            onClick={handlePrevious}
            disabled={currentStep === 1}
            className={`px-4 py-2 rounded ${
              currentStep === 1
                ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                : "bg-blue-500 text-white"
            }`}
          >
            Previous
          </button>
          <button
            onClick={handleNext}
            disabled={currentStep === 2}
            className={`px-4 py-2 rounded ${
              currentStep === 2
                ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                : "bg-blue-500 text-white"
            }`}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Questions;
