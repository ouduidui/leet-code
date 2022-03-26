/**
 * 类选择排序
 * @desc 时间复杂度 O(N^2)  空间复杂度 O(1)
 * @param arr
 */
export function pancakeSort(arr: number[]): number[] {
  const ret: number[] = []
  for (let n = arr.length; n > 1; n--) {
    let index = 0
    // 将index定位到[0, n)区间中最大值的下标
    for (let i = 1; i < n; i++)
      if (arr[i] >= arr[index]) index = i

    // 如果index刚好是[0, n)区间最后一个元素，则此处无需翻转
    if (index === n - 1) continue

    // 将index元素翻转到第一个
    reverse(arr, index)
    // 然后将index元素翻转到[0, n)区间最后一个
    reverse(arr, n - 1)

    ret.push(index + 1, n)
  }

  return ret

  // 对数组arr的[0,end]区间元素进行翻转
  function reverse(arr: number[], end: number) {
    for (let i = 0, j = end; i < j; i++, j--)
      [arr[i], arr[j]] = [arr[j], arr[i]]
  }
}
