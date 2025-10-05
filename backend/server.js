import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import functionRoutes from "./routes/functionRoutes.js";

dotenv.config();
const app = express();

app.use(cors()); // ให้ทุก origin เข้าได้
app.use(express.json());

app.use("/functions", functionRoutes);

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ Connected to MongoDB Atlas"))
  .catch(err => console.error("❌ MongoDB Error:", err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
