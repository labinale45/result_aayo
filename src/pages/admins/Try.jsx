"use client"

import React, { useState } from 'react';
import supabase from '@/utils/client';
import Nav from '@/components/Nav';
import './Register.css';
import "@/styles/globals.css";

export default function Register() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [generatedOtp, setGeneratedOtp] = useState('');
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [isOtpVerified, setIsOtpVerified] = useState(false);

  const sendOtp = async () => {
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    setGeneratedOtp(otp);

    // Send OTP to email using your email sending service
    // For example, using a mock function
    await sendEmail(email, 'Your OTP Code', `Your OTP code is ${otp}`);
    
    setIsOtpSent(true);
    alert('OTP sent to your email.');
  };

  const verifyOtp = () => {
    if (otp === generatedOtp) {
      setIsOtpVerified(true);
      alert('OTP verified. You will receive your username and password via email.');
      registerUser();
    } else {
      alert('Invalid OTP. Please try again.');
    }
  };

  const registerUser = async () => {
    const username = generateUsername(fullName);
    const password = generatePassword();

    // Save the user details in the database
    const { data, error } = await supabase
      .from('login')
      .insert([{ username, password ,fullName, email}]);

    if (error) {
      alert('Error creating user');
      return;
    }

    // Send username and password to user's email
    await sendEmail(email, 'Your Account Details', `Your username is ${username} and your password is ${password}`);
  };

  const generateUsername = (fullName) => {
    return fullName.toLowerCase().replace(/\s/g, '') + Math.floor(1000 + Math.random() * 9000);
  };

  const generatePassword = () => {
    return Math.random().toString(36).slice(-8);
  };

  const sendEmail = async (to, subject, body) => {
    // Mock function to send an email
    console.log(`Sending email to ${to}: ${subject} - ${body}`);
  };

  return (
    <div className="col-md-12">
      <Nav />
      <div className="container col-md-12">
        <div className="register col-md-12">
          <h1 className="text-black text-3xl font-bold">Register</h1>
          {!isOtpSent && (
            <form onSubmit={(e) => { e.preventDefault(); sendOtp(); }}>
              <input
                className="txt"
                type="text"
                placeholder="Full Name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
              /><br/>
              <input
                className="txt"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              /><br/>
              <button className="self-end" type="submit">Send OTP</button>
            </form>
          )}
          {isOtpSent && !isOtpVerified && (
            <form onSubmit={(e) => { e.preventDefault(); verifyOtp(); }}>
              <input
                className="txt"
                type="text"
                placeholder="Enter OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                required
              /><br/>
              <button className="self-end" type="submit">Verify OTP</button>
            </form>
          )}
          {isOtpVerified && (
            <p>OTP verified. Check your email for account details.</p>
          )}
        </div>
      </div>
    </div>
  );
}
