import React, { useState } from "react";
import FunctionGraph from "../components/FunctionGraph";
import ResultTable from "../components/ResultTable";
import FalsePosition from "../methods/FalsePosition";

export default function FalsePositionPage() {
  const [func, setFunc] = useState("");
    const [a, setA] = useState("");
    const [b, setB] = useState("");
    const [tol, setTol] = useState("");
    const [result, setResult] = useState(null);
    const [btnHover, setBtnHover] = useState(false);
  
    // ฟังก์ชันสุ่มสมการจาก backend
    const fetchRandom = async () => {
    try {
      const res = await fetch("http://localhost:5000/functions/random");
      const data = await res.json();
  
      setFunc(data.fx || "");
      setA(data.a !== undefined ? data.a : "");  // ป้องกัน undefined
      setB(data.b !== undefined ? data.b : "");
      setTol(data.tol !== undefined ? data.tol : "");
    } catch (err) {
      console.error("Fetch random failed:", err);
    }
  };
  
  
    // ปุ่มเคลียร์ค่า
    const handleClear = () => {
      setFunc("");
      setA("");
      setB("");
      setTol("");
      setResult(null);
    };
  
    // ตรวจสอบว่ากรอกค่าครบหรือยัง
    const isValidInput = () => {
      return func.trim() !== "" && a !== "" && b !== "" && tol !== "";
    };
  
    // คำนวณ Bisection
    const handleCalculate = () => {
      if (!isValidInput()) return alert("กรุณากรอกข้อมูลให้ครบก่อนคำนวณ!");
      try {
        const method = new FalsePosition(func);
        const res = method.run(Number(a), Number(b), Number(tol));
        setResult(res);
      } catch (err) {
        alert("เกิดข้อผิดพลาดในการคำนวณ");
        console.error(err);
      }
    };
  
    return (
      <div style={styles.container}>
        <h2 style={styles.header}>False-Position Method</h2>
  
        {/* ฟังก์ชัน + ปุ่มสุ่ม/เคลียร์ */}
        <div style={{ ...styles.formGroup, display: "flex", alignItems: "center", gap: "10px" }}>
          <div style={styles.inputInline}>
            <label style={styles.label}>Equation f(x)</label>
            <input
              style={{ ...styles.input, flex: 1 }}
              value={func}
              onChange={(e) => setFunc(e.target.value)}
              placeholder="เช่น x^3 - x - 2"
            />
          </div>
          <button onClick={fetchRandom} style={styles.randomBtn}>สุ่มค่า</button>
          <button onClick={handleClear} style={styles.clearBtn}>เคลียร์ค่า</button>
        </div>
  
        {/* X start, X end */}
        <div style={{ ...styles.formGroup, ...styles.inputInlineGroup }}>
          <div style={styles.inputInline}>
            <label style={styles.label}>x start</label>
            <input type="number" style={styles.input} value={a} onChange={(e) => setA(e.target.value)} />
          </div>
          <div style={styles.inputInline}>
            <label style={styles.label}>x end</label>
            <input type="number" style={styles.input} value={b} onChange={(e) => setB(e.target.value)} />
          </div>
        </div>
  
        {/* Error tolerance */}
        <div style={styles.formGroup}>
          <label style={styles.label}>Error tolerance (%)</label>
          <input
            type="number"
            style={styles.input}
            value={tol}
            onChange={(e) => setTol(e.target.value)}
          />
        </div>
  
        {/* ปุ่มคำนวณ */}
        <button
          style={
            isValidInput()
              ? btnHover
                ? { ...styles.button, ...styles.buttonHover }
                : styles.button
              : { ...styles.button, ...styles.buttonDisabled }
          }
          onMouseEnter={() => setBtnHover(true)}
          onMouseLeave={() => setBtnHover(false)}
          onClick={handleCalculate}
          disabled={!isValidInput()}
        >
          Calculate
        </button>
  
        {/* แสดงผลลัพธ์ */}
        {result && (
          <div style={styles.result}>
            <p><b>Approximate Root:</b> {result.root}</p>
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
      maxWidth: "1100px",
      margin: "30px auto",
      padding: "25px",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      backgroundColor: "#f9f9f9",
      borderRadius: 10,
      boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
    },
    header: {
      textAlign: "center",
      fontSize: 26,
      fontWeight: "700",
      color: "#222",
      marginBottom: 25,
    },
    formGroup: {
      marginBottom: 20,
    },
    label: {
      fontWeight: "600",
      display: "block",
      marginBottom: 6,
      color: "#444",
    },
    input: {
      width: "100%",
      padding: "10px 12px",
      fontSize: 16,
      borderRadius: 6,
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
    randomBtn: {
      padding: "10px 18px",
      fontSize: "15px",
      fontWeight: "600",
      color: "white",
      background: "linear-gradient(135deg, #ff6a00, #ee0979)",
      border: "none",
      borderRadius: "6px",
      cursor: "pointer",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
      transition: "all 0.25s ease",
    },
    clearBtn: {
      padding: "10px 15px",
      fontSize: "15px",
      fontWeight: "600",
      color: "#333",
      background: "#fff",
      border: "1px solid #ccc",
      borderRadius: "6px",
      cursor: "pointer",
      transition: "all 0.2s ease",
    },
    button: {
      width: "100%",
      padding: "12px 0",
      marginTop: 10,
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
    buttonDisabled: {
      backgroundColor: "#ccc",
      color: "#666",
      cursor: "not-allowed",
    },
    result: {
      marginTop: 25,
      padding: 20,
      backgroundColor: "white",
      borderRadius: 8,
      boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
    },
  };
  