const fibo = (n) => {
  if (n <= 1) return n;
  return fibo(n - 1) + fibo(n - 2);
}

const num = parseInt(Deno.args[0]) || 0;

console.log(`fibo(${num}) is`, fibo(num));
