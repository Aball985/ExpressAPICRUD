import { Link } from "react-router-dom";
import styles from "./Navbar.module.scss";
export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <Link to="/" className={styles["navbar-logo"]}>
        Digisoul
      </Link>
      <div className={styles["navbar-links"]}>
        <li className={styles["navbar-item"]}>
          <Link className={styles["navbar-link"]} to={"/tutorials"}>
            Tutorials
          </Link>
        </li>
        <li className={styles["navbar-item"]}>
          <Link className={styles["navbar-link"]} to={"/add"}>
            Add
          </Link>
        </li>
      </div>
    </div>
  );
}
