import mongoose from "mongoose";
import dotenv from "dotenv";
import FunctionModel from "./models/FunctionModel.js";

dotenv.config();

const data = [
  { fx: "x^3 - x - 2", a: 1, b: 2, tol: 0.0001 },
  { fx: "x^4 - 50", a: 2, b: 3, tol: 0.0001 },
  { fx: "x^2 - 4", a: 0, b: 3, tol: 0.001 },
  { fx: "x^3 - 7", a: 1, b: 2, tol: 0.0001 },
  { fx: "cos(x) - x", a: 0, b: 1, tol: 0.00001 },
  { fx: "x^3 - 5x + 1", a: -3, b: 3, tol: 0.001 },
  { fx: "e^x - 3x", a: 0, b: 2, tol: 0.0001 },
  { fx: "x^5 - 2x^3 + x - 1", a: 0, b: 1, tol: 0.0001 },
  { fx: "sin(x) - 0.5", a: 0, b: 2, tol: 0.0001 },
  { fx: "log(x) - 1", a: 1, b: 4, tol: 0.0001 },
];

async function seedDB() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    await FunctionModel.deleteMany({});
    await FunctionModel.insertMany(data);
    console.log("✅ Database seeded!");
    process.exit();
  } catch (err) {
    console.error("❌ Seed error:", err);
    process.exit(1);
  }
}

seedDB();
