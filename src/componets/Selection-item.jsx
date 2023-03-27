import { Link } from "react-router-dom";
import styles from "./app/App.module.scss";

export const SelectionItem = ({ text, path, className, icon }) => {
  return (
    <Link className={styles.transitionLink} to={path}>
      <button className={className} type="button">
        {icon}
        {text}
      </button>
    </Link>
  );
};
