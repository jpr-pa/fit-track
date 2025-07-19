// frontend/pages/signup.tsx

import { useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

const SignupPage: React.FC = () => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");
    setSuccessMsg("");

    if (password !== confirmPassword) {
      setErrorMsg("Passwords do not match.");
      return;
    }

    try {
      const res = await fetch("http://34.93.202.99:5000/signup_request_otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, mobile, username, password }),
      });

      const data = await res.json();
      if (res.ok && data.status === "success") {
        setSuccessMsg("OTP sent to your email. Redirecting...");
        setTimeout(() => {
          router.push("/verify_otp");
        }, 2000);
      } else {
        setErrorMsg(data.message || "Signup failed.");
      }
    } catch (err) {
      console.error("Signup error:", err);
      setErrorMsg("Server error. Please try again.");
    }
  };

  return (
    <>
      <Head>
        <title>Sign Up | FitTrack</title>
      </Head>
      <div className="flex min-h-screen items-center justify-center bg-gray-100">
        <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-center text-gray-800">Create a FitTrack Account</h2>
          <form className="space-y-4" onSubmit={handleSignup}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
            <input
              type="text"
              placeholder="Mobile"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
OBOBOB              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
OBOBOB              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
OBOBOB            />
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
            <button
              type="submit"
              className="w-full py-2 font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-700"
            >
              Send OTP
            </button>
          </form>

          {errorMsg && <p className="text-sm text-red-600">{errorMsg}</p>}
          {successMsg && <p className="text-sm text-green-600">{successMsg}</p>}

          <div className="text-sm text-center text-gray-600">
            <a href="/login" className="text-blue-500 hover:underline">
              Already have an account? Log in
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignupPage;

