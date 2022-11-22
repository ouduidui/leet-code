/**
 * 找规律
 * @desc 时间复杂度 O(a+b)  空间复杂度 O(1)
 * @param n
 * @param a
 * @param b
 * @returns
 */
export function nthMagicalNumber(n: number, a: number, b: number): number {
  const MOD = 1000000007

  const gcd = (a: number, b: number): number => b !== 0 ? gcd(b, a % b) : a
  const lcm = (a: number, b: number): number => Math.floor(a * b / gcd(a, b))

  const c = lcm(a, b)
  const m = Math.floor(c / a) + Math.floor(c / b) - 1
  const r = n % m
  const res = c * Math.floor(n / m) % MOD
  if (r === 0)
    return res

  let addA = a; let addB = b
  for (let i = 0; i < r - 1; ++i) {
    if (addA < addB)
      addA += a

    else
      addB += b
  }
  return (res + Math.min(addA, addB) % MOD) % MOD
}
