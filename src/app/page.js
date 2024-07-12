"use client"
import "tailwindcss/tailwind.css";
import "@/app/styles/globals.css";
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const Main = () => {
  const router = useRouter();

  useEffect(() => {
    // Redirect to /homes when the component mounts
    router.push('/homes');
  }, [router]);

  return (
    <div>
      <h1>Redirecting...</h1>
    </div>
  );
};

export default Main;
