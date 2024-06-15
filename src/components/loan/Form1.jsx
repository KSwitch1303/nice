import { useContext } from 'react';
import { LoanContext } from '../../contexts/LoanContext';
import './Loanform.css'
const Form1 = () => {
  const {purpose, setPurpose, setFormnum} = useContext(LoanContext);
  
  const handleSubmit = (event) => {
    event.preventDefault();
    if (purpose === '') {
      alert('Please select a loan purpose')
    } else {
      setFormnum(2);
    }
  }
  return ( 
    <div className="loanformbody">
      <div className="loanformheader">
        <h2>Get cash in a lump sum. Repay monthly</h2>
        <p>what do you plan on using the loan for?</p>
      </div>
      <div className="loanformcontent">
        <select value={purpose} onChange={(e) => setPurpose(e.target.value)}>
          <option value="" disabled>Select a loan purpose</option>
          <option value="0">Debt Consolidation</option>
          <option value="1">Credit Card Consolidation</option>
          <option value="2">Home Improvement</option>
          <option value="3">Home Buying</option>
          <option value="4">Major Purchase</option>
          <option value="5">Car Financing</option>
          <option value="6">Business</option>
          <option value="7">Moving and Relocation</option>
          <option value="8">Medical Expenses</option>
          <option value="9">Other</option>
        </select>
        <button onClick={handleSubmit} type="submit" className="loanformbtn">Continue</button>
      </div>
      <div className="loanformfooter">
      <p><i class="fa-solid fa-lock"></i> Privacy Secured | Advertisiing Disclousure</p>
      </div>
    </div>
   );
}
 
export default Form1;