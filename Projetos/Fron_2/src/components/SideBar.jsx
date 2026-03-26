import dev from "../assets/developer.png";
import styles from "./SideBar.module.css";

function SideBar() {
  return (
    <aside className={styles.sidebar}>
      <img className={styles.cover} src={dev} />
      <div className={styles.profile}>
        <strong>Ipog</strong>
        <span>Desenvolvimento Front-End 2</span>
      </div>
    </aside>
  );
}

export default SideBar;
