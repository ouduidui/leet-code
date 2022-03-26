/**
 * 做乘法
 * @desc 时间复杂度 O(MN)   空间复杂度 O(M+N)
 * @param num1
 * @param num2
 */
export function multiply(num1: string, num2: string): string {
  if (num1 === '0' || num2 === '0') return '0'

  const len1 = num1.length
  const len2 = num2.length
  // 用于存储乘积，最后一位存储个位，倒数第二位存储十位，以此类推
  const ansArr: number[] = new Array(len1 + len2).fill(0)

  // 乘法操作
  for (let i = len1 - 1; i >= 0; i--) {
    const x = Number(num1[i])
    for (let j = len2 - 1; j >= 0; j--) {
      const y = Number(num2[j])
      ansArr[i + j + 1] += x * y
    }
  }

  // 合并位数
  for (let i = len1 + len2 - 1; i > 0; i--) {
    ansArr[i - 1] += Math.floor(ansArr[i] / 10)
    ansArr[i] %= 10
  }

  // 获取起始位
  let idx = ansArr[0] === 0 ? 1 : 0
  let ans = ''
  while (idx < len1 + len2) {
    ans += ansArr[idx]
    idx++
  }

  return ans
}
