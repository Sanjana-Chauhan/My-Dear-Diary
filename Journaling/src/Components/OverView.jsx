import List from "./List";
import styles from "./OverView.module.css";
import stationary from "../Images/girlWithComputer.png";
function OverView() {
  const Headers = ["Description", "Category", "Date"];
  const overviewItems = [
    {
      check: true,
      desc: "movie",
      Category: "entertainment",
      Date: "23-10-12",
    },
    {
      check: false,
      desc: "playing",
      Category: "games",
      Date: "23-10-12",
    },
    {
      check: true,
      desc: "Dancing",
      Category: "timepass",
      Date: "23-10-12",
    },
    {
      check: true,
      desc: "Dancing",
      Category: "timepass",
      Date: "23-10-12",
    },
  ];
  return (
    <div className={styles.OverView}>
      <div className={styles.nav}>
        <span className={styles.active}>Tasks </span>
        <span>Journal</span>
        <span>Activities</span>
        <span>Plans</span>
      </div>
      <div className={styles.section}>       
        <List Header={Headers} content={overviewItems} />
        <div className={styles.sideimg}>
          <img src={stationary} />
        </div>
      </div>
     
    </div>
  );
}
export default OverView;
