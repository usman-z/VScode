import "./styles/Navbar.css";
import React from 'react';
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Resume from '../assets/resume.pdf'

import Button from "./Button";

export default function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  function handleClick () {
    setClick(!click);
  }

  const closeMobileMenu = () => {
    setClick(false);
  }

  function showButton () {
    if(window.innerWidth <= 960){
      setButton(false);
    }
    else{
      setButton(true);
    }
  }



  useEffect( () => {
    showButton()
  },[])

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>USMAN ZIA</Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}/>
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <a href={Resume} className="nav-links" download="Usman Zia.pdf">MyResume</a>
            </li>
            <li className="nav-item">
              <a target="blank" className="nav-links" href="https://github.com/usman-z">MyGithub</a>
            </li>
            <li className="nav-item">
              <a target="blank" className="nav-links" href="https://www.linkedin.com/in/u-zia">MyLinkedIn</a>
            </li>
          </ul>
        {button && <Button buttonStyle = "btn--outline">LOG IN</Button>}
        </div>
      </nav>
    </>
  );
}