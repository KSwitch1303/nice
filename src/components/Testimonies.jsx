import React from 'react';
import './Testimonies.css';
import { motion } from 'framer-motion';
function Testimonies() {
  return (
    <div id='testimonies'>
      <link
        href="https://cdn.jsdelivr.net/npm/remixicon@3.2.0/fonts/remixicon.css"
        rel="stylesheet"
      />
      <div className="testi_heading">
        <h1>Investors Testimonies</h1>
      </div>
      <header className='testi_header'>
        <div className="testi_container">
          <div className="testi_container__left">
            <h1>Read what our customers love about us</h1>
            <p>
              Over thousands of Investors of investors across the world have enjoyed our investment plans.
            </p>
            <p>
              We have helped investors increase their money and generate multifold income with our service.
            </p>
          </div>
          <div className="testi_container__right">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <div className="testi_card">
                <img src="pic-1.jpg" alt="user" />
                <div className="testi_card__content">
                  <span><i className="ri-double-quotes-l"></i></span>
                  <div className="testi_card__details">
                    <p>
                    Frontier capital investment consistently delivers exceptional service. Their expertise has significantly boosted my financial status!
                    </p>
                    <h4>- Marnus Stephen</h4>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <div className="testi_card">
                <img src="pic-2.jpeg" alt="user" />
                <div className="testi_card__content">
                  <span><i className="ri-double-quotes-l"></i></span>
                  <div className="testi_card__details">
                    <p>
                    I'm extremely impressed with Frontier capital investment  transparency and dedication to client success. They provide clear insights and personalized strategies that truly cater to my investment goals.
                    </p>
                    <h4>- Andrew Jettpace</h4>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <div className="testi_card">
                <img src="pic-3.jpg" alt="user" />
                <div className="testi_card__content">
                  <span><i className="ri-double-quotes-l"></i></span>
                  <div className="testi_card__details">
                    <p>
                    Working withFrontier capital investment  has been a game-changer. Their proactive approach and deep market knowledge have given me confidence and peace of mind in my financial future.
                    </p>
                    <h4>- Stacy Stone</h4>
                  </div>
                </div>
              </div>
            </motion.div>
           
          </div>
        </div>
      </header>
    </div>
  );
}

export default Testimonies;
