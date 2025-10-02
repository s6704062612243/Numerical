import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="sidebar">
      <h2 className="sidebar-title">Numerical Methods</h2>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/RootEquation">Root of Equation</Link>
      </nav>
    </aside>
  );
}

export default Sidebar;
