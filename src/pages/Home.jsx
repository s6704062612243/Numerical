import MethodCard from "../components/MethodCard";

function Home() {
  return (
    <div>
      <h1>Numerical Methods Playground</h1>
      <div className="card-grid">
        <MethodCard 
<<<<<<< HEAD
          title="Root of Equation" 
          desc="Find roots using interval halving" 
          path="/RootEquation" 
=======
          title="Bisection Method" 
          desc="Find roots using interval halving" 
          path="/bisection" 
        />
        <MethodCard 
          title="Newton-Raphson" 
          desc="Root finding with derivatives" 
          path="/newton" 
        />
        <MethodCard 
          title="Secant Method" 
          desc="Approximate roots without derivatives" 
          path="/secant" 
>>>>>>> 77e00ca386d8890fe9baa518234de2c05fd16fad
        />
      </div>
    </div>
  );
}

export default Home;
