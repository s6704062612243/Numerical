import mongoose from "mongoose";

const FunctionSchema = new mongoose.Schema({
  fx: { type: String, required: true },
  a: { type: Number, required: true },
  b: { type: Number, required: true },
  tol: { type: Number, required: true },
});

export default mongoose.model("Function", FunctionSchema);
