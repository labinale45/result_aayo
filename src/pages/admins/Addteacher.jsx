import { RiLockPasswordLine } from "react-icons/ri";
import { FaRegCircleUser } from "react-icons/fa6";
export default function Addteacher()
{
    return(
<div className="bg-gradient-to-r from-violet-100 to-indigo-400 min-h-screen flex items-center justify-center" >
     
     <div className="bg-[#253553] flex rounded-3xl shadow-lg max-w-4xl p-6">
   <div className="sm:w-1/2 px=18">
         <br/><br/>
         <h1 className="text-white text-3xl font-bold flex items-center justify-center">A d d      T e a c h e r</h1>
        
         <form className="flex-col gap-2">
           <input 
             className="txt p-2 mt-6 w-80 rounded-xl border " 
             type="text"
             placeholder="     Full Name"
             
           />  
           <input 
             className="txt p-2 mt-6 w-80 rounded-xl border " 
             type="text"
             placeholder="    email "
             />
             <input 
             className="txt p-2 mt-6 w-80 rounded-xl border " 
             type="text"
             placeholder="    Contact "/>
             <input 
             className="txt p-2 mt-6  w-80 rounded-xl border " 
             type="text"
             placeholder="    Address "
             />
             <input 
             className="txt p-2 mt-6  w-80 rounded-xl border " 
             type="Date"
             placeholder="    Date of birth "
             />
             
             <br/><select className="txt p-2 mt-6  w-80 rounded-xl border " 
              placeholder="    Gender ">
             
             <option value="Male">Male</option>
             <option value="Female">Female</option>
             <option value="Others">Others</option>
              </select>
       <br/>
        
           <button className="text-white font-bold bg-gradient-to-r from-indigo-400 to-indigo-600 w-72 p-3 mt-10 rounded-xl hover:scale-105 duration-300">A D D</button>
           </form>
           </div>
        
         
         <div className="sm:block hidden w-1/2">
             
             <img className="rounded-3xl" src="/assets/popup.png" alt=""/>
           </div> 
         
       </div>
       </div>
    );
}