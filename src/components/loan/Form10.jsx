import { useContext } from 'react';
import { LoanContext } from '../../contexts/LoanContext';
import './Loanform.css'
const Form10 = () => {
  const {borrowAmmount, setBorrowAmmount, setFormnum} = useContext(LoanContext);
  const handleSubmit = (event) => {
    event.preventDefault();
    setFormnum(3);
  }
  return ( 
    <div className="loanformbody">
      <div className="loanformheader">
        <h2>SUCCESS</h2>
        <p>Thank you for using our service. Your Loan request is currently processing</p>
      </div>
    </div>
   );
}
 
export default Form10;