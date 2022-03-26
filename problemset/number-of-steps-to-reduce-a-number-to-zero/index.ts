/**
 * 模拟
 * @desc 时间复杂度 O(logN)  空间复杂度 O(1)
 * @param num {number}
 * @return {number}
 */
export function numberOfSteps(num: number): number {
  let ans = 0

  while (num > 0) {
    num = num % 2 ? num - 1 : num / 2
    ans++
  }

  return ans
}
