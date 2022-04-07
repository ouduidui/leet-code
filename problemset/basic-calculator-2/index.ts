/**
 * 栈
 * @desc 时间复杂度 O(N)  空间复杂度 O(N)
 * @param s
 * @returns
 */
export function calculate(s: string): number {
  s = s.trim()

  const stack: number[] = []
  let preSign = '+'
  let num = 0
  const len = s.length
  const isNumber = (s: string) => !isNaN(Number(s))

  for (let i = 0; i < len; i++) {
    if (isNumber(s[i]) && s[i] !== ' ')
      num = num * 10 + s[i].charCodeAt(0) - '0'.charCodeAt(0)

    if (!isNumber(s[i]) || i === len - 1) {
      switch (preSign) {
        case '+':
          stack.push(num)
          break
        case '-':
          stack.push(-num)
          break
        case '*':
          stack.push(stack.pop()! * num)
          break
        case '/':
          stack.push(stack.pop()! / num | 0)
          break
      }
      preSign = s[i]
      num = 0
    }
  }

  let ans = 0
  while (stack.length)
    ans += stack.pop()!

  return ans
}
