/**
 * 哈希表+排序
 * @desc 时间复杂度 O(NlogN)  空间复杂度 O(N)
 * @param arr
 * @returns
 */
export function maxChunksToSorted(arr: number[]): number {
  const cnt = new Map<number, number>()
  let res = 0
  const sortedArr = new Array(arr.length).fill(0)
  sortedArr.splice(0, arr.length, ...arr)
  sortedArr.sort((a, b) => a - b)
  for (let i = 0; i < sortedArr.length; i++) {
    const x = arr[i]; const y = sortedArr[i]
    cnt.set(x, (cnt.get(x) || 0) + 1)
    if (cnt.get(x) === 0)
      cnt.delete(x)

    cnt.set(y, (cnt.get(y) || 0) - 1)
    if (cnt.get(y) === 0)
      cnt.delete(y)

    if (cnt.size === 0)
      res++
  }
  return res
}

/**
 * 单调栈
 * @desc 时间复杂度 O(N)  空间复杂度 O(N)
 * @param arr
 * @returns
 */
export function maxChunksToSorted2(arr: number[]): number {
  const stack: number[] = []
  for (const num of arr) {
    if (stack.length === 0 || num >= stack[stack.length - 1]) {
      stack.push(num)
    }
    else {
      const mx = stack.pop()!
      while (stack.length && stack[stack.length - 1] > num)
        stack.pop()

      stack.push(mx)
    }
  }
  return stack.length
}
