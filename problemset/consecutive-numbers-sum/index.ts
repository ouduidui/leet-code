/**
 * 数学
 * @desc 时间复杂度 O(√N)  空间复杂度 O(1)
 * @param n
 * @returns
 */
export function consecutiveNumbersSum(n: number): number {
  let ans = 0
  const bound = 2 * n

  // 如果 k 是奇数，则当 n 可以被 k 整除时，正整数 n 可以表示成 k 个连续正整数之和
  // 如果 k 是偶数，则当 n 不可以被 k 整除且 2n 可以被 k 整除时，正整数 n 可以表示成 k 个连续正整数之和
  const isKConsecutive = (n: number, k: number): boolean =>
    k % 2 === 1
      ? (n % k === 0)
      : (n % k !== 0 && 2 * n % k === 0)

  for (let k = 1; k * (k + 1) <= bound; k++)
    if (isKConsecutive(n, k)) ans++

  return ans
}
