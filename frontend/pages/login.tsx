// frontend/pages/login.tsx

import { useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

const LoginPage: React.FC = () => {
  const router = useRouter();

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("http://34.93.202.99:5000/login_password", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ login, password }),
      });

      const data = await response.json();

      if (response.ok && data.status === "success") {
        router.push("/dashboard");
      } else {
        setErrorMsg(data.message || "Login failed.");
      }
    } catch (err) {
      console.error("Login error:", err);
      setErrorMsg("Server error. Please try again.");
    }
  };

  return (
    <>
      <Head>
        <title>Login | FitTrack</title>
      </Head>
      <div className="flex min-h-screen items-center justify-center bg-gray-100">
        <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-center text-gray-800">Login to FitTrack</h2>
          <form className="space-y-4" onSubmit={handleLogin}>
            <input
              type="text"
              placeholder="Email, Username or Mobile"
              value={login}
              onChange={(e) => setLogin(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
            <button
              type="submit"
              className="w-full py-2 font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-700"
            >
              Login
            </button>
          </form>
          {errorMsg && <p className="text-sm text-red-600">{errorMsg}</p>}
          <div className="text-sm text-center text-gray-600">
            <a href="/signup" className="text-blue-500 hover:underline">
              Don't have an account? Sign up
            </a>
            <br />
            <a href="/forgot_password" className="text-blue-500 hover:underline">
              Forgot Password?
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;

