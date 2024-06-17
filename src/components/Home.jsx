import Achievements from "./Achievements";
import Myfooter from "./Footer";
import HomeHero from "./HomeHero";
import Testimonies from "./Testimonies";
import TradingPlans from "./TradingPlans";
import WhyChoose from "./WhyChoose";
import { motion } from "framer-motion";
const Home = () => {
  return ( 
    <div className="home">
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <HomeHero />
      </motion.div>
      <WhyChoose />
      <Achievements />
      <Testimonies />
      <TradingPlans />
      <Myfooter />
    </div>
   );
}
 
export default Home;