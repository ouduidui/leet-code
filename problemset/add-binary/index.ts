/**
 * 模拟
 * @desc 时间复杂度 O(N)   空间复杂度 O(1)
 * @param a {string}
 * @param b {string}
 * @return {string}
 */
export function addBinary(a: string, b: string): string {
  if (a === '0') return b
  if (b === '0') return a

  let point1 = a.length - 1
  let point2 = b.length - 1
  let ans = ''
  let carry = 0

  while (point1 >= 0 || point2 >= 0) {
    const aNum = a[point1] ? Number(a[point1]) : 0
    const bNum = b[point2] ? Number(b[point2]) : 0

    const sum = carry + aNum + bNum

    if (sum > 1) {
      carry = 1
      ans = (sum % 2) + ans
    }
    else {
      carry = 0
      ans = sum + ans
    }

    point1--
    point2--
  }

  if (carry) ans = `1${ans}`

  return ans
}
