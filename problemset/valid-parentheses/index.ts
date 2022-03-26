/**
 * 栈
 * @desc 时间复杂度 O(N) 空间复杂度 O(N)
 * @param s
 */
export function isValid(s: string): boolean {
  if (s.length % 2 === 1) return false

  const stack: string[] = []
  const pairs: Map<string, string> = new Map([
    ['(', ')'],
    ['[', ']'],
    ['{', '}'],
  ])

  for (let i = 0; i < s.length; i++) {
    if (pairs.get(stack[stack.length - 1]) === s[i])
      stack.pop()
    else
      stack.push(s[i])
  }

  return !stack.length
}
