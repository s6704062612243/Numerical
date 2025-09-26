import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="sidebar">
      <h2 className="sidebar-title">Numerical Methods</h2>
      <nav>
        <Link to="/">🏠 Home</Link>
        <Link to="/bisection">➗ Bisection</Link>
        <Link to="/newton">📐 Newton-Raphson</Link>
        <Link to="/secant">📊 Secant</Link>
      </nav>
    </aside>
  );
}

export default Sidebar;
