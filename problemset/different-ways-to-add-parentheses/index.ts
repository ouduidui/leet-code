/**
 * 分治
 * @param expression
 * @returns
 */
export function diffWaysToCompute(expression: string): number[] {
  return _diffWaysToCompute(expression)

  function _diffWaysToCompute(
    expression: string,
    memo = new Map<string, number[]>(),
  ): number[] {
    // 避免重复计算
    if (memo.has(expression))
      return memo.get(expression)!

    const res: number[] = []
    for (let i = 0; i < expression.length; i++) {
      const ch = expression.charAt(i)
      // 扫描算式 expression 中的运算符
      if (ch === '*' || ch === '+' || ch === '-') {
        // 开始分治处理
        const left = _diffWaysToCompute(expression.substring(0, i), memo)
        const right = _diffWaysToCompute(expression.substring(i + 1), memo)

        // 通过子问题的结果，合成原问题的结果
        for (const a of left) {
          for (const b of right) {
            switch (ch) {
              case '*':
                res.push(a * b)
                break
              case '+':
                res.push(a + b)
                break
              case '-':
                res.push(a - b)
                break
            }
          }
        }
      }
    }

    // 如果 res 为空，说明算式是一个数字，没有运算符（因为当算式中不存在运算符的时候，就不会触发 if 语句，也就不会给res中添加任何元素）
    if (!res.length) res.push(Number(expression))

    memo.set(expression, res)
    return res
  }
}
