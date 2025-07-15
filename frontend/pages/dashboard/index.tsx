// frontend/pages/dashboard/index.tsx

import React from "react";
import Link from "next/link";
import Head from "next/head";

const DashboardHome: React.FC = () => {
  return (
    <>
      <Head>
        <title>Dashboard | FitTrack</title>
      </Head>
      <div className="min-h-screen bg-gray-100 py-10 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-blue-600 mb-6">
            Welcome to FitTrack Dashboard
          </h1>
          <p className="text-lg text-gray-700 mb-10">
            Navigate to different sections to monitor and update your fitness
            data.
          </p>

          <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
            <Link href="/dashboard/fat">
              <div className="bg-white hover:bg-blue-50 transition-all shadow rounded-2xl p-6 cursor-pointer border border-blue-100">
                <h2 className="text-xl font-semibold text-blue-700">Body Fat</h2>
                <p className="text-gray-600 mt-2">
                  Enter measurements to calculate body fat percentage.
                </p>
              </div>
            </Link>

            <Link href="/dashboard/calories">
              <div className="bg-white hover:bg-green-50 transition-all shadow rounded-2xl p-6 cursor-pointer border border-green-100">
                <h2 className="text-xl font-semibold text-green-700">Calories</h2>
                <p className="text-gray-600 mt-2">
                  Log steps and time to estimate calorie burn.
                </p>
              </div>
            </Link>

            <Link href="/dashboard/health">
              <div className="bg-white hover:bg-purple-50 transition-all shadow rounded-2xl p-6 cursor-pointer border border-purple-100">
                <h2 className="text-xl font-semibold text-purple-700">Health</h2>
                <p className="text-gray-600 mt-2">
                  Save your key health parameters and track progress.
                </p>
              </div>
            </Link>

            <Link href="/dashboard/charts">
              <div className="bg-white hover:bg-yellow-50 transition-all shadow rounded-2xl p-6 cursor-pointer border border-yellow-100">
                <h2 className="text-xl font-semibold text-yellow-700">Charts</h2>
                <p className="text-gray-600 mt-2">
                  View graphs of your fat percentage and calories burned over time.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardHome;

