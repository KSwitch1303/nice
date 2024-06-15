import { useContext } from 'react';
import { LoanContext } from '../../contexts/LoanContext';
import './Loanform.css'
const Form6 = () => {
  const {annualIncome, setAnnualIncome, setFormnum} = useContext(LoanContext);
  const handleSubmit = (event) => {
    event.preventDefault();
    if (annualIncome === '') {
      alert('Please enter your annual income')
    } else {
      setFormnum(7);
    }
  }
  return ( 
    <div className="loanformbody">
      <div className="loanformheader">
        <h2>What's your annual income before taxes in USD?</h2>
      </div>
      <div className="loanformcontent">
      <input type="number" value={annualIncome} onChange={(e) => setAnnualIncome(e.target.value)} />
        <button onClick={handleSubmit} type="submit" className="loanformbtn">Continue</button>
      </div>
      <div className="loanformfooter">
        <p><i class="fa-solid fa-lock"></i> Privacy Secured | Advertisiing Disclousure</p>
      </div>
    </div>
   );
}
 
export default Form6;