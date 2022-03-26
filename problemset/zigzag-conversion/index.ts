/**
 * 按行排序
 * @desc 时间复杂度 -> O(N)   空间复杂度 -> O(N)
 * @param s {string}
 * @param numRows {number}
 * @return {string}
 */
export function convert(s: string, numRows: number): string {
  if (numRows <= 1) return s
  // 初始化一个numRows长度的数组，填充空字符串
  const resArr: Array<string> = Array(numRows).fill('')

  // 一个循环的数量
  const cycleCount: number = 2 * numRows - 2
  // 遍历字符串
  for (let i = 0; i < s.length; i++) {
    // 获取在一个循环周期内的位置
    const j: number = i % cycleCount
    if (j < numRows) {
      // 向下时
      resArr[j] += s[i]
    }
    else {
      // 向上时
      // resArr[numRows - 1 - (j - numRows + 1)] += s[i];
      resArr[2 * numRows - j - 2] += s[i]
    }
  }

  return resArr.join('')
}
