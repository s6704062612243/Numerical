import React, { useState } from "react";
import Bisection from "../methods/Bisection";
import FunctionGraph from "../components/FunctionGraph";
import ResultTable from "../components/ResultTable";

export default function BisectionPage() {
  const [func, setFunc] = useState("x^3 - x - 2");
  const [a, setA] = useState(0);
  const [b, setB] = useState(10);
  const [tol, setTol] = useState(0.0001);
  const [result, setResult] = useState(null);
  const [btnHover, setBtnHover] = React.useState(false);

  const handleCalculate = () => {
    const method = new Bisection(func);
    const res = method.run(a, b, tol);
    setResult(res);
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Bisection Method</h2>

      <div style={styles.formGroup}>
        <label style={styles.label}>Function</label>
        <input
          style={styles.input}
          value={func}
          onChange={(e) => setFunc(e.target.value)}
          placeholder="e.g. x^3 - x - 2"
        />
      </div>

      <div style={{ ...styles.formGroup, ...styles.inputInlineGroup }}>
        <div style={styles.inputInline}>
          <label style={styles.label}>a</label>
          <input
            type="number"
            style={styles.input}
            value={a}
            onChange={(e) => setA(e.target.value)}
          />
        </div>
        <div style={styles.inputInline}>
          <label style={styles.label}>b</label>
          <input
            type="number"
            style={styles.input}
            value={b}
            onChange={(e) => setB(e.target.value)}
          />
        </div>
      </div>

      <div style={styles.formGroup}>
        <label style={styles.label}>Error tolerance (%)</label>
        <input
          type="number"
          style={styles.input}
          value={tol}
          onChange={(e) => setTol(e.target.value)}
        />
      </div>

      <button
        style={btnHover ? { ...styles.button, ...styles.buttonHover } : styles.button}
        onMouseEnter={() => setBtnHover(true)}
        onMouseLeave={() => setBtnHover(false)}
        onClick={handleCalculate}
      >
        Calculate
      </button>

      {result && (
        <div style={styles.result}>
          Approximate Root: <span>{result.root}</span>
          <ResultTable iterations={result.iterations} />
          <FunctionGraph func={func} result={result.iterations} />
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    width: "100%",
    maxWidth: "1200px",
    margin: "30px auto",
    padding: 20,
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    backgroundColor: "#f9f9f9",
    borderRadius: 8,
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
  },
  header: {
    textAlign: "center",
    marginBottom: 20,
    color: "#222",
  },
  formGroup: {
    marginBottom: 15,
  },
  label: {
    fontWeight: "600",
    display: "block",
    marginBottom: 6,
    color: "#444",
  },
  input: {
    width: "100%",
    padding: "8px 12px",
    fontSize: 16,
    borderRadius: 4,
    border: "1px solid #ccc",
    boxSizing: "border-box",
  },
  inputInlineGroup: {
    display: "flex",
    gap: 15,
  },
  inputInline: {
    flex: 1,
  },
  button: {
    width: "100%",
    padding: "12px 0",
    marginTop: 15,
    fontSize: 18,
    fontWeight: "700",
    color: "white",
    backgroundColor: "#007bff",
    border: "none",
    borderRadius: 6,
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },
  buttonHover: {
    backgroundColor: "#0056b3",
  },
  result: {
    marginTop: 25,
    padding: 20,
    backgroundColor: "white",
    borderRadius: 6,
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
    fontSize: 18,
    fontWeight: "600",
    color: "#222",
  },
};
