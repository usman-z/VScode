import "./styles/Navbar.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

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
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>Usman Zia</Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}/>
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>GitHub</Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>LinkedIn</Link>
            </li>
          </ul>
        {button && <Button buttonStyle = "btn--outline">PORTFOLIO</Button>}
        </div>
      </nav>
    </>
  );
}