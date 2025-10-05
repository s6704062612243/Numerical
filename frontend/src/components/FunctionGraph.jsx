// components/FunctionGraph.jsx
import React from "react";
import Plot from "react-plotly.js";
import { evaluate } from "mathjs";

export default function FunctionGraph({ func, result }) {
  if (!result || result.length === 0) return null;

  const xs = [];
  const step = 0.05;

  // ดึงค่าที่ใช้ในการ plot (รองรับทั้ง mid/fmid และ x/fx)
  const points = result.map((r) => ({
    x: r.mid ?? r.x,
    y: r.fmid ?? r.fx,
  }));

  // หา min/max ของค่า x เพื่อกำหนดช่วงกราฟ
  const xValues = points.map((p) => p.x);
  const minX = Math.min(...xValues) - 1;
  const maxX = Math.max(...xValues) + 1;

  // สร้างจุด x สำหรับ plot เส้น f(x)
  for (let x = minX; x <= maxX; x += step) {
    xs.push(x);
  }

  // คำนวณค่า y = f(x)
  const ys = xs.map((x) => {
    try {
      return evaluate(func, { x });
    } catch {
      return null;
    }
  });

  return (
    <Plot
      data={[
        {
          x: xs,
          y: ys,
          type: "scatter",
          mode: "lines",
          name: "f(x)",
          line: { color: "blue" },
          hovertemplate: "x: %{x:.4f}<br>y: %{y:.6f}<extra></extra>",
        },
        {
          x: points.map((p) => p.x),
          y: points.map((p) => p.y),
          type: "scatter",
          mode: "markers",
          name: "Iterations (xₖ)",
          marker: { color: "red", size: 8 },
          hovertemplate: "x: %{x:.6f}<br>f(x): %{y:.6f}<extra></extra>",
        },
      ]}
      layout={{
        title: "Graph of f(x)",
        xaxis: { title: "x" },
        yaxis: { title: "f(x)" },
        dragmode: "pan",
      }}
      config={{
        responsive: true,
        scrollZoom: true,
        displaylogo: false,
      }}
      style={{ width: "100%", height: "500px" }}
    />
  );
}
