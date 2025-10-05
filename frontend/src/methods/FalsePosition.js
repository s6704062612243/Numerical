import BaseMethod from "./BaseMethod";

export default class FalsePosition extends BaseMethod {
  run(a, b, tol) {
    let left = parseFloat(a);
    let right = parseFloat(b);
    let prevMid = left;
    let error = Infinity;
    let count = 0;

    this.iterations = [];

    do {
      const mid = (left * this.evaluate(right) - right * this.evaluate(left)) / (this.evaluate(right) - this.evaluate(left));
      const fmid = this.evaluate(mid);
      error = Math.abs((mid - prevMid) / mid * 100);

      this.iterations.push({ left, right, mid, fmid, error });

      if (this.evaluate(left) * fmid < 0) {
        right = mid;
      } else {
        left = mid;
      }

      prevMid = mid;
      count++;
    } while (error > tol)

    this.result = this.iterations.at(-1)?.mid;
    return { root: this.result, iterations: this.iterations };
  }
}