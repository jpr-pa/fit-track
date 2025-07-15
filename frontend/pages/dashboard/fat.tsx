// frontend/pages/dashboard/fat.tsx

import React, { useState } from "react";
import Head from "next/head";

const FatCalculator: React.FC = () => {
  const [form, setForm] = useState({
    waist: "",
    neck: "",
    hips: "",
    height: "",
  });
  const [fat, setFat] = useState<number | null>(null);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    try {
      const res = await fetch("http://localhost:5000/calculate/fat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (res.ok) {
        setFat(data.fat);
      } else {
        setError(data.error || "Failed to calculate fat.");
      }
    } catch (err) {
      console.error(err);
      setError("Server error. Please try again.");
    }
  };

  return (
    <>
      <Head>
        <title>Fat Calculator | FitTrack</title>
      </Head>
      <div className="min-h-screen bg-gray-100 py-10 px-4">
        <div className="max-w-xl mx-auto bg-white p-8 shadow rounded-2xl">
          <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">
            Body Fat Calculator
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col">
              <label htmlFor="waist" className="text-sm font-medium">
                Waist (cm)
              </label>
              <input
                type="number"
                id="waist"
                name="waist"
                value={form.waist}
                onChange={handleChange}
                required
                className="input"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="neck" className="text-sm font-medium">
                Neck (cm)
              </label>
              <input
                type="number"
                id="neck"
                name="neck"
                value={form.neck}
                onChange={handleChange}
                required
                className="input"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="hips" className="text-sm font-medium">
                Hips (cm) <span className="text-gray-500">(optional)</span>
              </label>
              <input
                type="number"
                id="hips"
                name="hips"
                value={form.hips}
                onChange={handleChange}
                className="input"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="height" className="text-sm font-medium">
                Height (cm)
              </label>
              <input
                type="number"
                id="height"
                name="height"
                value={form.height}
                onChange={handleChange}
                required
                className="input"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
            >
              Calculate
            </button>
          </form>

          {error && (
            <p className="text-red-600 mt-4 text-center font-medium">{error}</p>
          )}

          {fat !== null && (
            <div className="mt-6 text-center">
              <p className="text-lg font-semibold">
                Estimated Body Fat:{" "}
                <span className="text-blue-600">{fat}%</span>
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default FatCalculator;

