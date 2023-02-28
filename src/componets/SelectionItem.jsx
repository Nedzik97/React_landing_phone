import { Link } from "react-router-dom";

export const SelectionItem = ({ text, path, className, icon }) => {
  return (
    <Link className="transition-link" to={path}>
      <button className={className} type="button">
        {icon}
        {text}
      </button>
    </Link>
  );
};
