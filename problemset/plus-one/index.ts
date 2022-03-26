/**
 * 遍历
 * @param digits {number[]}
 * @return {number[]}
 */
export function plusOne(digits: number[]): number[] {
  let carry = 1
  for (let i = digits.length - 1; i >= 0; i--) {
    const num = digits[i]
    if (carry === 1) {
      const sum = num + carry
      digits[i] = sum % 10
      carry = sum >= 10 ? 1 : 0
    }
    else {
      return digits
    }
  }

  if (carry === 1) digits.unshift(carry)

  return digits
}
