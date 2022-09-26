/**
 * 位运算
 * @desc 时间复杂度 O(N) 空间复杂度 O(1)
 * @param nums
 * @returns
 */
export function missingTwo(nums: number[]): number[] {
  let xorsum = 0
  const n = nums.length + 2
  for (const num of nums)
    xorsum ^= num

  for (let i = 1; i <= n; i++)
    xorsum ^= i

  let type1 = 0; let type2 = 0
  const lsb = xorsum & (-xorsum)
  for (const num of nums) {
    if (num & lsb)
      type1 ^= num

    else
      type2 ^= num
  }
  for (let i = 1; i <= n; i++) {
    if (i & lsb)
      type1 ^= i

    else
      type2 ^= i
  }
  return [type1, type2]
}
