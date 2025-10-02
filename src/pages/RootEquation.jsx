import MethodCard from "../components/MethodCard";

function Root() {
  return (
    <div>
      <h1>Numerical Methods Playground</h1>
      <div className="card-grid">
        <MethodCard 
          title="Bisection" 
          desc="Find roots using interval halving" 
          path="/Bisection" 
        />
      </div>
    </div>
  );
}

export default Root;
