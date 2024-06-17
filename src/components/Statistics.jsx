import './Statistics.css';
import axios from 'axios';
import { useEffect, useState, useContext } from 'react';
import { UserContext } from '../contexts/UserContext';

const Statistics = () => {
  const apiUrl = process.env.REACT_APP_API_URL;
  const { userId } = useContext(UserContext);
  const [transactions, setTransactions] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const transactionsPerPage = 20;

  useEffect(() => {
    const getTransactions = async () => {
      try {
        const res = await axios.get(`${apiUrl}/gettransactions/${userId}`);
        if (res.status === 200) {
          setTransactions(res.data);
        } else {
          alert(res.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getTransactions();
  }, [apiUrl, userId]);

  // Pagination Logic
  const indexOfLastTransaction = currentPage * transactionsPerPage;
  const indexOfFirstTransaction = indexOfLastTransaction - transactionsPerPage;
  const currentTransactions = transactions.slice(indexOfFirstTransaction, indexOfLastTransaction);

  const nextPage = () => {
    if (currentPage < Math.ceil(transactions.length / transactionsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className='stat'>
      <div className="stat_container">
        <h1>Transaction History</h1>
        <div className="transaction-table">
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Description</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              {currentTransactions.map((transaction) => (
                <tr key={transaction._id}>
                  <td>{transaction.date.slice(0, 10)}</td>
                  <td>{transaction.description}</td>
                  <td>{transaction.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="pagination-buttons">
          <button onClick={prevPage} disabled={currentPage === 1}>
            Previous
          </button>
          <button onClick={nextPage} disabled={currentPage === Math.ceil(transactions.length / transactionsPerPage)}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
