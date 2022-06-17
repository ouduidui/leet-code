/**
 * 遍历
 * @desc 时间复杂度 O(N)  空间复杂度 O(1)
 * @param arr
 */
export function duplicateZeros(arr: number[]): void {
  const len = arr.length
  let i = 0
  while (i < len) {
    if (arr[i] === 0) {
      arr.pop()
      arr.splice(i, 0, 0)
      i++
    }
    i++
  }
}
