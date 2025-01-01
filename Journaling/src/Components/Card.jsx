import styles from "./PlannerContainer.module.css";
import cardimg from "../Images/CardImg.png";
function card( {title , desc, img,color}) {
  return (
    <div className={styles.card} style={{backgroundColor : color}}>
      <div className={styles.cardImg}>
        <img src={img} />
      </div>
      <div className={styles.cardcontent}>
        <span className={styles.cardTitle}>{title}</span>
        <p className={styles.cardDesc}>
          {desc}
        </p>
      </div>
    </div>
  );
}
export default card;
