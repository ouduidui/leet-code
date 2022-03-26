/**
 * 长除法
 * @desc 时间复杂度 O(N)  空间复杂度 O(N)
 * @param numerator
 * @param denominator
 */
export function fractionToDecimal(
  numerator: number,
  denominator: number,
): string {
  if (numerator % denominator === 0)
    return `${numerator / denominator}`

  const integerParts: (string | number)[] = []
  if ((numerator < 0) !== (denominator < 0)) {
    integerParts.push('-')
    numerator = Math.abs(numerator)
    denominator = Math.abs(denominator)
  }

  // 整数部分
  integerParts.push((numerator / denominator) >> 0, '.')

  // 小数部分
  const fractionParts: (string | number)[] = []
  const maxLen = 10 ** 4 - integerParts.length // 小数部分最大长度
  const remainderIndexDic = new Map<number, number>() // 记录除数，如果重复则代表为循环小数
  let remainder = numerator % denominator
  let index = 0
  while (
    remainder !== 0
    && !remainderIndexDic.has(remainder)
    && index < maxLen
  ) {
    remainderIndexDic.set(remainder, index)
    remainder *= 10
    fractionParts.push((remainder / denominator) >> 0)
    remainder %= denominator
    index++
  }

  // 存在循环小数
  if (remainder !== 0 && remainderIndexDic.has(remainder)) {
    const insertIndex = remainderIndexDic.get(remainder)!
    // 添加括号
    fractionParts.splice(insertIndex, 0, '(')
    fractionParts.push(')')
  }

  return integerParts.join('') + fractionParts.join('')
}
