/**
 * 哈希表
 * @desc 时间复杂度 O(N)  空间复杂度 O(N)
 * @param nums
 * @returns
 */
export function singleNumber(nums: number[]): number[] {
  if (nums.length <= 2) return nums

  const freq = new Map()
  for (const num of nums)
    freq.set(num, (freq.get(num) || 0) + 1)

  const ans: number[] = []
  for (const [num, occ] of freq.entries())
    if (occ === 1) ans.push(num)

  return ans
}

/**
 * 位运算
 * @desc 时间复杂度 O(N)  空间复杂度 O(N)
 * @param nums
 * @returns
 */
export function singleNumber2(nums: number[]): number[] {
  let xorsum = 0

  for (const num of nums)
    xorsum ^= num

  let type1 = 0
  let type2 = 0
  // a⊕b⊕a = b⊕a⊕a = b⊕(a⊕a) = b⊕0 = b
  const lsb = xorsum & (-xorsum)
  for (const num of nums) {
    if (num & lsb) type1 ^= num
    else type2 ^= num
  }
  return [type1, type2]
}
