import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="sidebar">
      <h2 className="sidebar-title">Numerical Methods</h2>
      <nav>
<<<<<<< HEAD
        <Link to="/">Home</Link>
        <Link to="/RootEquation">Root of Equation</Link>
=======
        <Link to="/">🏠 Home</Link>
        <Link to="/bisection">➗ Bisection</Link>
        <Link to="/newton">📐 Newton-Raphson</Link>
        <Link to="/secant">📊 Secant</Link>
>>>>>>> 77e00ca386d8890fe9baa518234de2c05fd16fad
      </nav>
    </aside>
  );
}

export default Sidebar;
