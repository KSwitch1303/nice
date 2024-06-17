import { Link } from "react-router-dom";
import AnimatedNumber from "react-animated-numbers";
import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../contexts/UserContext';
import { useNavigate } from "react-router-dom";
import Statistics from './Statistics';
const Mdashcard = () => {
  const navigate = useNavigate();
  const { sideBar, firstName, lastName, userId, userName, paymentAmount, totalTraded, totalWithdrawn, earnedTotal, regDate, referralCode, referrals, setLoggedIn } = useContext(UserContext);
  return ( 
    <>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"></link>
      <div className="mdashcard">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"></link>
        <div className="maccountbalance">
          <div className="maccheader">
            <span>Account Overview</span>
          </div>
          <hr color="#fff" style={{width: '100%'}} />
          <div className="maccbal1">
          <span className="mamount-value">
            $<AnimatedNumber
              animateToNumber={paymentAmount}
              includeComma
              configs={(_, index) => {
              return {
              mass: 1,
              friction: 100,
              tensions: 140 * (index + 1),
              };
              }}
              animationType={"calm"}
            />
            </span>
          <span className="mtitle">Account Balance</span>
          </div>
          <div className="maccbal1">
            <span className="mamount-value">
            $<AnimatedNumber
              animateToNumber={earnedTotal}
              includeComma
              configs={(_, index) => {
              return {
              mass: 1,
              friction: 100,
              tensions: 140 * (index + 1),
              };
              }}
              animationType={"calm"}
            />
            </span>
            <span className="mtitle">Earned Total</span>
          </div>
        </div>
        <div className="mlinks">
          <div onClick={() => navigate('/payment')} className="mcard">
            <i class="fa-solid fa-money-bill"></i>
            <p>Recharge</p>
          </div>
          <div onClick={() => navigate('/invest')} className="mcard">
          <i class="fa-solid fa-landmark"></i>
            <p>Invest</p>
          </div>
          <div onClick={() => navigate('/withdraw')} className="mcard">
          <i class="fa-solid fa-paper-plane"></i>
            <p>Withdraw</p>
          </div>
          <div onClick={() => navigate('/settings')} className="mcard">
          <i class="fas fa-cog"></i>
            <p>Settings</p>
          </div>
          <div  className="mcard">
          <i class="fa-regular fa-copy"></i>
            <p>copy code</p>
          </div> 
          <div onClick={() => { setLoggedIn(false) }} className="mcard">
          <i class="fas fa-sign-out-alt"></i>
            <p>Logout</p>
          </div> 
        </div>
      </div>
      <Statistics />
    </>
    
   );
}
 
export default Mdashcard;