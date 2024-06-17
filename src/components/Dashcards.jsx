import AnimatedNumber from "react-animated-numbers";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../contexts/UserContext';

const Dashcards = () => {
  const { sideBar, firstName, lastName, userId, userName, paymentAmount, totalTraded, totalWithdrawn, earnedTotal, regDate, referralCode, referrals } = useContext(UserContext);
  const navigate = useNavigate();
  return ( 
    <div className="card-container">
          <h1 className="main-title">Accounts Details</h1>
          <div className="card-wrapper">
            <div className="payment-card">
              <div className="card-header">
                <div className="amount">
                  <span className="title">
                    Account Balance<br /><br />
                    <span className="amount-value">
                      $
                        <AnimatedNumber
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
                  </span>
                </div>
              </div>
              <span className="card-detail">
                <button onClick={() => navigate('/payment')}>Recharge</button>
              </span>
            </div>
            <div className="payment-card">
              <div className="card-header">
                <div className="amount">
                  <span className="title">
                    Total Invested<br /><br />
                    <span className="amount-value">
                      $
                      <AnimatedNumber
                        animateToNumber={totalTraded}
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
                  </span>
                  </div>
                  </div>
                  <span className="card-detail">
                    <button onClick={() => navigate('/invest')}>Invest</button>
                  </span>
              </div>
              <div className="payment-card">  
                <div className="card-header">
                  <div className="amount">
                    <span className="title">
                      Total Earned<br /><br />
                      <span className="amount-value">
                        $
                        <AnimatedNumber
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
                    </span>
                  </div>
                </div>
                <span className="card-detail">
                  <button onClick={() => navigate('/statistics')}>Check Transaction History</button>
                </span>
              </div>
              <div class="payment-card">
                <div class="card-header">
                  <div class="amount">
                    <span class="title">
                      Total Withdrawn<br /><br />
                      <span class="amount-value">
                        $
                        <AnimatedNumber
                        animateToNumber={totalWithdrawn}
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
                    </span>
                  </div>
                </div>
                <span class="card-detail">
                  <button onClick={() => navigate('/withdraw') }>Request A Witdrawal</button>
                </span>
              </div>
              <div class="payment-card">
                <div class="card-header">
                <div class="amount">
                <span class="title">
                Total Investments<br /><br />
                <span class="amount-value">
                <AnimatedNumber
                        animateToNumber={totalTraded}
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
                &nbsp;
                </span>
                </span>
                </div>
                </div>
                <span class="card-detail">
                </span>
              </div>
              <div class="payment-card">
                <div class="card-header">
                <div class="amount">
                <span class="title">
                Referals<br /><br />
                <span class="amount-value">
                <AnimatedNumber
                        animateToNumber={referrals}
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
                </span>
                </div>
                </div>
                <span class="card-detail">
                <button onClick={() => {
                  navigator.clipboard.writeText(referralCode) 
                  alert("Copied!")
                }}>Copy Referral Code</button>
                </span>
              </div>
          </div>
          <span class="card-detail">
          
            </span>
        </div>
   );
}
 
export default Dashcards;