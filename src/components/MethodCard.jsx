import { Link } from "react-router-dom";

function MethodCard({ title, desc, path }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{desc}</p>
      <Link to={path} className="btn">Go</Link>
    </div>
  );
}

export default MethodCard;
