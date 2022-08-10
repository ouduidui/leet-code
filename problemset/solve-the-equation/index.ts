/**
 * 解析
 * @desc 时间复杂度 O(n)  空间复杂度 O(1)
 * @param equation
 * @returns
 */
export function solveEquation(equation: string): string {
  let factor = 0
  let val = 0
  let index = 0
  const n = equation.length
  let sign1 = 1 // 等式左边默认为正
  const isDigit = (ch: string) => !isNaN(Number(ch))

  while (index < n) {
    if (equation[index] === '=') {
      sign1 = -1 // 等式右边默认系数为负
      index++
      continue
    }

    let sign2 = sign1
    let number = 0
    let valid = false // 记录number是否有效
    if (equation[index] === '-' || equation[index] === '+') {
      // 去掉前面的符号
      sign2 = (equation[index] === '-') ? -sign1 : sign1
      index++
    }
    while (index < n && isDigit(equation[index])) {
      number = number * 10 + (equation[index].charCodeAt(0) - '0'.charCodeAt(0))
      index++
      valid = true
    }

    if (index < n && equation[index] === 'x') {
      // 变量
      factor += valid ? sign2 * number : sign2
      index++
    }
    else {
      // 数值
      val += sign2 * number
    }
  }

  if (factor === 0)
    return val === 0 ? 'Infinite solutions' : 'No solution'

  return `x=${-val / factor}`
}
