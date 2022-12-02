/**
 * 模拟
 * @desc 时间复杂度 O(N) 空间复杂度 O(1)
 * @param boxes
 * @returns
 */
export function minOperations(boxes: string): number[] {
  let left = boxes[0].charCodeAt(0) - '0'.charCodeAt(0)
  let right = 0
  let operations = 0
  const n = boxes.length
  for (let i = 1; i < n; i++) {
    if (boxes[i] === '1') {
      right++
      operations += i
    }
  }
  const res: number[] = new Array(n).fill(0)
  res[0] = operations
  for (let i = 1; i < n; i++) {
    operations += left - right
    if (boxes[i] === '1') {
      left++
      right--
    }
    res[i] = operations
  }
  return res
}
