/**
 * 直接判断
 * @desc 时间复杂度 O(NlogR)  空间复杂度 O(1)
 * @param left
 * @param right
 * @returns
 */
export function selfDividingNumbers(left: number, right: number): number[] {
  const result: number[] = []

  for (let i = left; i <= right; i++)
    if (checkIsASelfDividingNumber(i)) result.push(i)

  return result

  function checkIsASelfDividingNumber(num: number): boolean {
    let temp = num
    while (temp > 0) {
      const digit = temp % 10
      if (digit === 0 || num % digit !== 0) return false
      temp = (temp / 10) >> 0
    }
    return true
  }
}
