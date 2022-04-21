/**
 * 模拟
 * @desc 时间复杂度 O(N³)  空间复杂度 O(N)
 * @param num
 * @returns
 */
export function isAdditiveNumber(num: string): boolean {
  const len = num.length
  // 遍历定位第二个数值的起点位置
  for (let secondStart = 1; secondStart < len - 1; secondStart++) {
    // 如果开头为0的话，secondStart只能为1，否则跳出循环
    if (num[0] === '0' && secondStart !== 1) break

    // 遍历定位第二个数值的结束位置
    for (let secondEnd = secondStart; secondEnd < len - 1; secondEnd++) {
      // 如果开头为0的话，secondStart只能为1，否则跳出循环
      if (num[secondStart] === '0' && secondStart !== secondEnd)
        break

      // 开始验证
      if (valid(secondStart, secondEnd, num)) return true
    }
  }

  return false

  /**
   * 验证
   * @param secondStart
   * @param secondEnd
   * @param num
   * @returns
   */
  function valid(secondStart: number, secondEnd: number, num: string): boolean {
    const len = num.length
    // 初始第一个数值的定位
    let firstStart = 0
    let firstEnd = secondStart - 1
    while (secondEnd <= len - 1) {
      // 生成第三个数值
      const third = stringAdd(num, firstStart, firstEnd, secondStart, secondEnd)
      // 更新第三个数值的定位
      const thirdStart = secondEnd + 1
      const thirdEnd = secondEnd + third.length
      // 如果第三个数值超过界限或不在num中指定位置，则跳出循环
      if (thirdEnd >= len || num.slice(thirdStart, thirdEnd + 1) !== third)
        break

      // 如果已经到结尾，则证明验证成功
      if (thirdEnd === len - 1)
        return true

      // 往后顺延
      firstStart = secondStart
      firstEnd = secondEnd
      secondStart = thirdStart
      secondEnd = thirdEnd
    }

    return false
  }

  /**
   * 生成 first + second 的值
   * @param s
   * @param firstStart
   * @param firstEnd
   * @param secondStart
   * @param secondEnd
   * @returns
   */
  function stringAdd(
    s: string,
    firstStart: number,
    firstEnd: number,
    secondStart: number,
    secondEnd: number,
  ): string {
    const third: number[] = []
    let carry = 0
    let cur = 0
    while (firstEnd >= firstStart || secondEnd >= secondStart || carry !== 0) {
      cur = carry
      if (firstEnd >= firstStart)
        cur += Number(s[firstEnd--])
      if (secondEnd >= secondStart)
        cur += Number(s[secondEnd--])

      carry = (cur / 10) >> 0
      cur %= 10
      third.unshift(cur)
    }
    return third.join('')
  }
}
