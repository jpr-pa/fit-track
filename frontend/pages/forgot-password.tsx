// frontend/pages/forgot_password.jsx
import React from 'react';

export default function ForgotPassword() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center mb-6">Forgot Password</h2>
        <form action="http://34.93.202.99:5000/forgot_password" method="POST" className="flex flex-col gap-4">
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            required
            className="border border-gray-300 p-2 rounded"
          />
          <button type="submit" className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
            Send OTP
          </button>
        </form>
      </div>
    </div>
  );
}
