import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Bisection from "./pages/Bisection";
import RootEquation from "./pages/RootEquation";
import FalsePosition from "./pages/FalsePosition";
import Graphical from "./pages/Graphical";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/RootEquation" element={<RootEquation />} />
          <Route path="/graphical" element={<Graphical />} />
          <Route path="/bisection" element={<Bisection />} />
          <Route path="/falseposition" element={<FalsePosition />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
