/**
 * 括号展开 + 栈
 * @desc 时间复杂度 O(N) 空间复杂度 O(N)
 * @param s
 * @returns
 */
export function calculate(s: string): number {
  const stack = [1]
  let sign = 1

  let result = 0
  const len = s.length
  let i = 0

  while (i < len) {
    switch (s[i]) {
      case ' ':
        i++
        break
      case '+':
        sign = stack[stack.length - 1]
        i++
        break
      case '-':
        sign = -stack[stack.length - 1]
        i++
        break
      case '(':
        stack.push(sign)
        i++
        break
      case ')':
        stack.pop()
        i++
        break
      default:
        numberHandler()
    }
  }

  function numberHandler() {
    let num = 0
    while (i < len && !(isNaN(Number(s[i]))) && s[i] !== ' ') {
      num = num * 10 + s[i].charCodeAt(0) - '0'.charCodeAt(0)
      i++
    }
    result += sign * num
  }

  return result
}
