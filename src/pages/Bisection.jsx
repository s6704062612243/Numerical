<<<<<<< HEAD
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
=======
import { useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";

// ต้อง register chart.js components
ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend
);

function Bisection() {
  const [func, setFunc] = useState("x**3 - x - 2"); 
  const [a, setA] = useState(1);
  const [b, setB] = useState(2);
  const [tol, setTol] = useState(0.001);
  const [maxIter, setMaxIter] = useState(20);
  const [result, setResult] = useState([]);
  const [approxRoot, setApproxRoot] = useState(null);

  const calculate = () => {
    try {
      const f = (x) => eval(func);
      let left = parseFloat(a);
      let right = parseFloat(b);
      let iterations = [];
      let mid, fmid;

      let count = 0;
      while (Math.abs(right - left) > tol && count < maxIter) {
        mid = (left + right) / 2;
        fmid = f(mid);
        iterations.push({ left, right, mid, fmid, error: Math.abs(right - left) });

        if (f(left) * fmid < 0) right = mid;
        else left = mid;

        count++;
      }
      setResult(iterations);

      if (iterations.length > 0) {
        setApproxRoot(iterations[iterations.length - 1].mid);
      }
    } catch (err) {
      alert("Error evaluating function. Example: x**3 - x - 2");
    }
  };

  return (
    <div>
      <h2>Bisection Method</h2>

      {/* Input Section */}
      <div style={styles.inputBox}>
        <div style={styles.row}>
          <label>f(x):</label>
          <input value={func} onChange={(e) => setFunc(e.target.value)} style={styles.input}/>
        </div>

        <div style={styles.row}>
          <label>a:</label>
          <input type="number" value={a} onChange={(e) => setA(e.target.value)} style={styles.input}/>
          
          <label>b:</label>
          <input type="number" value={b} onChange={(e) => setB(e.target.value)} style={styles.input}/>
        </div>

        <div style={styles.row}>
          <label>tol:</label>
          <input type="number" value={tol} onChange={(e) => setTol(e.target.value)} style={styles.input}/>
          
          <label>max iteration:</label>
          <input type="number" value={maxIter} onChange={(e) => setMaxIter(e.target.value)} style={styles.input}/>
        </div>

        <button onClick={calculate} style={styles.button}>Calculate</button>
      </div>

      {/* ตารางผลลัพธ์ */}
      {result.length > 0 && (
        <div style={{ marginTop: "20px" }}>
          <table style={styles.table}>
            <thead>
              <tr>
                <th>Iteration</th>
                <th>Left (a)</th>
                <th>Right (b)</th>
                <th>Mid</th>
                <th>f(Mid)</th>
                <th>Error |b-a|</th>
              </tr>
            </thead>
            <tbody>
              {result.map((r, i) => (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{r.left.toFixed(6)}</td>
                  <td>{r.right.toFixed(6)}</td>
                  <td>{r.mid.toFixed(6)}</td>
                  <td>{r.fmid.toFixed(6)}</td>
                  <td>{r.error.toExponential(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* คำตอบประมาณ */}
      {approxRoot !== null && (
        <div style={{ marginTop: "20px", fontWeight: "bold", fontSize: "18px" }}>
          ✅ Approximate Root ≈ {approxRoot.toFixed(6)}
        </div>
      )}

      {/* กราฟ */}
      {result.length > 0 && (
        <div style={{ marginTop: "30px" }}>
          <Line
            data={{
              labels: result.map((_, i) => i + 1),
              datasets: [
                {
                  label: "Midpoint",
                  data: result.map((r) => r.mid),
                  borderColor: "blue",
                  backgroundColor: "rgba(0,123,255,0.3)",
                  tension: 0.2,
                  pointRadius: 4,
                  pointBackgroundColor: "blue"
                },
              ],
            }}
            options={{
              responsive: true,
              plugins: { legend: { display: true } },
              scales: {
                x: { title: { display: true, text: "Iteration" } },
                y: { title: { display: true, text: "Midpoint Value" } },
              },
            }}
          />
>>>>>>> 77e00ca386d8890fe9baa518234de2c05fd16fad
        </div>
      )}
    </div>
  );
}

<<<<<<< HEAD
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
=======
/* ---------- CSS Styles ---------- */
const styles = {
  inputBox: {
    border: "1px solid #ddd",
    borderRadius: "10px",
    padding: "15px",
    maxWidth: "500px",
    background: "#f9fafc",
    marginBottom: "20px"
  },
  row: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "10px"
  },
  input: {
    flex: "1",
    padding: "6px 10px",
    borderRadius: "6px",
    border: "1px solid #ccc"
  },
  button: {
    marginTop: "10px",
    padding: "8px 16px",
    background: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer"
  },
  table: {
    borderCollapse: "collapse",
    width: "100%",
    background: "white",
    boxShadow: "0 2px 8px rgba(0,0,0,0.05)"
  },
  th: {
    background: "#007bff",
    color: "white",
    padding: "10px"
  },
  td: {
    padding: "8px",
    textAlign: "center"
  }
};

export default Bisection;
>>>>>>> 77e00ca386d8890fe9baa518234de2c05fd16fad
