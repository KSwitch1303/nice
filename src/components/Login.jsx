import { useContext, useEffect, useState } from 'react';
import './Login.css';
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import axios from 'axios';

const apiUrl = process.env.REACT_APP_API_URL;
const Login = () => {
  useEffect(() => {
    document.body.className = "login";
  },[])

  const navigate = useNavigate();
  const [isPending, setIsPending] = useState(false);  
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { setUserName, setUserId, setPaymentAmount, setTotalTraded, setTotalWithdrawn, setEarnedTotal, setLoggedIn, setFirstName, setLastName, setNationality, setEmail, setRegDate, setReferralCode, setReferredBy, setReferrals } = useContext(UserContext);
  const handleSubmit = (event) => {
    event.preventDefault();
    setIsPending(true);
    sendRequest();
  }
  const sendRequest = async () => {
    try {
      const res = await axios
        .post(`${apiUrl}/login`, {
          username,
          password
        })
        .catch((err) => console.log(err));
      if (res.status === 200) {
        await getUserData();
        setIsPending(false);
        setLoggedIn(true);
        navigate('/dashboard')
      } else {
        alert("Login failed. Please try again")
        setIsPending(false);
      }
    } catch (error) {
      alert('Trouble with your network')
      setIsPending(false)
    }
    
  }

  const getUserData = async () => {
    const res = await axios.post(`${apiUrl}/getuserdetails`, { username })
    .catch((err) => console.log(err));
    if (res.status === 200) {
      console.log(res.data);
      setUserName(res.data.username);
      setUserId(res.data._id);
      setPaymentAmount(res.data.paymentAmount);
      setTotalTraded(res.data.totalTraded);
      setTotalWithdrawn(res.data.totalWithdrawn);
      setEarnedTotal(res.data.earnedTotal);
      setFirstName(res.data.first_name);
      setLastName(res.data.last_name);
      setNationality(res.data.nationality);
      setEmail(res.data.email);
      setRegDate(res.data.createdAt);
      setReferralCode(res.data.referralCode);
      setReferredBy(res.data.referredBy);
      setReferrals(res.data.referrals);
    }
  }
  
  return ( 
    <section className="login_container">
      <div className="form-login">
      <a className="logHeader" href='/'>
        <img src="fullLogo.png" alt="logo" />
        {/* <h2>Frontier Capital Investment</h2> */}
        </a>
        <div className="form-content">
          <header className="login_header">Login</header>
          <form className='login_form' onSubmit={handleSubmit}>
            <div className="input">
              <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required disabled={isPending} />
            </div>
            <div className="input">
              <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required disabled={isPending} />
            </div>
            <div className="input-link">
            </div>
            <div className="input-btn">
              <button>{isPending ? "Logging in..." : "Login"}</button>
            </div>
            <div className="input-link">
              <span>Don't have an account?</span> <Link to="/register">Sign Up</Link>
            </div>
          </form>
        </div>
      </div>
    </section>
   );
}
 
export default Login;