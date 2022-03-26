/**
 * 哈希表
 * @desc 时间复杂度 O(N)  空间复杂度 O(N)
 * @param nums
 */
export function singleNumber(nums: number[]): number {
  const set = new Set<number>()
  for (const num of nums)
    set.has(num) ? set.delete(num) : set.add(num)

  return [...set][0]
}

/**
 * 位运算
 * @desc 时间复杂度 O(N)  空间复杂度 O(1)
 * @param nums
 */
export function singleNumber2(nums: number[]): number {
  let single = 0
  for (const num of nums) {
    // 异或处理
    // a⊕b⊕a = b⊕a⊕a = b⊕(a⊕a) = b⊕0 = b
    single ^= num
  }
  return single
}
