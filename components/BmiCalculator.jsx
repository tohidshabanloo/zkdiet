"use client";

import React, { useState } from "react";

import "tailwindcss/base.css"; // Import base styles
import "tailwindcss/components.css"; // Import component styles
import "tailwindcss/utilities.css"; // Import utility styles

function App() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [gender, setGender] = useState("male");
  const [bmi, setBMI] = useState(null);

  const calculateBMI = () => {
    const heightInMeters = parseFloat(height) / 100;
    const weightInKg = parseFloat(weight);
    const genderFactor = gender === "male" ? 1 : 0.9;
    const calculatedBMI =
      (weightInKg / (heightInMeters * heightInMeters)) * genderFactor;
    setBMI(calculatedBMI.toFixed(2));
  };
  // Helper functions

  const getBMICategory = (bmi) => {
    if (bmi < 18.5) {
      return "Underweight";
    } else if (bmi >= 18.5 && bmi < 24.9) {
      return "Normal Weight";
    } else if (bmi >= 25 && bmi < 29.9) {
      return "Overweight";
    } else {
      return "Obese";
    }
  };

  const getBMIRecommendation = (bmi) => {
    if (bmi < 18.5) {
      return "You may want to gain some weight.";
    } else if (bmi >= 18.5 && bmi < 24.9) {
      return "You are in a healthy weight range. Keep it up!";
    } else if (bmi >= 25 && bmi < 29.9) {
      return "You may want to lose some weight for health benefits.";
    } else {
      return "You may be at risk for health problems. Consider consulting a healthcare professional.";
    }
  };

  const getBMIColorClass = (bmi) => {
    if (bmi < 18.5) {
      return "text-blue-500"; // Adjust color based on your preference
    } else if (bmi >= 18.5 && bmi < 24.9) {
      return "text-green-500";
    } else if (bmi >= 25 && bmi < 29.9) {
      return "text-yellow-500";
    } else {
      return "text-red-500";
    }
  };
  return (
    <>
      <div className="grid mx-auto mt-8">
        <div className="grid grid-cols-2 space-x-4">
          <div className="grid-cols-2">
            <h1 className="text-4xl font-bold mb-4">خودتو اندازه کن</h1>
            <h1 className="text-md font-bold mb-4 w-3/4">
              مشخصاتت رو وارد کن تا محاسبه بشه و ما کمکت می کنیم به وزن ایده آلت
              برسی !
            </h1>
            <div className="w-1/2 ">
              <label
                htmlFor="height"
                className="block text-sm font-medium text-gray-700"
              >
                قد (سانتی متر):
              </label>
              <input
                type="number"
                id="height"
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
              />
            </div>
            <div className="w-1/2">
              <label
                htmlFor="weight"
                className="block text-sm font-medium text-gray-700"
              >
                وزن (کیلوگرم):
              </label>
              <input
                type="number"
                id="weight"
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
              />
              <div className="mt-4">
                <label
                  htmlFor="gender"
                  className="block text-sm font-medium text-gray-700"
                >
                  جنسیت:
                </label>

                <select
                  id="gender"
                  className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                >
                  <option value="male">مرد</option>
                  <option value="female">زن</option>
                </select>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div>
              <img
                src="./images/man.png"
                className="w-full mb-4"
                id="RadioForMan"
              />
              <input
                type="radio"
                id="RadioForMan"
                name="drone"
                onChange={(e) => setGender(e.target.value)}
                value="male"
              />
              <label for="male">من مرد هستم</label>
            </div>

            <div>
              <img
                src="./images/woman.png"
                className="w-full mb-4"
                id="RadioForWoman"
              />
              <input
                type="radio"
                id="RadioForWoman"
                name="drone"
                onChange={(e) => setGender(e.target.value)}
                value="female"
              />
              <label for="woman">من زن هستم</label>
            </div>
          </div>
        </div>
        <button
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md"
          onClick={calculateBMI}
        >
          محاسبه کن
        </button>
        {bmi !== null && (
          <div className="mt-4">
            {bmi !== null && (
              <div className="mt-4">
                <p className="text-lg font-semibold">Your BMI: {bmi}</p>
                <p className="text-gray-700 mt-2">
                  {getBMICategory(bmi)} - {getBMIRecommendation(bmi)}
                </p>
                <div className={`mt-4 ${getBMIColorClass(bmi)}`}>
                  <p className="text-lg font-semibold">
                    BMI Category: {getBMICategory(bmi)}
                  </p>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
}

export default App;
