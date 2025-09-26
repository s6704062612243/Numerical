import MethodCard from "../components/MethodCard";

function Home() {
  return (
    <div>
      <h1>Numerical Methods Playground</h1>
      <div className="card-grid">
        <MethodCard 
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
        />
      </div>
    </div>
  );
}

export default Home;
