/**
 * 数学
 * @desc 时间复杂度 O(NlogN) 空间复杂度 O(logN)
 * @param nums
 * @returns
 */
export function sumSubseqWidths(nums: number[]): number {
  const MOD = 1000000007
  nums.sort((a, b) => a - b)
  let res = 0
  let x = nums[0]; let y = 2
  for (let j = 1; j < nums.length; j++) {
    res = (res + nums[j] * (y - 1) - x) % MOD
    x = (x * 2 + nums[j]) % MOD
    y = y * 2 % MOD
  }
  return (res + MOD) % MOD
}
