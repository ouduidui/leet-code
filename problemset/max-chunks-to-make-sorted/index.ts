/**
 * 贪心算法
 * @desc 时间复杂度 O(N) 空间复杂度 O(1)
 * @param arr
 * @returns
 */
export function maxChunksToSorted(arr: number[]): number {
  let m = 0
  let res = 0
  for (let i = 0; i < arr.length; i++) {
    m = Math.max(m, arr[i])
    if (m === i)
      res++
  }
  return res
}
