import { useState, useContext } from 'react';
import { LoanContext } from '../../contexts/LoanContext';
import './Loanform.css'
const Form4 = () => {
  const {setResidence, setFormnum} = useContext(LoanContext);
  return ( 
    <div className="loanformbody">
      <div className="loanformheader">
        <h2>Type of residence?</h2>
      </div>
      <div className="loanformcontent">
      <button onClick={() => {
        setResidence(0);
        setFormnum(5);
      }} type="submit" className="loanformbtn">I own my home</button>
        <button onClick={() =>{
          setResidence(1);
          setFormnum(5);
        }} type="submit" className="loanformbtn">I am renting</button>
      </div>
      <div className="loanformfooter">
        <p><i class="fa-solid fa-lock"></i> Privacy Secured | Advertisiing Disclousure</p>
      </div>
    </div>
   );
}
 
export default Form4;