/**
 * 排序 + 哈希表
 * @desc 时间复杂度 O(N + logN)  空间复杂度 O(N)
 * @param arr
 * @returns
 */
export function arrayRankTransform(arr: number[]): number[] {
  const sortedArr = [...arr].sort((a, b) => a - b)
  const ranks = new Map<number, number>()
  const ans = new Array(arr.length).fill(0)
  for (const a of sortedArr) {
    if (!ranks.has(a))
      ranks.set(a, ranks.size + 1)
  }
  for (let i = 0; i < arr.length; i++)
    ans[i] = ranks.get(arr[i])

  return ans
}
