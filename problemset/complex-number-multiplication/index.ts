/**
 * 模拟
 * @desc 时间复杂度 O(1)  空间复杂度 O(1)
 * @param num1
 * @param num2
 */
export function complexNumberMultiply(num1: string, num2: string): string {
  const realNumber1 = parseInt(num1.split('+')[0]) || 0
  const imaginaryNumber1 = parseInt(num1.split('+')[1].split('i')[0]) || 0
  const realNumber2 = parseInt(num2.split('+')[0]) || 0
  const imaginaryNumber2 = parseInt(num2.split('+')[1].split('i')[0]) || 0

  return `${realNumber1 * realNumber2 - imaginaryNumber1 * imaginaryNumber2}+${
    realNumber1 * imaginaryNumber2 + realNumber2 * imaginaryNumber1
  }i`
}
