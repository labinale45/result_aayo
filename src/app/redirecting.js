"use client";
import "tailwindcss/tailwind.css";
import "@/app/styles/globals.css";
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Redirecting() {

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
  } 