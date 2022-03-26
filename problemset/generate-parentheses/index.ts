/**
 * 回溯
 * @desc 时间复杂度 O(4^N/√N)   空间复杂度 O(N)
 * @param n
 */
export function generateParenthesis(n: number): string[] {
  const ans: string[] = []
  backtrack([], 0, 0)
  return ans

  function backtrack(brackets: string[], left: number, right: number) {
    if (brackets.length === 2 * n) {
      ans.push(brackets.join(''))
      return
    }
    // 如果左括号数量不大于 n ，放一个左括号
    if (left < n) {
      brackets.push('(')
      backtrack(brackets, left + 1, right)
      brackets.pop()
    }
    // 如果右括号数量小于左括号的数量，放一个右括号
    if (right < left) {
      brackets.push(')')
      backtrack(brackets, left, right + 1)
      brackets.pop()
    }
  }
}
