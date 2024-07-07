import React, { useState } from 'react';
import { useRouter } from 'next/router';
import supabase from '@/utils/client';
import Nav from '@/components/Nav';
import './Login.css';
import "@/styles/globals.css";

export default function Login() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

    const signIn = async (event) => {
      event.preventDefault();

      const { data, error } = await supabase
        .from('login')
        .select('*')
        .eq('username', username)
        .eq('password', password);
  
      if (error || data.length === 0) {
        // Authentication failed
        alert("Could not authenticate user");
        router.push("/login?message=Could not authenticate user");
      } else {
        // Authentication succeeded
        alert("Welcome "+ username);
      }
    };
  
  
  return (
    <div className="col-md-12">
      <Nav />
      <div className="container col-md-12">   
        <div className="log col-md-12">
          <img src="/assets/Logo.webp" alt="Logo" />
          <h1 className="text-black text-3xl font-bold">L O G I N</h1>
          <form onSubmit={signIn}>
            <input
              className="txt"
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            /><br/>
            <input
              className="txt"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            /><br/>
            <button className="self-end" type="submit">LOGIN</button>
          </form>
        </div>
      </div>
    </div>
  );
}
