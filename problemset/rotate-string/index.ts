/**
 * 模拟
 * @desc 时间复杂度 O(N)  空间复杂度 O(N)
 * @param s
 * @param goal
 * @returns
 */
export function rotateString(s: string, goal: string): boolean {
  if (s.length !== goal.length) return false
  if (s === goal) return true

  const len = s.length
  const goalFirst = goal.charAt(0)
  for (let i = 0; i < len; i++) {
    if (
      s.charAt(i + 1) === goalFirst
      && s.substring(i + 1, len) + s.substring(0, i + 1) === goal
    ) return true
  }

  return false
}

/**
 * 搜索子字符串
 * @desc 时间复杂度 O(N)  空间复杂度 O(N)
 * @param s
 * @param goal
 * @returns
 */
export function rotateString2(s: string, goal: string): boolean {
  return s.length === goal.length && (s + s).includes(goal)
}
