import './Dashboard.css'
import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../contexts/UserContext';
import TradingViewWidget from './TradingViewWidget';
import AnimatedNumber from "react-animated-numbers";
import { isMobile } from 'react-device-detect';
import Dashcards from './Dashcards';
import Mdashcard from './Mdashcard';
import Dashfooter from './Dashfooter';
const Dashboard = () => {
  const { sideBar, firstName, lastName, userId, userName, paymentAmount, totalTraded, totalWithdrawn, earnedTotal, regDate, referralCode, referrals } = useContext(UserContext);
  const [classChange, setClassChange] = useState('main-content'); 
  const navigate = useNavigate();
  useEffect(() => {
    if (sideBar === true) {
      setClassChange('main-content2');
    } else {
      setClassChange('main-content');
    }
  },[sideBar])
  
  const [width, setWidth] = useState(window.innerWidth);
  const [display, setDisplay] = useState(true);
function handleWindowSizeChange() {
    setWidth(window.innerWidth);
    // alert(window.innerWidth)
    if(window.innerWidth < 800){
      setDisplay(false);
    }
    else{
      setDisplay(true);
    }
}
useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
        window.removeEventListener('resize', handleWindowSizeChange);
    }
}, []);

useEffect(() => {
  handleWindowSizeChange();
}, []);


  return ( 
    <div className="dashbody">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"></link>
      <div>
        <div className="header-wrapper">
          <div className="header-title">
              <h2>Welcome  <span className="blue">{firstName} {lastName}</span> to your Dashboard</h2>
          </div>
          <div className="user-info">
              <div className="search-box">
          </div>
          </div>
        </div>
        {display ? (
         <Dashcards />  
        ) : <Mdashcard /> }
       
        <div className="tradeChart">
         <TradingViewWidget />
        </div>
        <div className="tabular-wrapper">
          <h3 className="tabular-title">
            
          </h3>
          <div className="tabular-container">
            <div className="center">
            <table>
              <thead>
              <tr>
                <th>ONEFUND ID</th>
                </tr>
                <tbody>
                <tr>
                <td>Username : {userName}</td>
                </tr>
                <tr>
                <td>ID NO : {userId}</td>
                </tr>
                <tr>
                <td>Registration Date : {regDate}</td>
                </tr>
                <tr>
                <td>Referral Code : {referralCode} <button className="copy-btn" onClick={() => {
                  navigator.clipboard.writeText(referralCode) 
                  alert("Copied!")
                }}><i class="fa-regular fa-copy"></i></button></td>
                </tr>

                </tbody>
              </thead>
            </table>
            </div>
           
          </div>
        </div>
      </div>
      {/* {display ? (
         null
        ) : <Dashfooter /> } */}
    </div>
   );
}
 
export default Dashboard
