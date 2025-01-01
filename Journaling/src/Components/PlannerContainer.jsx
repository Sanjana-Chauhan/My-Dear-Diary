import styles from "./PlannerContainer.module.css";
import Card from "./Card";
import cardimg from "../Images/CardImg.png";
import cardimg2 from "../Images/cardimg.jpg";
import cardimg3 from "../Images/diet.png";
import cardimg4 from "../Images/output.png";
function PlannerContainer() {
  const Cards = [
    {
      title: "Daily Planner",
      desc: "Lets paln your day and make it much more productive. ",
      img: cardimg,
      color:"#FFADAD"
    },
    {
      title: "Weekly Planner",
      desc: "Oraganise your week and plan every day.",
      img: cardimg2,
      color: "#FDFFB6"
    },
    {
      title: "Journaling",
      desc: "Record your all moments of the day and express your mood.",
      img: cardimg3,
      color:"#DEDAF4"
    },
    {
      title: "Bucket List",
      desc: "Make plans and achieve them to enjoy your life.",
      img: cardimg4,
      color: "#E4F1EE"
    },
  ];
  return (
    <div className={styles.MainConatiner}>
      <h1 className={styles.heading}>Life Planner</h1>
      <div className={styles.CardHolder}>
        {Cards.map((card)=>(
            <Card title={card.title} desc={card.desc} img={card.img} color={card.color}/>
        ))}
      </div>
    </div>
  );
}
export default PlannerContainer;
