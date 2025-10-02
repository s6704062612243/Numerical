// FunctionGraph.jsx
import React from "react";
import Plot from "react-plotly.js";
import { evaluate } from "mathjs";

export default function FunctionGraph({ func, result }) {
  const xs = [];
  const step = 0.05;

  // หา min/max ของค่า mid เพื่อกำหนดช่วง x
  const mids = result.map((r) => r.mid);
  const minX = Math.min(...mids) - 1;
  const maxX = Math.max(...mids) + 1;

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

  // จุด iterations (mid, f(mid))
  const points = result.map(({ mid, fmid }) => ({
    x: mid,
    y: fmid,
  }));

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
          name: "Iterations (xk)",
          marker: { color: "red", size: 8 },
          hovertemplate: "x: %{x:.6f}<br>f(x): %{y:.6f}<extra></extra>",
        },
      ]}
      layout={{
        title: "Graph",
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
