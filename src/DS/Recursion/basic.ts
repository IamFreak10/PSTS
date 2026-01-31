class RecursionDSA {
  factorial(n: number): number {
    if (n === 0) {
      return 1;
    }
    return n * this.factorial(n - 1);
  }
  fibonacci(n: number): number {
    if (n === 0) return 0;
    if (n === 1) return 1;
    return this.fibonacci(n - 1) + this.fibonacci(n - 2);
  }
  sumArray(arr: number[], index: number = 0): number {
    if (index >= arr.length) {
      return 0;
    }
    return arr[index]??0 + this.sumArray(arr, index + 1);
  }
}

const rec = new RecursionDSA();
console.log(rec.factorial(5));
console.log(rec.fibonacci(6));
