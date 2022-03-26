/**
 * 栈
 * @desc 时间复杂度 O(N)  空间复杂度 O(N)
 * @param tokens
 */
export function evalRPN(tokens: string[]): number {
  const stack: number[] = []
  const isNumber = (s: string) =>
    s !== '+' && s !== '-' && s !== '*' && s !== '/'
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i]

    if (isNumber(token)) {
      stack.push(Number(tokens[i]))
    }
    else {
      const num1 = stack.pop()!
      const num2 = stack.pop()!

      switch (token) {
        case '+':
          stack.push(num1 + num2)
          break
        case '-':
          stack.push(num2 - num1)
          break
        case '*':
          stack.push(num1 * num2)
          break
        case '/':
          stack.push(
            num2 / num1 > 0 ? Math.floor(num2 / num1) : Math.ceil(num2 / num1),
          )
          break
      }
    }
  }

  return stack.pop()!
}
