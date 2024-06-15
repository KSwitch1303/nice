import './WhyChoose.css';
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const WhyChoose = () => {
  return ( 
    <div className="whychoose" id='whychoose'>
      <div className="whychoose_header">
        <h1>Why Choose Us?</h1>
      </div>
      <div className="whychoose_wrap">
        <div className="whychoose_content">
          <h2>We can build a better and stronger finance for You</h2>
          <p>Here, we have incorporated a strategy <br />
            that ensures a sustained consistency <br />
            in generating outstanding daily market revenue.
          </p>
          <Link to="/register" className="whychoose_btn">Join Us</Link>
        </div>
        <div className="whychoose_image">
        <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1, borderRadius: "20px" }}
        whileTap={{ scale: 0.9 }}
        transition={{ duration: 0.1 }}
        viewport={{ once: true }}>
          <img src='/whyUs.jpeg' alt="Why Choose Us" />
        </motion.div>
        </div>
      </div>
    </div>
   );
}
 
export default WhyChoose;