"use client"
import { useState } from "react";
import supabase from "@/utils/client";
import { RiLockPasswordLine } from "react-icons/ri";
import { FaRegCircleUser } from "react-icons/fa6";

export default function AddTeacher() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [dob, setDob] = useState('');
  const [contact, setContact] = useState('');
  const [gender, setGender] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data, error } = await supabase
      .from('teachers')
      .insert([
        {
          Fullname: fullName,
          Email: email,
          Address: address,
          DOB: dob,
          Contact: contact,
          Gender: gender
        }
      ]);

    if (error) {
      console.error('Error adding teacher:', error.message);
    } else {
      console.log('Teacher added:', data);
      // Reset form data or show success message
      setFullName('');
      setEmail('');
      setAddress('');
      setDob('');
      setContact('');
      setGender('');
    }
  };

  return (
    <div className="bg-gradient-to-r from-violet-100 to-indigo-400 min-h-screen flex items-center justify-center">
      <div className="bg-[#253553] flex rounded-3xl shadow-lg max-w-4xl p-6">
        <div className="sm:w-1/2 px=18">
          <br/><br/>
          <h1 className="text-white text-3xl font-bold flex items-center justify-center">Add Teacher</h1>
        
          <form onSubmit={handleSubmit} className="flex-col gap-2">
            <input 
              className="txt p-2 mt-6 w-80 rounded-xl border " 
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Full Name"
            />  
            <input 
              className="txt p-2 mt-6 w-80 rounded-xl border " 
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />
            <input 
              className="txt p-2 mt-6 w-80 rounded-xl border " 
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              type="text"
              placeholder="Contact"
            />
            <input 
              className="txt p-2 mt-6 w-80 rounded-xl border "
              value={address} 
              onChange={(e) => setAddress(e.target.value)}
              type="text"
              placeholder="Address"
            />
            <input 
              className="txt p-2 mt-6 w-80 rounded-xl border "
              value={dob} 
              onChange={(e) => setDob(e.target.value)}
              type="date"
              placeholder="Date of Birth"
            />
             
            <select 
              className="txt p-2 mt-6 w-80 rounded-xl border " 
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <option value="">Choose..</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Others">Others</option>
            </select>
            
            <button className="text-white font-bold bg-gradient-to-r from-indigo-400 to-indigo-600 w-72 p-3 mt-10 rounded-xl hover:scale-105 duration-300" type="submit">ADD</button>
          </form>
        </div>

        <div className="sm:block hidden w-1/2">
          <img className="rounded-3xl" src="/assets/popup.png" alt=""/>
        </div> 
      </div>
    </div>
  );
}
