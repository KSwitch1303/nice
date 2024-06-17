import AnimatedNumber from "react-animated-numbers";
import './Achievements.css';
const Achievements = () => {
  const achievementsList = [
    {
      prefix: "$",
      metric: "MINIMUM INVESTMENT AMOUNT",
      value: "100",
    },
    {
      metric: "TOTAL INVESTORS",
      value: "257871",
    },
    {
      prefix: "$",
      metric: "TOTAL INVESTED",
      value: "631212000",
    },
    {
      prefix: "$",
      metric: "TOTAL WITHDRAWN",
      value: "601220000",
    },
  ];
  return ( 
    <div className="Achi" id='achievements'>
      <h1 className="achi_header">PLACE YOUR TRADES ON BEST CONDITIONS?</h1>
      <div className="achi_Services">
        {achievementsList.map((achievement, index) => (
          <div className="achi_card" key={index}>
            {/* <div className="achivement__metric">{achievement.metric}</div> */}
            <h4>
              {achievement.prefix}
              <AnimatedNumber
                animateToNumber={achievement.value}
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
            </h4>
            <span className="Span">{achievement.metric}</span>
          </div>
        ))}
      </div>
      
      {/* <AnimatedNumber
          fontStyle={{ fontFamily: "Nunito", fontSize: 40 }}
          animateToNumber={1000}
          includeComma
          config={{ mass: 1, tension: 89, friction: 100 }}
          onStart={() => console.log("onStart")}
          onFinish={() => console.log("onFinish")}
          animationType={"calm"}
        /> */}
    </div>
   );
}
 
export default Achievements;