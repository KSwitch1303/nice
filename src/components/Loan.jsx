import { useState } from 'react';
import './Loan.css';
import Form1 from './loan/Form1';
import Form2 from './loan/Form2';
import Form3 from './loan/Form3';
import Form4 from './loan/Form4';
import Form5 from './loan/Form5';
import Form6 from './loan/Form6';
import Form7 from './loan/Form7';
import Form8 from './loan/Form8';
import Form9 from './loan/Form9';
import Form10 from './loan/Form10';
const { LoanContext } = require("../contexts/LoanContext");
const Loan = () => {
  const [formnum, setFormnum] = useState(1);
  const [purpose, setPurpose] = useState('');
  const [borrowAmmount, setBorrowAmmount] = useState(1000);
  const [loanDOB, setLoanDOB] = useState('');
  const [residence, setResidence] = useState('');
  const [employmentStatus, setEmploymentStatus] = useState('');
  const [annualIncome, setAnnualIncome] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [ssn, setSsn] = useState("");

  return ( 
    <LoanContext.Provider value={{purpose, setPurpose, formnum, setFormnum, borrowAmmount, setBorrowAmmount, loanDOB, setLoanDOB, residence, setResidence, employmentStatus, setEmploymentStatus, annualIncome, setAnnualIncome, zipCode, setZipCode, streetAddress, setStreetAddress, firstName, setFirstName, lastName, setLastName, email, setEmail, phoneNumber, setPhoneNumber, ssn, setSsn}}>
      <div className="loan">
        <div className="loanheader">
        <img src="logo.png" alt="logo" />
        <h2>Frontier Capital Investment</h2>
        </div>
        <div className="loanforms">
          {formnum === 1 && <Form1 />}
          {formnum === 2 && <Form2 />}
          {formnum === 3 && <Form3 />}
          {formnum === 4 && <Form4 />}
          {formnum === 5 && <Form5 />}
          {formnum === 6 && <Form6 />}
          {formnum === 7 && <Form7 />}
          {formnum === 8 && <Form8 />}
          {formnum === 9 && <Form9 />}
          {formnum === 10 && <Form10 />}
        </div>
        <div className="loanfooter">
          
        </div>
      </div>
    </LoanContext.Provider>
   );
}
 
export default Loan;