import BaseMethod from "./BaseMethod";

export default class Graphical extends BaseMethod {
  run(a, b, tol) {
    let left = parseFloat(a);
    let right = parseFloat(b);
    let scale = 1;
    let error = Infinity;
    this.iterations = [];
    do {
      let stop = false;

      for (let x = left; x < right; x += scale) {
        const fx = this.evaluate(x);
        const fxNext = this.evaluate(x + scale);
        error = Math.abs(fx) * 100;

        this.iterations.push({ x, fx, error });
        if (error <= tol) {
          stop = true;
          break;
        }
        if (stop) break;
        if (fx * fxNext < 0) {
          this.iterations.push({ x: x + scale, fx: fxNext, error });
          left = x;
          right = x + scale;
          scale *= 0.1;
          left += scale;
          break;
        }
        
      }
      
    } while (error > tol);
    this.result = this.iterations.at(-1)?.x;
    return { root: this.result, iterations: this.iterations };
  }
}
