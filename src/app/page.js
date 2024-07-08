import About from "@/pages/About";
import Home from "@/pages/Home";
import Menu from "@/components/Menu";
import Nav from "@/components/Nav";
import Teacher from "@/pages/admins/Teacher";
import { Addstudent, Studenttable } from "@/pages/admins/Studenttable";

import Footer from "@/components/Footer";
import "tailwindcss/tailwind.css";
import "@/styles/globals.css";
import { Examtable } from "@/pages/admins/Examtable";
import { Teachertable } from "@/pages/admins/Teachertable";

const Main = () => {
  return (
    <div>
      <Teachertable />
    </div>
  );
};

export default Main;
