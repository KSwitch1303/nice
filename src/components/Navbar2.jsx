import Sidebar from "./Sidebar";
import './Navbar2.css';
import { useState, useEffect } from 'react';
const Navbar2 = () => {
  const [display, setDisplay] = useState(true);
  function handleWindowSizeChange() {
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
    <div className="navbar2">
      {display ? (
        <Sidebar />
      ) : null}
      
      <img className="nav_logo" src="logo.png" alt="logo"  />
      {/* <img className="nav_logo" src="logo.png" alt="logo" /> */}
    </div>
   );
}
 
export default Navbar2;