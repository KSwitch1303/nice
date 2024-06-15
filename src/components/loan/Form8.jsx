import { useContext } from 'react';
import { LoanContext } from '../../contexts/LoanContext';
import './Loanform.css'
const Form8 = () => {
  const {streetAddress, setStreetAddress, setFormnum} = useContext(LoanContext);
  const handleSubmit = (event) => {
    event.preventDefault();
    if (streetAddress === '') {
      alert('Please enter your street address')
    } else {
      if (streetAddress.length < 5) {
        alert('Please enter a valid street address')
      } else {
        if (streetAddress.length > 90) {
          alert('Please enter a valid street address')
        } else {
            setFormnum(9);
        }
      }
    }
  }
  return ( 
    <div className="loanformbody">
      <div className="loanformheader">
        <h2>Your street address?</h2>
        <p>We need this info to find your personalized rates</p>
      </div>
      <div className="loanformcontent">
      <input type="text" placeholder="Enter Street Address" value={streetAddress} onChange={(e) => setStreetAddress(e.target.value)} />
        <button onClick={handleSubmit} type="submit" className="loanformbtn">Continue</button>
      </div>
      <div className="loanformfooter">
        <p><i class="fa-solid fa-lock"></i> Privacy Secured | Advertisiing Disclousure</p>
      </div>
    </div>
   );
}
 
export default Form8;