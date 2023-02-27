import { Link } from "react-router-dom";
export const Footer = () => {
  return (
    <footer className="main-footer">
      <nav className="navigation-menu">
        <Link className="navigation-link" to="#">
          О проекте
        </Link>
        <Link className="navigation-link" to="#">
          Подержка
        </Link>
        <Link className="navigation-link" to="#">
          Подержка
        </Link>
      </nav>
    </footer>
  );
};
