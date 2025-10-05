import MethodCard from "../components/MethodCard";

function Root() {
  return (
    <div>
      <h1>Numerical Methods Playground</h1>
      <div className="card-grid">
        <MethodCard 
          title="Graphical Method" 
          desc="Find roots using interval halving" 
          path="/graphical" 
        />
        <MethodCard 
          title="Bisection Method" 
          desc="Find roots using interval halving" 
          path="/bisection" 
        />
        <MethodCard 
          title="False-Position Method" 
          desc="Find roots using interval halving" 
          path="/falseposition" 
        />
      </div>
    </div>
  );
}

export default Root;
