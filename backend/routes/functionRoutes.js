import express from "express";
import FunctionModel from "../models/FunctionModel.js";

const router = express.Router();

// ✅ สุ่ม f(x) พร้อมค่าพารามิเตอร์
router.get("/random", async (req, res) => {
  const funcs = await FunctionModel.find();
  const randomFunc = funcs[Math.floor(Math.random() * funcs.length)];
  res.json(randomFunc);
});

export default router;
