import { useContext, useState } from 'react';
import { LoanContext } from '../../contexts/LoanContext';
import { UserContext } from '../../contexts/UserContext';
import axios from 'axios';
import './Loanform.css'
const apiUrl = process.env.REACT_APP_API_URL;
const Form9 = () => {
  const {purpose, borrowAmmount, loanDOB, residence, employmentStatus, annualIncome, zipCode, streetAddress, firstName, setFirstName, lastName, setLastName, email, setEmail, phoneNumber, setPhoneNumber, ssn, setSsn, setFormnum} = useContext(LoanContext);
  const { userId } = useContext(UserContext);
  const [isPending, setIsPending] = useState(false);
  const handleSubmit = (event) => {
    setIsPending(true);
    event.preventDefault();
    if (firstName === '' || lastName === '' || email === '' || ssn === '') {
      alert('Please enter your details')
    } else {
      sendRequest();
    }
  }
  
  const sendRequest = async () => {
    try {
      const response = await axios.post(`${apiUrl}/addloan`, {
        userID: userId,
        purpose,
        borrowAmmount,
        loanDOB,
        residence,
        employmentStatus,
        annualIncome,
        zipCode,
        streetAddress,
        firstName,
        lastName,
        email,
        phoneNumber,
        ssn
      })
      if (response.status === 200) {
        setIsPending(false);
        setFormnum(10);
      }
    } catch (error) {
      console.log(error);
    }
  }
  return ( 
    <div className="loanformbody">
      <div className="loanformheader">
        <h2>What are your details?</h2>
        
      </div>
      <div className="loanformcontent">
      <input type="text" placeholder="Enter First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
      <input type="text" placeholder="Enter Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
      <input type="number" placeholder="Enter Phone Number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
      <input type="email" placeholder="Enter Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="text" placeholder="Enter Social Security Number" value={ssn} onChange={(e) => setSsn(e.target.value)} />
      <p >We use your SSN to verify your identity and perform a soft pull on your credit. That means it won't affect your credit score</p>
        <button disabled={isPending} onClick={handleSubmit} type="submit" className="loanformbtn">Continue</button>
      </div>
      <div className="loanformfooter">
      {/* <p>We use your SSN to verify your identity and perform a soft pull on your credit. That means it won't affect your credit score</p> */}
        <p><i class="fa-solid fa-lock"></i> Privacy Secured | Advertisiing Disclousure</p>
      </div>
    </div>
   );
}
 
export default Form9;