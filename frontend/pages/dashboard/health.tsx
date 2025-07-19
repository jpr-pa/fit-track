// frontend/pages/dashboard/health.tsx

import React, { useEffect, useState } from "react";
import Head from "next/head";

interface HealthStatus {
  status: string;
  updatedAt: string;
}

const HealthDashboard: React.FC = () => {
  const [health, setHealth] = useState<HealthStatus | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchHealth = async () => {
      try {
        const res = await fetch("http://34.93.202.99:5000/health", {
          credentials: "include",
        });
        const data = await res.json();
        if (res.ok) {
          setHealth(data);
        } else {
          setError(data.error || "Failed to fetch health data.");
        }
      } catch (err) {
        console.error(err);
        setError("Server error.");
      } finally {
        setLoading(false);
      }
    };

    fetchHealth();
  }, []);

  return (
    <>
      <Head>
        <title>Health Status | FitTrack</title>
      </Head>
      <div className="min-h-screen bg-gray-100 py-10 px-4">
        <div className="max-w-2xl mx-auto bg-white p-8 shadow rounded-2xl">
          <h2 className="text-3xl font-bold text-center text-green-600 mb-6">
            System Health Status
          </h2>

          {loading && <p className="text-center text-gray-500">Loading...</p>}

          {error && (
            <p className="text-center text-red-600 font-medium">{error}</p>
          )}

          {health && (
            <div className="space-y-4 text-center">
              <p className="text-xl font-semibold">
                Status:{" "}
                <span
                  className={`${
                    health.status === "ok"
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {health.status.toUpperCase()}
                </span>
              </p>
              <p className="text-sm text-gray-600">
                Last Checked: {new Date(health.updatedAt).toLocaleString()}
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default HealthDashboard;

