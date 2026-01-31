//* 50. Pow(x, n)
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
// console.log(myPow(4, -2));

//*  509. Fibonacci Number

function fib(n: number): number {
  let map: Map<number, number> = new Map();
  if (n === 0) return 0;
  if (n === 1) return 1;
  if (map.has(n)) return map.get(n)!;
  const res = fib(n - 1) + fib(n - 2);
  map.set(n, res);
  return res;
}
//*344 Reverse String

let s = ['h', 'e', 'l', 'l', 'o'];

function reverseString(s: string[]): void {
  let l: number = 0;
  let r: number = s.length - 1;

  while (l < r) {
    let c = s[l];
    s[l] = s[r];
    s[r] = c;
    l++;
    r--;
  }
}
reverseString(s);
console.log(s);
