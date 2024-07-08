"use client"
import { useState } from "react";
import supabase from "@/utils/client";

export default function teacher(){

    const [fullName, setfullName] = useState('');
    const [email, setemail] = useState('');
    const [contact, setcontact] = useState('');
    const [address, setaddress] = useState('');
    const [date, setdate] = useState('');
    const [gender, setgender] = useState('');
    const [otp,setOtp] = useState('');
    const [genratedOtp,setGeneratedOtp]= useState('');
    const [isOtpSent, setIsOtpSent]= useState(false);
    const [isOtpVerified, setIsOtpVerified]= useState(false);
    
    const create = async (event) =>{
        event.preventDefault();
const { data, error } = await supabase
.from('login')
.insert([
  { fullName: 'fullname', email: 'email' , contact: 'contact', address:'address', data:'dob',gender: 'gender', role:'teacher'},
])
.select('*');
if (error || data==null){
    alert("Could not create teacher")
    return
  }else{
    alert(fullName + "Added as Teacher")
  }
};       
    return(
        <div className="">  
            <h1 className="text-blue-600 text-3xl font-bold">Add Teacher</h1>
            <form onSubmit={create}>
              <label>
              <h2>User</h2>
              </label>
               <input 
               className="" 
               type="text" 
               placeholder="Full Name" 
               value={fullName} 
               onChange={(e)=> setfullName(e.target.value)}
               required
               /><br/>
               
               <input 
               className="" 
               type="email" 
               placeholder="Email" 
               value={email} 
               onChange={(e)=> setemail(e.target.value)}
               required
               /><br/>
                <input 
               className="" 
               type="number" 
               placeholder="Contact" 
               value={contact} 
               onChange={(e)=> setcontact(e.target.value)}
               required
               /><br/>
                <input 
               className="" 
               type="text" 
               placeholder="Address" 
               value={address} 
               onChange={(e)=> setaddress(e.target.value)}
               required
               /><br/>
                <input 
               className="" 
               type="date" 
               placeholder="Date of Birth" 
               value={date} 
               onChange={(e)=> setdate(e.target.value)}
               required
               /><br/>
                <input 
               className="" 
               type="dropdown" 
               placeholder="Gender" 
               value={gender} 
               onChange={(e)=> setgender(e.target.value)}
               required
               /><br/>

               <button className=" bg-gray-800  text-white rounded-md p-1 " type="submit">CREATE</button>
            </form>
        </div>

    );
}