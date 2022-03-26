/**
 * 数学
 * @desc 时间复杂度 O(N^2 * logN)  空间复杂度 O(1)
 * @param n
 */
export function simplifiedFractions(n: number): string[] {
  const ans: string[] = []
  // 分母
  for (let i = 2; i <= n; i++) {
    // 分子
    for (let j = 1; j < i; j++) {
      // 如果最大公约数为1的话
      if (greatestCommonDivisor(j, i) === 1)
        ans.push(`${j}/${i}`)
    }
  }

  return ans

  /**
   * 求最大公约数
   * @desc 用较小数除较大数，再用出现的余数（第一余数）去除除数，再用出现的余数（第二余数）去除第一余数，如此反复，直到最后余数是0为止。 如果是求两个数的最大公约数，那么最后的除数就是这两个数的最大公约数
   * @param numerator 分子
   * @param denominator 分母
   */
  function greatestCommonDivisor(
    numerator: number,
    denominator: number,
  ): number {
    if (denominator === 0)
      return numerator

    return greatestCommonDivisor(denominator, numerator % denominator)
  }
}
