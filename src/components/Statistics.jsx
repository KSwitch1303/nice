import './Statistics.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';
const Statistics = () => {
  const apiUrl = process.env.REACT_APP_API_URL;
  const { userId} = useContext(UserContext);
  const [transactions, setTransactions] = useState([]);
  useEffect(() => {
    const getTransactions = async () => {
      const res = await axios.get(`${apiUrl}/gettransactions/${userId}`);
      // const res = await axios.get(`${apiUrl}/gettransactions/`);
      if (res.status === 200) {
        setTransactions(res.data);
      } else {
        alert(res.data);
      }
    };
    try {
      getTransactions();
    } catch (error) {
      console.log(error);
    }
  }, []);
  return ( 
    <div className='stat'>
      <div class="stat_container">
        <h1>Transaction History</h1>
        <div class="transaction-table">
            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Description</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.map((transaction) => (
                        <tr key={transaction._id}>
                            <td>{transaction.date}</td>
                            <td>{transaction.description}</td>
                            <td>{transaction.amount}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
    </div>
   );
}
 
export default Statistics;