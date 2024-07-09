import About from "@/app/About";
import Home from "@/app/Home";
import Menu from "@/components/Menu";
import Nav from "@/components/Nav";
import Teacher from "@/components/admins/Teacher";
import Try from "@/components/admins/Try";
import Footer from "@/components/Footer";
import "tailwindcss/tailwind.css";
import "@/styles/globals.css";
import { Teachertable } from "@/components/admins/Teachertable";
import Login from "@/app/Login";
import Addteacher from "@/components/admins/Addteacher";

const Main = () => {
  return (
    <div>
      <Login/>
    </div>
  );
};

export default Main;
