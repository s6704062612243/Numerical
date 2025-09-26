import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Bisection from "./pages/Bisection";
import NewtonRaphson from "./pages/NewtonRaphson";
import Secant from "./pages/Secant";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bisection" element={<Bisection />} />
          <Route path="/newton" element={<NewtonRaphson />} />
          <Route path="/secant" element={<Secant />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
