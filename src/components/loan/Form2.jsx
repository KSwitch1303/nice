import { useContext } from 'react';
import { LoanContext } from '../../contexts/LoanContext';
import './Loanform.css'
const Form2 = () => {
  const {borrowAmmount, setBorrowAmmount, setFormnum} = useContext(LoanContext);
  const handleSubmit = (event) => {
    event.preventDefault();
    setFormnum(3);
  }
  return ( 
    <div className="loanformbody">
      <div className="loanformheader">
        <h2>How much would you like to borrow?</h2>
      </div>
      <div className="loanformcontent">
        <span>${borrowAmmount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span>
        <input type="range" min="1000" max="100000" step="500" value={borrowAmmount} onChange={(e) => setBorrowAmmount(e.target.value)} />
        <p>($1000 min - $100,000 max)</p>
        <button onClick={handleSubmit} type="submit" className="loanformbtn">Continue</button>
      </div>
      <div className="loanformfooter">
        <p><i class="fa-solid fa-lock"></i> Privacy Secured | Advertisiing Disclousure</p>
      </div>
    </div>
   );
}
 
export default Form2;