import Navbar from "./components/Navbar";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";

import { useEffect, useState } from "react";
import Payment from "./components/Payment";
import Statistics from "./components/Statistics";
import Settings from "./components/Settings";
import Navbar2 from "./components/Navbar2";
import TradingPlans from "./components/TradingPlans";
import Dashfooter from "./components/Dashfooter";
import Blankspace from "./components/Blankspace";
import Loan from "./components/Loan";

const { UserContext } = require("./contexts/UserContext");
function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const [userName, setUserName] = useState("");
  const [userId, setUserId] = useState("")
  const [paymentAmount, setPaymentAmount] = useState(0)
  const [totalTraded, setTotalTraded] = useState(0)
  const [totalWithdrawn, setTotalWithdrawn] = useState(0)
  const [earnedTotal, setEarnedTotal] = useState(0)
  const [loggedIn, setLoggedIn] = useState(false)
  const [sideBar, setSideBar] = useState(false)
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [nationality, setNationality] = useState("")
  const [email, setEmail] = useState("")
  const [regDate, setRegDate] = useState("")
  const [referralCode, setReferralCode] = useState("")
  const [referredBy, setReferredBy] = useState("")
  const [referrals, setReferrals] = useState(0)
  useEffect(() => {
    if (loggedIn === false) {
      setUserName("");
      setUserId("");
      setPaymentAmount(0);
      setTotalTraded(0);
      setTotalWithdrawn(0);
      setEarnedTotal(0);
      setFirstName("");
      setLastName("");
      setNationality("");
      setEmail("");
      setRegDate("");
      setReferralCode("");
      setReferredBy("");
      setReferrals(0);
      navigate("/");
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loggedIn]);
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
    <UserContext.Provider value={{ userName, setUserName, userId, setUserId, paymentAmount, setPaymentAmount, totalTraded, setTotalTraded, totalWithdrawn, setTotalWithdrawn, earnedTotal, setEarnedTotal, loggedIn, setLoggedIn, sideBar, setSideBar, firstName, setFirstName, lastName, setLastName, nationality, setNationality, email, setEmail, regDate, setRegDate, referralCode, setReferralCode, referredBy, setReferredBy, referrals, setReferrals }}>
      <div className="App">
        {/* {location.pathname === "/"  && <Navbar />} */}
        {location.pathname === "/"  ? <Navbar /> : null }
        {location.pathname !== "/" && location.pathname !== "/login" && location.pathname !== "/register" && <Navbar2 />}
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path ="/dashboard" element={<Dashboard />} />
          <Route path ="/payment" element={<Payment />} />
          <Route path = "/statistics" element={<Statistics />} />
          <Route path ="/settings" element={<Settings />} />
          <Route path="/invest" element={<TradingPlans />} />
          <Route path="/loan" element={<Loan />} />
        </Routes>
        {!display && location.pathname !== "/" && location.pathname !== "/login" && location.pathname !== "/register" && <Blankspace />}
        {/* {location.pathname !== "/" && location.pathname !== "/login" && location.pathname !== "/register" && <Blankspace />} */}
        {!display && location.pathname !== "/" && location.pathname !== "/login" && location.pathname !== "/register" && <Dashfooter />}
        {/* {location.pathname !== "/" && location.pathname !== "/login" && location.pathname !== "/register" && <Dashfooter />} */}
      </div>
    </UserContext.Provider>
  );
}

export default App;