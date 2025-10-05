import { useState } from "react";

function RandomFunction({ onSelect }) {
  const [equation, setEquation] = useState("");

  const fetchRandom = async () => {
    const res = await fetch("http://localhost:5000/functions/random");
    const data = await res.json();
    setEquation(data.equation);
    onSelect(data.equation); // ส่งค่าไปใช้ใน Bisection
  };

  return (
    <div>
      <button onClick={fetchRandom}>🎲 สุ่มสมการ</button>
      {equation && <p>✅ สมการที่สุ่มได้: <b>{equation}</b></p>}
    </div>
  );
}

export default RandomFunction;
