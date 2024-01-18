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
      return <p className="text-gray-900 dark:text-gray-200">"وزنت کمه"</p>;
    } else if (bmi >= 18.5 && bmi < 24.9) {
      return (
        <p className="text-gray-900 dark:text-gray-200">
          "وزنت نرماله نگران چیزی نباش"
        </p>
      );
    } else if (bmi >= 25 && bmi < 29.9) {
      return (
        <p className="text-gray-900 dark:text-gray-200">"وزنت زیاده عزیزم"</p>
      );
    } else {
      return (
        <p className="text-gray-900 dark:text-gray-200">"خیلی چاقی عزیزم"</p>
      );
    }
  };

  const getBMIRecommendation = (bmi) => {
    if (bmi < 18.5) {
      return (
        <p className="text-gray-900 dark:text-gray-200">
          "باید یکمی وزن اضافه کنی"
        </p>
      );
    } else if (bmi >= 18.5 && bmi < 24.9) {
      return (
        <p className="text-gray-900 dark:text-gray-200">
          تو محدوده وزنی سالم هستی؛ همینو ادامه بده
        </p>
      );
    } else if (bmi >= 25 && bmi < 29.9) {
      return (
        <p className="text-gray-900 dark:text-gray-200">
          واسه سلامتیت باید وزن کم کنی
        </p>
      );
    } else {
      return (
        <p className="text-gray-900 dark:text-gray-200">
          ممکنه که تو در معرض خطر مشکلات سلامتی باشی؛ مشورت با یه متخصص تغذیه
          میتونه بهت کمک کنه؛ با ما تماس بگیر 02144809654
        </p>
      );
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
    <div className="px-4 bg-gray-200 dark:bg-gray-800 p-4 rounded-lg  ">
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
                className="block text-sm font-medium text-gray-900 dark:text-gray-200"
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
            <div className="w-1/2 mt-4">
              <label
                htmlFor="weight"
                className="block text-sm font-medium text-gray-900 dark:text-gray-200"
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
                  className="block text-sm font-medium text-gray-900 dark:text-gray-200"
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
                <p className="text-lg font-semibold">
                  شاخص توده بدنی شما: {bmi}
                </p>
                <p className="text-gray-700 mt-2">
                  {/* {getBMICategory(bmi)} - {getBMIRecommendation(bmi)} */}
                  {getBMIRecommendation(bmi)}
                </p>
                <div className={`mt-4 ${getBMIColorClass(bmi)}`}>
                  <p className="text-lg font-semibold">
                    وضعیت: {getBMICategory(bmi)}
                  </p>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
