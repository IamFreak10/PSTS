// 50. Pow(x, n)
function myPow(x: number, n: number): number {
  if (n == 0) return 1;
  if (n < 0) {
    return 1 / myPow(x, -n);
  }
  if (n % 2 === 0) {
    let half = myPow(x, n / 2);
    return half * half;
  } else {
    return x * myPow(x, n - 1);
  }
}
console.log(myPow(4, -2));
