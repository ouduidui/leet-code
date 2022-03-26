/**
 * 动态规划
 * @desc 时间复杂度 O(N^4)  空间复杂度 O(N^3)
 * @param s1
 * @param s2
 */
export function isScramble(s1: string, s2: string): boolean {
  const len = s1.length
  const memo: number[][][] = new Array(len)
    .fill([])
    .map(() => new Array(len).fill([]).map(() => new Array(len + 1).fill(0)))
  return dfs(0, 0, len, s1, s2, memo)

  function dfs(
    i1: number,
    i2: number,
    len: number,
    s1: string,
    s2: string,
    memo: number[][][],
  ): boolean {
    if (memo[i1][i2][len] !== 0)
      return memo[i1][i2][len] === 1

    // 判断两个子串是否相等
    if (s1.slice(i1, i1 + len) === s2.slice(i2, i2 + len)) {
      memo[i1][i2][len] = 1
      return true
    }

    // 判断是否存在字符 c 在两个子串中出现的次数不同
    if (!checkIfSimilar(i1, i2, len, s1, s2)) {
      memo[i1][i2][len] = -1
      return false
    }

    // 枚举分割位置
    for (let i = 1; i < len; i++) {
      // 不交换的情况
      if (
        dfs(i1, i2, i, s1, s2, memo)
        && dfs(i1 + i, i2 + i, len - i, s1, s2, memo)
      ) {
        memo[i1][i2][len] = 1
        return true
      }

      // 交换的情况
      if (
        dfs(i1, i2 + len - i, i, s1, s2, memo)
        && dfs(i1 + i, i2, len - i, s1, s2, memo)
      ) {
        memo[i1][i2][len] = 1
        return true
      }
    }

    memo[i1][i2][len] = -1
    return false
  }

  function checkIfSimilar(
    i1: number,
    i2: number,
    len: number,
    s1: string,
    s2: string,
  ): boolean {
    const freq = new Map<string, number>()
    for (let i = i1; i < i1 + len; i++) {
      const c = s1[i]
      freq.set(c, (freq.get(c) || 0) + 1)
    }
    for (let i = i2; i < i2 + len; i++) {
      const c = s2[i]
      freq.set(c, (freq.get(c) || 0) - 1)
    }
    for (const value of freq.values()) {
      if (value !== 0)
        return false
    }
    return true
  }
}
