/**
 * 单调栈
 * @desc 时间复杂度 O(N)  空间复杂度 O(N)
 * @param s
 * @returns
 */
export function removeDuplicateLetters(s: string): string {
  const stack: string[] = []
  for (let i = 0; i < s.length; i++) {
    if (!stack.includes(s[i])) {
      while (
        stack.length
        && stack[stack.length - 1].charCodeAt(0) > s[i].charCodeAt(0) /* 保持单调递增 */
        && s.includes(stack[stack.length - 1], i) /* 剩余字符存在该字符 */
      )
        stack.pop()

      stack.push(s[i])
    }
  }

  return stack.join('')
}
