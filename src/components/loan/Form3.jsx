import { useContext } from 'react';
import { LoanContext } from '../../contexts/LoanContext';
import './Loanform.css'
const Form3 = () => {
  const {loanDOB, setLoanDOB, setFormnum} = useContext(LoanContext);
  const handleSubmit = (event) => {
    event.preventDefault();
    if (loanDOB === '') {
      alert('Please select your date of birth')
    } else {
      if (new Date().getFullYear() - new Date(loanDOB).getFullYear() < 18) {
        alert('You must be at least 18 years old to use this service')
      } else{
        setFormnum(4);
      }
    }
  }
  return ( 
    <div className="loanformbody">
      <div className="loanformheader">
        <h2>When were you born?</h2>
      </div>
      <div className="loanformcontent">
      <input type="date" value={loanDOB} onChange={(e) => setLoanDOB(e.target.value)} />
        <button onClick={handleSubmit} type="submit" className="loanformbtn">Continue</button>
      </div>
      <div className="loanformfooter">
        <p><i class="fa-solid fa-lock"></i> Privacy Secured | Advertisiing Disclousure</p>
      </div>
    </div>
   );
}
 
export default Form3;