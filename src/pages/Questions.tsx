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
    setCurrentStep((prev) => prev + 1);
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 overflow-hidden bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
        {/* Stepper Header */}

        {currentStep <= steps.length ? (
          <>
            <div className="flex justify-between mb-6">
              {steps.map((step) => (
                <div
                  key={step.id}
                  className={`w-full p-2 text-center border-b-4 ${
                    currentStep === step.id
                      ? "border-blue-500"
                      : "border-gray-300"
                  }`}
                >
                  {step.name}
                </div>
              ))}
            </div>

            {/* Stepper Content */}
            <div className="flex-grow mb-4">
              <div className="relative sm:max-w-[300px] md:max-w-[400px] lg:max-w-[500px] mx-auto h-[auto] flex items-center justify-center">
                {steps[currentStep - 1].content}
              </div>
            </div>

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
                className={`px-4 py-2 rounded  bg-blue-500 text-white`}
              >
                {currentStep === 2 ? "Submit" : "Next"}
              </button>
            </div>
          </>
        ) : (
          <div className="p-4 text-center">
            <h2 className="mb-4 text-2xl font-bold">Successfully Completed!</h2>
            <p>Thanks for your time.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Questions;
