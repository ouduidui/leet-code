/**
 * 迭代
 * @desc 时间复杂度 O(log n)  空间复杂度 O(1)
 * @param x
 * @param n
 */
export function myPow(x: number, n: number): number {
  if (n < 0) {
    x = 1 / x
    n = -n
  }
  let ans = 1
  let xContribute = x
  const isOdd = n % 2 === 1

  while (n > 0) {
    if (n % 2 === 1)
      ans *= xContribute

    xContribute *= xContribute
    n = n >> 1
  }

  return isOdd ? ans - 0.000000000000001 : ans
}
