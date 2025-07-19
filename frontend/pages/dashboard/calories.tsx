// frontend/pages/dashboard/calories.tsx

import React, { useEffect, useState } from "react";
import Head from "next/head";

interface CalorieData {
  day: string;
  calories: number;
  speed: number;
}

const CaloriesPage: React.FC = () => {
  const [caloriesData, setCaloriesData] = useState<CalorieData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCalories = async () => {
      try {
        const res = await fetch("http://34.93.202.99:5000/api/calories", {
          credentials: "include",
        });
        const data = await res.json();
        if (res.ok) {
          setCaloriesData(data);
        } else {
          console.error("Failed to fetch calorie data");
        }
      } catch (err) {
        console.error("Error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchCalories();
  }, []);

  return (
    <>
      <Head>
        <title>Calorie Dashboard | FitTrack</title>
      </Head>
      <div className="min-h-screen bg-gray-100 py-8 px-4">
        <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-6">
          <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">Calorie Logs</h1>
          {loading ? (
            <p className="text-center text-gray-500">Loading...</p>
          ) : caloriesData.length > 0 ? (
            <table className="min-w-full table-auto">
              <thead>
                <tr className="bg-blue-100 text-blue-700">
                  <th className="px-4 py-2 text-left">Date</th>
                  <th className="px-4 py-2 text-left">Calories</th>
                  <th className="px-4 py-2 text-left">Speed (steps/min)</th>
                </tr>
              </thead>
              <tbody>
                {caloriesData.map((entry, index) => (
                  <tr key={index} className="border-b hover:bg-gray-50">
                    <td className="px-4 py-2">{entry.day}</td>
                    <td className="px-4 py-2">{entry.calories}</td>
                    <td className="px-4 py-2">{entry.speed}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p className="text-center text-gray-500">No calorie data available.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default CaloriesPage;

