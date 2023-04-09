import React, { useState } from "react";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";


function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };
  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
      <Link to="/"><img src={Logo} /></Link>

      </div>
      <div className="rightSide">
        <Link to="/about"> About </Link>
        <Link to="/Map"> Find Us </Link>
        <Link to="/leaderboard"> Leaderboard </Link>
        <Link to="/ImageSlider"> Promos </Link>
        <Link to="/contact"> Contact </Link>

      </div>
    </div>
  );
}

export default Navbar;