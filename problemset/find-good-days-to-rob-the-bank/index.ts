/**
 * 暴力解法
 * @desc 时间复杂度 O(MN) 空间复杂度 O(1)
 * @param security
 * @param time
 */
export function goodDaysToRobBank(security: number[], time: number): number[] {
  if (time === 0) return security.map((item, idx) => idx)

  const len = security.length
  if (len < 2 * time + 1) return []

  const result: number[] = []

  for (let i = time; i < len - time; i++) {
    let flag = true
    for (let left = i, right = i, j = 0; j < time; j++, left--, right++) {
      if (
        security[left] > security[left - 1]
        || security[right] > security[right + 1]
      ) {
        flag = false
        break
      }
    }

    if (flag) result.push(i)
  }

  return result
}

/**
 * 动态规划
 * @desc 时间复杂度 O(N) 空间复杂度 O(N)
 * @param security
 * @param time
 */
export function goodDaysToRobBank2(security: number[], time: number): number[] {
  if (time === 0) return security.map((item, idx) => idx)

  const len = security.length
  if (len < 2 * time + 1) return []

  const left = new Array(len).fill(0)
  const right = new Array(len).fill(0)
  for (let i = 1; i < len; i++) {
    // 从左到右记录最长非递增长度
    if (security[i] <= security[i - 1])
      left[i] = left[i - 1] + 1

    // 从右到左记录最长非递增长度
    if (security[len - 1 - i] <= security[len - i])
      right[len - 1 - i] = right[len - i] + 1
  }
  const result: number[] = []
  for (let i = time; i < len - time; i++) {
    // 判断最长非递增长度是否大于time
    if (left[i] >= time && right[i] >= time)
      result.push(i)
  }

  return result
}
