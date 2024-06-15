import './Dashfooter.css';
import { NavLink, Link } from "react-router-dom";
import { useEffect, useContext } from "react";
import { UserContext } from "../contexts/UserContext";
const Dashfooter = () => {
  const { sideBar, setSideBar,setLoggedIn } = useContext(UserContext);
  return ( 
    <footer className="dashfooter">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"></link>
      <NavLink className={({ isActive }) => (isActive ? 'active' : '')} to="/dashboard"><i class="fa-solid fa-grip"></i></NavLink>
      {/* <NavLink className={({ isActive }) => (isActive ? 'active' : '')} to="/statistics"><i class="fas fa-chart-bar"></i></NavLink> */}
      <NavLink className={({ isActive }) => (isActive ? 'active' : '')} to="/invest">    <i class="fa-solid fa-landmark"></i></NavLink>
      {/* <NavLink className={({ isActive }) => (isActive ? 'active' : '')} to="/payment">    <i class="fa-solid fa-money-bill"></i></NavLink> */}
      <NavLink className={({ isActive }) => (isActive ? 'active' : '')} to="/withdraw"><i class="fa-solid fa-paper-plane"></i></NavLink>
      <NavLink className={({ isActive }) => (isActive ? 'active' : '')} to="/settings">  <i class="fas fa-cog"></i></NavLink>
      <Link onClick={() => {
                setSideBar(false);
                setLoggedIn(false)
              }} className={({ isActive }) => (isActive ? 'active' : '')} ><i class="fas fa-sign-out-alt"></i></Link>
    </footer>
   );
}
 
export default Dashfooter;