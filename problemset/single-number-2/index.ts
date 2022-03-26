/**
 * 哈希表
 * @desc 时间复杂度 O(N)  空间复杂度 O(N)
 * @param nums
 */
export function singleNumber(nums: number[]): number {
  const map = new Map<number, boolean>()

  for (const num of nums)
    map.has(num) ? map.set(num, true) : map.set(num, false)

  for (const [key, value] of map)
    if (!value) return key

  return 0
}

/**
 * 依次确定每一个二进制位
 * @desc 时间复杂度 O(N)  空间复杂度 O(1)
 * @param nums
 */
export function singleNumber2(nums: number[]): number {
  let ans = 0

  for (let i = 0; i < 32; i++) {
    let total = 0
    for (const num of nums) {
      // 累加num的第 i 个二进制位
      total += (num >> i) & 1
    }
    // 对total除以 3，余数为只出现过一次的第 i 个二进制位
    if (total % 3 !== 0)
      ans |= 1 << i
  }

  return ans
}

/**
 * 数字电路设计
 * @desc 时间复杂度 O(N)  空间复杂度 O(1)
 * @param nums
 */
export function singleNumber3(nums: number[]): number {
  let a = 0
  let b = 0
  for (const num of nums)
    [a, b] = [(~a & b & num) | (a & ~b & ~num), ~a & (b ^ num)]

  return b
}

/**
 * 数字电路设计优化
 * @desc 时间复杂度 O(N)  空间复杂度 O(1)
 * @param nums
 */
export function singleNumber4(nums: number[]): number {
  let a = 0
  let b = 0
  for (const num of nums) {
    b = ~a & (b ^ num)
    a = ~b & (a ^ num)
  }
  return b
}
