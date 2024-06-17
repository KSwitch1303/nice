import { NavLink, Link } from "react-router-dom";

import { useEffect, useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import './Sidebar.css';
const Sidebar = () => {
  const { sideBar, setSideBar,setLoggedIn } = useContext(UserContext);
  const changeSidebar = () => {
    if (sideBar === true) {
      setSideBar(false);
    } else {
      setSideBar(true);
    }
  }

  useEffect(() => {
    if (sideBar === true) {
      document.body.className = "hidescrollbar";
    } else {
      document.body.className = "standard";
    }
  },[sideBar])
  return ( 
    <div>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"></link>
      <input   type="checkbox" id="sidebar_check" style={{
        position: 'fixed',
        top: '0',
      }} />
      <label for="sidebar_check">
          <i class="fas fa-bars" id="btn"></i>
          <i class="fas fa-times" id="cancel"></i>
      </label>
      <div class="sidebar">
          <header>
              My Profile
          </header>
          <ul>
              <li><NavLink className={({ isActive }) => (isActive ? 'active' : '')} to="/dashboard"> <i class="fa-solid fa-grip"></i>Dashboard</NavLink></li>
              {/* <li><Link to="/profile">   <i class="fas fa-user"></i>Profile</Link></li> */}
              <li><NavLink className={({ isActive }) => (isActive ? 'active' : '')} to="/statistics">   <i class="fas fa-chart-bar"></i>Statistics</NavLink></li>
              <li><NavLink className={({ isActive }) => (isActive ? 'active' : '')} to="/invest">    <i class="fa-solid fa-landmark"></i>Invest</NavLink></li>
              {/* <li> <NavLink className={({ isActive }) => (isActive ? 'active' : '')} to ='/loan'><i class="fas fa-hand-holding-usd"></i>Loan</NavLink></li> */}
              <li><NavLink className={({ isActive }) => (isActive ? 'active' : '')} to="/payment">    <i class="fa-solid fa-money-bill"></i>Recharge</NavLink></li>
              <li><NavLink className={({ isActive }) => (isActive ? 'active' : '')} to="/withdraw">   <i class="fa-solid fa-paper-plane"></i>Withdraw</NavLink>    </li>
              <li><NavLink className={({ isActive }) => (isActive ? 'active' : '')} to="/settings">  <i class="fas fa-cog"></i>settings</NavLink></li>
              <li><Link onClick={() => {
                setSideBar(false);
                setLoggedIn(false)
              }} className="logout" >     <i class="fas fa-sign-out-alt"></i>Logout</Link></li>
          </ul>
      </div>
    </div>
   );
}

export default Sidebar;