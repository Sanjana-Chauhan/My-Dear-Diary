import styles from "./DailyPlanner.module.css";
function DailyPlanner() {
  return (
    <div className={styles.DailyPlanner}>
      
        <span className={styles.Heading}>My Daily Planner</span>
        <span>Date : 31-Dec-2024</span>
        <textarea name="message" rows="10" cols="30"></textarea>
      
    </div>
  );
}
export default DailyPlanner;
