import MethodCard from "../components/MethodCard";

function Home() {
  return (
    <div>
      <h1>Numerical Methods Playground</h1>
      <div className="card-grid">
        <MethodCard 
          title="Root of Equation" 
          desc="Find roots using interval halving" 
          path="/RootEquation" 
        />
      </div>
    </div>
  );
}

export default Home;
