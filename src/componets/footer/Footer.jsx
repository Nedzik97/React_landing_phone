import { Link } from "react-router-dom";
import styles from "./Footer.module.scss";

export const Footer = () => {
  return (
    <footer className={styles.mainFooter}>
      <nav className={styles.navigationMenu}>
        <Link className={styles.navigationLink} to="#">
          О проекте
        </Link>
        <Link className={styles.navigationLink} to="#">
          Поддержка
        </Link>
        <Link className={styles.navigationLink} to="#">
          Поддержка
        </Link>
      </nav>
    </footer>
  );
};
