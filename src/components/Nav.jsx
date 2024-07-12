import "./Nav.css";
import Link from "next/link";

const nav = () => {
  return (
    <div className="col-md-12">
    <div className="Header">
      <nav className="nav navbar-righ">
        <Link className="navComp" href="#">HOME</Link>
        <Link className="navComp" href="#">NOTICE </Link>
        <Link className="navComp" href="/homes/abouts">ABOUT US</Link>
        <Link className="navComp" href="/homes/logins">LOGIN</Link>
      </nav>
    </div>  
  </div>
  );
};

export default nav;
