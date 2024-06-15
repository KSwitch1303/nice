import './HomeHero.css';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
const HomeHero = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [display, setDisplay] = useState(true);
  const navigate = useNavigate();
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
    <div className="home_hero" id='home'>
     
      <h1><span>Build Better</span> & <br />
      <span>Stronger Finance</span></h1>
      {display ? (
        <p>Here, we have incorporated a strategy
        that ensures a sustained consistency
        in generating outstanding daily market revenue.</p>
      ): null}
      
      <button
        onClick={() => navigate('/login')}
      >Login</button>
    </div>
   );
}
 
export default HomeHero;