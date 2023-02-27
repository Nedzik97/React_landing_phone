import { Link } from "react-router-dom";

export const RelationshipChoice = ({
  text,
  path,
  className,
  name,
  value,
  icon,
}) => {
  return (
    <Link className="transition-link" to={path}>
      <button className={className} type="button" name={name} value={value}>
        {text}
        {icon}
      </button>
    </Link>
  );
};
