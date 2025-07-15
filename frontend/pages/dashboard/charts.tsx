// frontend/pages/dashboard/charts.tsx

import React, { useEffect, useState } from "react";
import Head from "next/head";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  Legend,
} from "recharts";

interface ChartData {
  fat: {
    labels: string[];
    values: number[];
  };
  calories: {
    labels: string[];
    values: number[];
  };
}

const ChartsPage: React.FC = () => {
  const [data, setData] = useState<ChartData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchChartData = async () => {
      try {
        const res = await fetch("http://localhost:5000/dashboard/summary", {
          credentials: "include",
        });
        const result = await res.json();
        if (res.ok) {
          setData(result);
        } else {
          console.error("Failed to load chart data");
        }
      } catch (err) {
        console.error("Error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchChartData();
  }, []);

  const prepareChartData = () => {
    if (!data) return [];
    return data.fat.labels.map((label, index) => ({
      date: label,
      fat: data.fat.values[index],
      calories: data.calories.values[index] || 0,
    }));
  };

  const chartData = prepareChartData();

  return (
    <>
      <Head>
        <title>Charts | FitTrack</title>
      </Head>
      <div className="min-h-screen bg-gray-100 py-8 px-4">
        <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-2xl p-6">
          <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">Progress Charts</h1>
          {loading ? (
            <p className="text-center text-gray-500">Loading...</p>
          ) : (
            <ResponsiveContainer width="100%" height={400}>
              <LineChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="fat" stroke="#f97316" name="Fat (%)" />
                <Line type="monotone" dataKey="calories" stroke="#3b82f6" name="Calories" />
              </LineChart>
            </ResponsiveContainer>
          )}
        </div>
      </div>
    </>
  );
};

export default ChartsPage;

