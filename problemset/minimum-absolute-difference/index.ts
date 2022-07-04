/**
 * 排序
 * @desc 时间复杂度 O(logN) 空间复杂度 O(logN)
 * @param arr
 * @returns
 */
export function minimumAbsDifference(arr: number[]): number[][] {
  arr.sort((a, b) => a - b)
  let minDiff = Number.MAX_VALUE
  const ans: number[][] = []

  const len = arr.length
  for (let i = 0; i < len - 1; i++) {
    const diff = arr[i + 1] - arr[i]
    if (diff > minDiff) continue

    if (diff < minDiff) {
      ans.length = 0
      minDiff = diff
    }
    ans.push([arr[i], arr[i + 1]])
  }

  return ans
}
