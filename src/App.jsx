import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Bisection from "./pages/Bisection";
import NewtonRaphson from "./pages/NewtonRaphson";
<<<<<<< HEAD
import RootEquation from "./pages/RootEquation";
=======
>>>>>>> 77e00ca386d8890fe9baa518234de2c05fd16fad
import Secant from "./pages/Secant";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
<<<<<<< HEAD
          <Route path="/RootEquation" element={<RootEquation />} />
=======
>>>>>>> 77e00ca386d8890fe9baa518234de2c05fd16fad
          <Route path="/bisection" element={<Bisection />} />
          <Route path="/newton" element={<NewtonRaphson />} />
          <Route path="/secant" element={<Secant />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
