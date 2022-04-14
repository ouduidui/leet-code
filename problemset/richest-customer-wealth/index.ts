/**
 * 遍历
 * @desc 时间复杂度 O(MN)  空间复杂度 O(1)
 * @param accounts
 * @returns
 */
export function maximumWealth(accounts: number[][]): number {
  let result = 0

  for (const account of accounts) {
    let sum = 0
    for (const count of account)
      sum += count

    result = Math.max(result, sum)
  }
  return result
}
