/**
 * 模拟
 * @desc 时间复杂度 O(N)  空间复杂度 O(1)
 * @param logs
 * @returns
 */
export function minOperations(logs: string[]): number {
  let depth = 0
  for (const log of logs) {
    if (log === './') {
      continue
    }
    else if (log === '../') {
      if (depth > 0) depth--
    }
    else {
      depth++
    }
  }
  return depth
}
