"use client";
import { RiLockPasswordLine } from "react-icons/ri";
import { FaRegCircleUser } from "react-icons/fa6";
import supabase from '@/utils/client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import '@/app/styles/globals.css'

export default function Loginpage() {
   // Correctly call useRouter as a function
  const router = useRouter();
  const [Username, setUsername] = useState('');
  const [Password, setPassword] = useState('');
  const signIn = async (event) => {
    event.preventDefault();

    const { data, error } = await supabase
      .from('login')
      .select('*')
      .eq('username', Username)
      .eq('password', Password);

    if (error || data.length === 0) {
      // Authentication failed
      alert("Could not authenticate user");
    } else {
      // Authentication succeeded
      router.push('/admins'); // Redirect to another page
      setUsername('');
      setPassword('');
      
    }
  };

  return (
    <div className="bg-gradient-to-r from-violet-100 to-indigo-400 min-h-screen flex items-center justify-center">
      <div className="bg-[#253553] flex rounded-3xl shadow-lg max-w-4xl p-6">
        <div className="sm:w-1/2 px=18">
          <br /><br />
          <h1 className="text-white text-3xl font-bold flex items-center justify-center">L O G I N</h1>
          <p className="text-white text-l mt-4 flex items-center justify-center">If you're registered member, log in here.</p>
          <form onSubmit={signIn} className="flex-col gap-2">
            <input 
              className="txt p-3 mt-8 w-72 rounded-xl border" 
              type="text"
              placeholder="Username"
              value={Username}
              onChange={(e) => setUsername(e.target.value)}
              required
            /> 
            <br />  
            <input 
              className="txt p-3 mt-8 w-72 rounded-xl border" 
              type="password"
              placeholder="Password"
              id="Show"
              value={Password}
              onChange={(e) => setPassword(e.target.value)}
              required
            /> 
        
            <br />
            <button className="text-white font-bold bg-gradient-to-r from-indigo-400 to-indigo-600 w-72 p-3 mt-10 rounded-xl hover:scale-105 duration-300" type="submit">
              L O G I N
            </button>
          </form>
        </div>
        <div className="sm:block hidden w-1/2">
          <img className="rounded-2xl" src="/assets/popup.png" alt="" />
        </div>
      </div>
    </div>
  );
}
