// frontend/pages/index.tsx

import { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

const Home: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    // 🔐 Placeholder: Replace with real auth check (e.g., from cookies or context)
    const isLoggedIn = false;

    if (isLoggedIn) {
      router.push("/dashboard");
    } else {
      router.push("/login");
    }
  }, [router]);

  return (
    <>
      <Head>
        <title>FitTrack</title>
      </Head>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <p className="text-gray-700 text-lg">Redirecting...</p>
      </div>
    </>
  );
};

export default Home;

