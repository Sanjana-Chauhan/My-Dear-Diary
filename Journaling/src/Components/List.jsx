import styles from "./OverView.module.css";
function List({ Header, content }) {
  return (
    <ul className={styles.OverviewList}>
      <li className={styles.ListItemHeaders}>
        <span>{Header[0]}</span>
        <span>{Header[1]}</span>
        <span>{Header[2]}</span>
      </li>
      {content.map((items) => (
        <li className={styles.ListItem}>
          <span>
            <input type="checkbox" checked={items.check?true:false}/>
            {items.desc}
          </span>
          <span>{items.Category}</span>
          <span>{items.Date}</span>
        </li>
      ))}
    </ul>
  );
}
export default List;
