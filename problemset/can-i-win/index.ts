/**
 * 记忆化搜索 + 状态压缩
 * @desc 时间复杂度 O(2^N*N)  空间复杂度 O(2^N)
 * @param maxChoosableInteger
 * @param desiredTotal
 * @returns
 */
export function canIWin(maxChoosableInteger: number, desiredTotal: number): boolean {
  return (1 + maxChoosableInteger) * maxChoosableInteger / 2 < desiredTotal
    ? false
    : dfs(maxChoosableInteger, 0, desiredTotal, 0)

  function dfs(
    maxChoosableInteger: number,
    usedNumbers: number,
    desiredTotal: number,
    currentTotal: number,
    memo = new Map<number, boolean>(),
  ): boolean {
    if (!memo.has(usedNumbers)) {
      let res = false
      for (let i = 0; i < maxChoosableInteger; i++) {
        if (
          ((usedNumbers >> i) & 1) === 0
            && (
              i + 1 + currentTotal >= desiredTotal
            || !dfs(maxChoosableInteger, usedNumbers | (1 << i), desiredTotal, currentTotal + i + 1, memo)
            )
        ) {
          res = true
          break
        }
      }
      memo.set(usedNumbers, res)
    }
    return memo.get(usedNumbers)!
  }
}
