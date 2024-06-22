function isUgly(n: number): boolean {
  const prime = [2, 3, 5];
  if (n === 0) return false;
  if (n === 1) return true;
  if (n === prime[0]) return true;
  if (n === prime[1]) return true;
  if (n === prime[2]) return true;
  if (n % prime[0] === 0) return isUgly(n / prime[0]);
  if (n % prime[1] === 0) return isUgly(n / prime[1]);
  if (n % prime[2] === 0) return isUgly(n / prime[2]);
  return false;
}
