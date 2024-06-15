import './Payment.css';
import { useState } from 'react'; // Import useState hook for managing state

const Payment = () => {
  const [transactionID, setTransactionID] = useState(''); // State for transaction ID
  const [amount, setAmount] = useState(''); // State for amount

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
  }

  return ( 
    <div className="payment">
      <div className="pay_container">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="pay_column">
              <div className="pay_input-box">
                <span>Transaction ID</span>
                <input 
                  className='pay_input' 
                  type="text" 
                  placeholder="Your Transaction ID" 
                  value={transactionID} 
                  onChange={(e) => setTransactionID(e.target.value)} // Update transaction ID state
                />
              </div>
            </div>
            <div className="pay_column">
              <div className="pay_input-box">
                <span>Amount</span>
                <input 
                  type="number" 
                  placeholder="Minimum 10 USD" 
                  value={amount} 
                  onChange={(e) => setAmount(e.target.value)} // Update amount state
                />
              </div>
            </div>
            <p>Make Payment to the provided Bitcoin Wallet below: <br /><br />
              <span>37nYTXV7A6CtLpbQLrGSWiJi1chneocVQA</span> 
              <button 
                className="pay_copy-btn" 
                onClick={() => {
                  navigator.clipboard.writeText('37nYTXV7A6CtLpbQLrGSWiJi1chneocVQA');
                  alert("Copied!");
                }}
              >
                <i className="fa-regular fa-copy"></i>
              </button> 
              <br /><br />
            </p>
          </div>
          <button type="submit" className="btn">Submit</button> {/* Changed type to "submit" */}
        </form>
      </div>
    </div>
  );
}

export default Payment;
