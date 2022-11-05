/**
 * 栈
 * @desc 时间复杂度 O(N)  空间复杂度 O(N)
 * @param expression
 * @returns
 */
export function parseBoolExpr(expression: string): boolean {
  const stack: string[] = []
  const n = expression.length
  for (let i = 0; i < n; i++) {
    const c = expression[i]
    if (c === ',') {
      continue
    }
    else if (c !== ')') {
      stack.push(c)
    }
    else {
      let t = 0; let f = 0
      while (stack[stack.length - 1] !== '(') {
        const val = stack.pop()
        if (val === 't')
          t++

        else
          f++
      }
      stack.pop()
      const op = stack.pop()
      switch (op) {
        case '!':
          stack.push(f === 1 ? 't' : 'f')
          break
        case '&':
          stack.push(f === 0 ? 't' : 'f')
          break
        case '|':
          stack.push(t > 0 ? 't' : 'f')
          break
        default:
      }
    }
  }
  return stack.pop() === 't'
}
