
import Nav from '@/components/Nav';
import './Login.css';
import "@/styles/globals.css";
import { RiLockPasswordLine } from "react-icons/ri";
import { FaRegCircleUser } from "react-icons/fa6";
import { Dashboard } from './Dashboard';
import Menu from '@/components/Menu';

export default function Login() {
  const router = useRouter;
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
        router.push("/admin/Teacher");
      } else {
        // Authentication succeeded
       
        alert("Welcome "+ username);
      }
    };
  
  
  return (
    <div className="bg-gradient-to-r from-violet-100 to-indigo-400 min-h-screen flex items-center justify-center" >
     
    <div className="bg-[#253553] flex rounded-3xl shadow-lg max-w-4xl p-6">
  <div className="sm:w-1/2 px=18">
        <br/><br/>
        <h1 className="text-white text-3xl font-bold flex items-center justify-center">L O G I N</h1>
        <p className=" text-white text-l mt-4 flex items-center justify-center">If you're registered member, log in here.</p>
        <form onSubmit={signIn} className="flex-col gap-2">
          <input 
            className="txt p-3 mt-8 w-72 rounded-xl border " 
            type="text"
            placeholder="     Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          /> <FaRegCircleUser className="absolute top-[42%] left-[44%] size-7"/><br/>  
          <input 
            className="txt p-3 mt-8 w-72 rounded-xl border " 
            type="password"
            placeholder="     Password"
            id="Show"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          /> <RiLockPasswordLine className="absolute top-[53%] left-[44%]  size-7"/><br/>
          <div className="text-white ml-4"><input type="checkbox" onClick="myfunction()" className="size-5 mt-5 mr-4 text-white" />Show password</div>
          <button className="text-white font-bold bg-gradient-to-r from-indigo-400 to-indigo-600 w-72 p-3 mt-10 rounded-xl hover:scale-105 duration-300 " type="submit">L O G I N</button>
          </form>
          </div>
       
        
        <div className="sm:block hidden w-1/2">
            
            <img className="rounded-2xl" src="/assets/popup.png" alt=""/>
          </div> 
        
      </div>
      </div>
  
 
);
}
