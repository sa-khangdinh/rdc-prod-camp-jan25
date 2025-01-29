const fibo = (n) => {
  if (n <= 1) return n;
  return fibo(n - 1) + fibo(n - 2);
};

const num = parseInt(process.argv[2]) || 0;

console.log(`fibo(${num}) is`, fibo(num));
