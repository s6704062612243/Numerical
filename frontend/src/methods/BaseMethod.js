import { evaluate } from "mathjs";

export default class BaseMethod {
  constructor(func) {
    this.func = func;
    this.iterations = [];
    this.result = null;
  }

  evaluate(x) {
    return evaluate(this.func, { x });
  }

  run() {
    throw new Error("run() must be implemented in subclass.");
  }
}
