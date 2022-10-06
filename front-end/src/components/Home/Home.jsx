import React from "react";
import logo from "../../Images/logo.png";
import {Link} from "react-router-dom";
import "./Home.css";

export default function Home() {
  return (
    <div className="homecontainer">
      <div className="navcontainer">
        <img src={logo} className="logo"></img>
        <div>
          <div>
            <Link to="/login">login</Link>
          </div>
          <div>
            <Link to="/register">register</Link>
          </div>
        </div>
      </div>
      <div className="home">Home</div>
    </div>
  );
}
