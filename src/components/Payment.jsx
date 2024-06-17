import './Payment.css';
import { useState, useContext } from 'react'; // Import useState hook for managing state
import { UserContext } from '../contexts/UserContext';
import axios from 'axios'
const apiUrl = process.env.REACT_APP_API_URL;
const Payment = () => {
  const { userId } = useContext(UserContext);
  const [transactionID, setTransactionID] = useState(''); // State for transaction ID
  const [amount, setAmount] = useState(''); // State for amount
  const [isPending, setIsPending] = useState(false);
  const [paid, setPaid] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsPending(true);
    checkAmount()
  }
  const checkAmount = () => {
    if (amount < 10) {
      alert("Amount must be greater than $10")
      setIsPending(false)
    } else{
      sendRequest()
    }
  }
  const sendRequest = async () => {
    try {
      const res = await axios
        .post(`${apiUrl}/recharge`, {
          userID: userId,
          amount
        })
        .catch((err) => console.log(err));
      if (res.status === 200) {
        setPaid(true)
      } else {
        alert("Payment failed. Please try again")
      }
    } catch (err) {
      console.log(err);
    }
  }
  return ( 
    <div className="payment">
      <div className="pay_container">
        {!paid ? (
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
                    disabled={isPending}
                    required
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
                    disabled={isPending}
                    required
                  />
                </div>
              </div>
              <p>Make Payment to the provided Bitcoin Wallet below: <br /><br />
                <span>37nYTXV7A6CtLpbQLrGSWiJi1chneocVQA</span> 
                <button 
                  className="pay_copy-btn" 
                  disabled={isPending}
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
            <button disabled={isPending} type="submit" className="btn">Submit</button> {/* Changed type to "submit" */}
          </form>
        ) : (
          <p>Payment Processing</p>
        )}
        
      </div>
    </div>
  );
}

export default Payment;
