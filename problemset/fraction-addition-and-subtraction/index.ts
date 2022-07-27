/**
 * 模拟
 * @desc 时间复杂度 O(N+logC)  空间复杂度 O(1)
 * @param expression
 * @returns
 */
export function fractionAddition(expression: string): string {
  const isDigit = (ch: string) => !isNaN(Number(ch))

  let denominator = 0 // 分子
  let numerator = 1 // 分母
  let index = 0
  const len = expression.length

  while (index < len) {
    // 读取分子
    let denominator1 = 0
    let sign = 1
    if (expression[index] === '-' || expression[index] === '+') {
      sign = expression[index] === '-' ? -1 : 1
      index++
    }
    while (index < len && isDigit(expression[index])) {
      denominator1 = denominator1 * 10 + Number(expression[index])
      index++
    }
    denominator1 = denominator1 * sign
    index++

    // 读取分母
    let numerator1 = 0
    while (index < len && isDigit(expression[index])) {
      numerator1 = numerator1 * 10 + Number(expression[index])
      index++
    }

    denominator = denominator * numerator1 + denominator1 * numerator
    numerator *= numerator1
  }

  if (denominator === 0) return '0/1'

  // 获取最大公约数
  const g = gcd(Math.abs(denominator), numerator)
  return `${(denominator / g) >> 0}/${(numerator / g) >> 0}`

  function gcd(a: number, b: number) {
    let remainder = a % b
    while (remainder !== 0) {
      a = b
      b = remainder
      remainder = a % b
    }
    return b
  }
}
