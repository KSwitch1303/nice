import { Link, useLocation } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { useEffect, useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const [width, setWidth] = useState(window.innerWidth);
  const [display, setDisplay] = useState(true);

  // Close the navbar when a link is clicked
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  // Toggle the navbar on mobile
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  // Close the navbar when the location changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
    // alert(window.innerWidth)
    if(window.innerWidth < 800){
      setDisplay(false);
    }
    else{
      setDisplay(true);
    }
}
useEffect(() => {
  window.addEventListener('resize', handleWindowSizeChange);
  return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
  }
}, []);

useEffect(() => {
handleWindowSizeChange();
}, []);
  return (
    <nav className={`navbar ${isOpen ? "open" : ""}`}>
      <div className="nav_toggle" onClick={toggleNavbar}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      {!display ? (
        <img src="logo.png" alt="Logo" height={"40px"}></img>
      ) : null}

      {/* <div className="navdrop"> */}
      <ul className={`nav ${isOpen ? "open" : ""}`}>
        {!isOpen ? <img src="logo.png" alt="Logo" height={"60px"}></img> : null}
      
        <li onClick={handleLinkClick}>
          <ScrollLink to="home" spy={true} smooth={true} offset={-150} duration={500}>Home</ScrollLink>
        </li>
        <li onClick={handleLinkClick}>
          <ScrollLink to="whychoose" spy={true} smooth={true} offset={-150} duration={500}>Why Us?</ScrollLink>
        </li>
        <li onClick={handleLinkClick}>
          <ScrollLink to="testimonies" spy={true} smooth={true} offset={-150} duration={500}>Testimonies</ScrollLink>
        </li>
        <li onClick={handleLinkClick}>
          <ScrollLink to="tradingplan" spy={true} smooth={true} offset={-150} duration={500}>Investment Plans</ScrollLink>
        </li>
      </ul>
      
      
      <div className="nav_right">
        {location.pathname !== "/register" && <Link to="/register" onClick={handleLinkClick}>Register</Link>}
        {location.pathname !== "/login" && <Link to="/login" onClick={handleLinkClick}>Login</Link>}
      </div>
      {/* </div> */}
    </nav>
  );
}

export default Navbar;
