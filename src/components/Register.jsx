import './Register.css';
import referralCodeGenerator from 'referral-code-generator'
import { useEffect, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

const apiUrl = process.env.REACT_APP_API_URL;
const Register = () => {
  useEffect(() => {
    document.body.className = "register";
  },[])
  const navigate = useNavigate();
  let myReferralCode 
  const [isPending, setIsPending] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [nationality, setNationality] = useState("NG");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [referralCode, setReferralCode] = useState("");
  let referredBy
  const handleSubmit = (event) => {
    event.preventDefault();
    setIsPending(true);
    checkPassword()
  }
  const checkPassword = () => {
    if (password.length < 8) {
      alert("Password must be at least 8 characters long. Please try again")
      setIsPending(false);
      return false;
    }
    // username must start with lower case
    if (!username.match(/^[a-z]/)) {
      alert("Username must start with a lowercase letter. Please try again")
      setIsPending(false);
      return false;
    }
    //username must be at least 5 characters long
    if (username.length < 5) {
      alert("Username must be at least 5 characters long. Please try again")
      setIsPending(false);
      return false;
    }
    // check if password matches confirm password
    if (password !== confirmPass) {
      alert("Password doesn't match. Please try again")
      setIsPending(false);
      return false;
    } else {
      myReferralCode = referralCodeGenerator.custom('uppercase', 4, 6, username)
      // alert(myReferralCode)
      checkReferralCode()      
    }
  }
  const checkReferralCode = async () => {
    const res = await axios
      .post(`${apiUrl}/checkReferralCode`, {
        referralCode
      })
      .catch((err) => console.log(err));
    if (res.status === 200) {
      referredBy = res.data._id
      sendRequest();
    } else {
      alert(res.data)
      setIsPending(false);
    }
  }
  const rewardReferrer = async () => {
    const res = await axios
      .post(`${apiUrl}/rewardreferrer`, {
        referredBy
      })
      .catch((err) => console.log(err));
    if (res.status !== 400) {
      setIsPending(false);
      alert("Account created.")
      navigate('/login')
    } else {
      alert(res.data)
    }
  }
  const sendRequest = async () => {
    const res = await axios
      .post(`${apiUrl}/register`, {
        first_name: firstName,
        last_name: lastName,
        username,
        email,
        nationality,
        password,
        referredBy,
        referralCode: myReferralCode
      })
      .catch((err) => console.log(err));
    if (res.status === 200) {

      rewardReferrer();
    }
  }

  return ( 
    <div className="register_container">
      <form onSubmit={handleSubmit}>
        <a className="regHeader" href='/'>
        <img src="fullLogo.png" alt="logo" />
        {/* <h2>Frontier Capital Investment</h2> */}
        
        </a>
        <h3>Create an Account </h3>
        <p>Register to continue with us</p>
        <div className="regcontent">
          <div className="inputBox">
            <label for="Name">First Name <span>*</span></label>
            <input type="text" placeholder="Enter First name" name="name" value={firstName} onChange={(e) => setFirstName(e.target.value)} required disabled={isPending}/>
          </div>
          <div className="inputBox">
            <label for="Name">Last Name <span>*</span></label>
            <input type="text" placeholder="Enter Last name" name="name" value={lastName} onChange={(e) => setLastName(e.target.value)} required disabled={isPending}/>
            </div>
            <div className="inputBox">
                <label for="Name">Username <span>*</span></label>
                <input type="text" placeholder="Enter Username" name="name" value={username} onChange={(e) => setUsername(e.target.value)} required disabled={isPending}/>
            </div>
            <div className="inputBox">
                <label for="Email">Email Address<span>*</span></label>
                <input type="email" placeholder="Enter your Email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required disabled={isPending}/>
            </div>
            <div className="inputBox">
                <label for="Name">Nationality<span>*</span></label>
                <select value={nationality} disabled={isPending} onChange={(e) => setNationality(e.target.value)} className="custom-select">
                  <option value="US">United States</option>
                  <option value="CN">China</option>
                  <option value="IN">India</option>
                  <option value="ID">Indonesia</option>
                  <option value="PK">Pakistan</option>
                  <option value="BR">Brazil</option>
                  <option value="NG">Nigeria</option>
                  <option value="BD">Bangladesh</option>
                  <option value="RU">Russia</option>
                  <option value="MX">Mexico</option>
                  <option value="JP">Japan</option>
                  <option value="ET">Ethiopia</option>
                  <option value="PH">Philippines</option>
                  <option value="EG">Egypt</option>
                  <option value="VN">Vietnam</option>
                  <option value="DE">Germany</option>
                  <option value="IR">Iran</option>
                  <option value="TR">Turkey</option>
                  <option value="CD">DR Congo</option>
                  <option value="TH">Thailand</option>
                  <option value="FR">France</option>
                  <option value="GB">United Kingdom</option>
                  <option value="IT">Italy</option>
                  <option value="ZA">South Africa</option>
                  <option value="TZ">Tanzania</option>
                  <option value="MM">Myanmar</option>
                  <option value="KR">South Korea</option>
                  <option value="CO">Colombia</option>
                  <option value="KE">Kenya</option>
                  <option value="ES">Spain</option>
                  <option value="AR">Argentina</option>
                  <option value="UA">Ukraine</option>
                  <option value="SD">Sudan</option>
                  <option value="UG">Uganda</option>
                  <option value="DZ">Algeria</option>
                  <option value="CA">Canada</option>
                  <option value="MA">Morocco</option>
                  <option value="IQ">Iraq</option>
                  <option value="AF">Afghanistan</option>
                  <option value="PL">Poland</option>
                  <option value="SA">Saudi Arabia</option>
                  <option value="UZ">Uzbekistan</option>
                  <option value="PE">Peru</option>
                  <option value="AO">Angola</option>
                  <option value="MY">Malaysia</option>
                  <option value="MZ">Mozambique</option>
                  <option value="GH">Ghana</option>
                  <option value="YE">Yemen</option>
                  <option value="NP">Nepal</option>
                  <option value="VE">Venezuela</option>
                  <option value="MG">Madagascar</option>
                  <option value="CM">Cameroon</option>
                  <option value="CI">Côte d'Ivoire</option>
                  <option value="AU">Australia</option>
                  <option value="NE">Niger</option>
                  <option value="TW">Taiwan</option>
                  <option value="LK">Sri Lanka</option>
                  <option value="RO">Romania</option>
                  <option value="SY">Syria</option>
                  <option value="CL">Chile</option>
                  <option value="KZ">Kazakhstan</option>
                  <option value="NL">Netherlands</option>
                  <option value="EC">Ecuador</option>
                  <option value="AO">Angola</option>
                  <option value="GT">Guatemala</option>
                  <option value="CF">Central African Republic</option>
                  <option value="RW">Rwanda</option>
                  <option value="SN">Senegal</option>
                  <option value="TD">Chad</option>
                  <option value="SO">Somalia</option>
                  <option value="ZW">Zimbabwe</option>
                  <option value="GN">Guinea</option>
                  <option value="SS">South Sudan</option>
                  <option value="RW">Rwanda</option>
                  <option value="BJ">Benin</option>
                  <option value="TN">Tunisia</option>
                  <option value="BE">Belgium</option>
                  <option value="CU">Cuba</option>
                  <option value="GR">Greece</option>
                  <option value="BO">Bolivia</option>
                  <option value="OM">Oman</option>
                  <option value="CZ">Czech Republic</option>
                  <option value="PT">Portugal</option>
                  <option value="SE">Sweden</option>
                  <option value="HU">Hungary</option>
                  <option value="BD">Bangladesh</option>
                  <option value="JO">Jordan</option>
                  <option value="BY">Belarus</option>
                  <option value="AE">United Arab Emirates</option>
                  <option value="HN">Honduras</option>
                  <option value="TJ">Tajikistan</option>
                  <option value="IL">Israel</option>
                  <option value="PS">Palestine</option>
                  <option value="AT">Austria</option>
                  <option value="CH">Switzerland</option>
                  <option value="BG">Bulgaria</option>
                  <option value="SR">Suriname</option>
                  <option value="LY">Libya</option>
                  <option value="YE">Yemen</option>
                  <option value="NP">Nepal</option>
                  <option value="HN">Honduras</option>
                  <option value="BS">The Bahamas</option>
                  <option value="FI">Finland</option>
                  <option value="MN">Mongolia</option>
                  <option value="IS">Iceland</option>
                  <option value="LK">Sri Lanka</option>
                  <option value="SZ">Eswatini</option>
                  <option value="NO">Norway</option>
                  <option value="PR">Puerto Rico</option>
                  <option value="LB">Lebanon</option>
                  <option value="UA">Ukraine</option>
                  <option value="KP">North Korea</option>
                  <option value="CI">Côte d'Ivoire</option>
                  <option value="SZ">Eswatini</option>
                  <option value="SI">Slovenia</option>
                  <option value="MK">North Macedonia</option>
                  <option value="LS">Lesotho</option>
                  <option value="LV">Latvia</option>
                  <option value="GE">Georgia</option>
                  <option value="IE">Ireland</option>
                  <option value="GN">Guinea</option>
                  <option value="BA">Bosnia and Herzegovina</option>
                  <option value="KW">Kuwait</option>
                  <option value="HR">Croatia</option>
                  <option value="MD">Moldova</option>
                  <option value="PA">Panama</option>
                  <option value="UR">Uruguay</option>
                  <option value="ER">Eritrea</option>
                  <option value="MZ">Mozambique</option>
                  <option value="AM">Armenia</option>
                  <option value="AL">Albania</option>
                  <option value="QA">Qatar</option>
                  <option value="CF">Central African Republic</option>
                  <option value="ME">Montenegro</option>
                  <option value="SL">Sierra Leone</option>
                  <option value="MN">Mongolia</option>
                  <option value="PY">Paraguay</option>
                  <option value="LV">Latvia</option>
                  <option value="TW">Taiwan</option>
                  <option value="KW">Kuwait</option>
                  <option value="BA">Bosnia and Herzegovina</option>
                  <option value="OM">Oman</option>
                  <option value="NI">Nicaragua</option>
                  <option value="SV">El Salvador</option>
                  <option value="MG">Madagascar</option>
                  <option value="MR">Mauritania</option>
                  </select>
            </div>
            <div className="inputBox">
                <label for="Referral Code">Referral Code </label>
                <input type="text" placeholder="Enter your Referral Code" name="number" value={referralCode} onChange={(e) => setReferralCode(e.target.value)} disabled={isPending}/>
            </div>
            <div className="inputBox">
                <label for="password">Password <span>*</span></label>
                <input type="password" placeholder="Enter your password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required disabled={isPending} />
            </div>
            <div className="inputBox">
                <label for="password">Confirm Password <span>*</span></label>
                <input type="password" placeholder="Enter your password" name="password" value={confirmPass} onChange={(e) => setConfirmPass(e.target.value)} required disabled={isPending} />
            </div>
        </div>
        <div className="alert">
          <input type="checkbox" name="T&C" id="" required disabled={isPending}/>
          <label for="T&C">I agree with <Link to=""><span>Privacy & Policy </span></Link> and <Link to=""><span>Terms & Condition.</span></Link></label>
      </div>
      <div className="buttonContainer">
          <button type="submit" disabled={isPending}> {isPending ? "Loading..." : "Create Account"}</button>
      </div>
      <div className="input-link">
          <span>Already have an Account?</span> <Link to="/login" className="forgpass" disabled={isPending}>Login</Link>
        </div>
      </form>
    </div>
   );
}
 
export default Register;