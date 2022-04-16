/**
 * 回溯
 * @desc 时间复杂度 O(4^n)  空间复杂度 O(N)
 * @param num
 * @param target
 * @returns
 */
export function addOperators(num: string, target: number): string[] {
  const ans: string[] = []
  backtrack(num.length, ans)
  return ans

  function backtrack(
    len: number,
    ans: string[],
    expression: string[] = [],
    i = 0,
    res = 0,
    mul = 0,
  ) {
    if (i === len) {
      if (res === target) ans.push(expression.join(''))
      return
    }

    const signIndex = expression.length
    // 占位，下面填充符号
    if (i > 0)
      expression.push('')

    let val = 0
    // 枚举截取的数字长度（取多少位），注意数字可以是单个 0 但不能有前导零
    for (let j = i; j < len && (j === i || num[i] !== '0'); j++) {
      val = val * 10 + num[j].charCodeAt(0) - '0'.charCodeAt(0)
      expression.push(num[j])
      // 表达式开头不能添加符号
      if (i === 0) {
        backtrack(len, ans, expression, j + 1, val, val)
      }
      // 枚举符号
      else {
        expression[signIndex] = '+'
        backtrack(len, ans, expression, j + 1, res + val, val)
        expression[signIndex] = '-'
        backtrack(len, ans, expression, j + 1, res - val, -val)
        expression[signIndex] = '*'
        backtrack(len, ans, expression, j + 1, res - mul + mul * val, mul * val)
      }
    }
    expression = expression.splice(signIndex, expression.length - signIndex)
  }
}
