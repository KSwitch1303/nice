import { useContext, useEffect } from 'react';
import { LoanContext } from '../../contexts/LoanContext';
import { UserContext } from '../../contexts/UserContext';
import './Loanform.css'
import axios from 'axios';
const secrete = process.env.REACT_APP_ZIP_AUTH_KEY;
const Form7 = () => {
  const {zipCode, setZipCode, setFormnum} = useContext(LoanContext);
  const { nationality } = useContext(UserContext);
  
  const handleSubmit = (event) => {
    event.preventDefault();
    try {
      sendRequest();
    } catch (error) {
      alert(error);
    }
  }
  const sendRequest = async () => {
   const response = await axios.get(`https://api.zipcodestack.com/v1/search?codes=${zipCode}&country=${nationality}&apikey=${secrete}`);
  try {
    alert(response.data.results[zipCode][0].city + " " + response.data.results[zipCode][0].state);
    setFormnum(8);
  } catch (error) {
    alert("Please enter a valid ZIP code that matches your country");
  }
  }
  return ( 
    <div className="loanformbody">
      <div className="loanformheader">
        <h2>What's your ZIP code?</h2>
      </div>
      <div className="loanformcontent">
      <input type="number" value={zipCode} onChange={(e) => setZipCode(e.target.value)} />
        <button onClick={handleSubmit} type="submit" className="loanformbtn">Continue</button>
      </div>
      <div className="loanformfooter">
        <p></p>
        <p><i class="fa-solid fa-lock"></i> Privacy Secured | Advertisiing Disclousure</p>
      </div>
    </div>
   );
}
 
export default Form7;