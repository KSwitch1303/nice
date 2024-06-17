import React from 'react';
import './TradingPlans.css';
import { motion } from "framer-motion";
function TradingPlans() {
  return (
    <div>
      <motion.div
        >
      <div className="trading_heading" id='tradingplan'>
        <h1>OUR TRADING PLANS</h1>
        <h2>We have different plans designed to achieve various financial Goals ensuring satisfied <br />Services to our clients </h2>
      </div>
          <div className="tradeplan_card_container">
        <div className="trading_card1">
          <h2 className="trading_title">PREMIUM PLAN</h2>
          <p><span className="tradeplan_DC2">30</span>%<br />Daily for 7 days</p>
          <br /><br /><hr color='#000' />
          <p>Min:$20,000</p><hr color='#000' />
          <p>Max:$39,999</p><hr color='#000' />
          <p>10% Referral Bonus</p><hr color='#000' />
          <p>Multiple Investment Allowed</p><hr color='#000' />
          <p>24/7 Customer Care</p><hr color='#000' />
          <div className="tradeplan_btnside">
            <button className="btn1">Join</button>
          </div>
        </div>
        <div className="trading_card1">
          <h2 className="trading_title">PRO PLAN</h2>
          <p><span className="tradeplan_DC2">50</span>%<br />Daily for 15 days</p>
          <br /><br /><hr color='#000' />
          <p>Min:$60,000</p><hr color='#000' />
          <p>Max:$79,999</p><hr color='#000' />
          <p>10% Referral Bonus</p><hr color='#000' />
          <p>Multiple Investment Allowed</p><hr color='#000' />
          <p>24/7 Customer Care</p><hr color='#000' />
          <div className="tradeplan_btnside">
            <button className="btn1">Join</button>
          </div>
        </div>
        <div className="trading_card1">
          <h2 className="trading_title">DIAMOND PLAN</h2>
          <p><span className="tradeplan_DC2">85</span>%<br />Daily for 15 days</p>
          <br /><br /><hr color='#000' />
          <p>Min:$100,000</p><hr color='#000' />
          <p>Max:$120,000</p><hr color='#000' />
          <p>10% Referral Bonus</p><hr color='#000' />
          <p>Multiple Investment Allowed</p><hr color='#000' />
          <p>24/7 Customer Care</p><hr color='#000' />
          <div className="tradeplan_btnside">
            <button className="btn1">Join</button>
          </div>
        </div>
      </div>
        </motion.div>
      
    </div>
  );
}

export default TradingPlans;
