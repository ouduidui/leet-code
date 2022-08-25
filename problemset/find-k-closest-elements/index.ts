/**
 * 排序
 * @desc 时间复杂度 O(NlogN)  空间复杂度 O(logN)
 * @param arr
 * @param k
 * @param x
 * @returns
 */
export function findClosestElements(arr: number[], k: number, x: number): number[] {
  return [...arr]
    .sort((a, b) => Math.abs(a - x) !== Math.abs(b - x) ? Math.abs(a - x) - Math.abs(b - x) : a - b)
    .slice(0, k)
    .sort((a, b) => a - b)
}

/**
 * 二分查找 + 双指针
 * @desc 时间复杂度 O(logN+K)  空间复杂度 O(1)
 * @param arr
 * @param k
 * @param x
 * @returns
 */
export function findClosestElements2(arr: number[], k: number, x: number): number[] {
  let right = binarySearch(arr, x)
  let left = right - 1
  while (k-- > 0) {
    if (left < 0)
      right++
    else if (right >= arr.length)
      left--
    else if (x - arr[left] <= arr[right] - x)
      left--
    else
      right++
  }
  const ans = []
  for (let i = left + 1; i < right; i++)
    ans.push(arr[i])

  return ans

  function binarySearch(arr: number[], x: number) {
    let low = 0; let high = arr.length - 1
    while (low < high) {
      const mid = low + Math.floor((high - low) / 2)
      if (arr[mid] >= x)
        high = mid

      else
        low = mid + 1
    }
    return low
  }
}
