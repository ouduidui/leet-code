/**
 * 使用额外的数组
 * @desc 时间复杂度 O(N) 空间复杂度 O(N)
 * @param nums
 * @param k
 */
export function rotate(nums: number[], k: number): void {
  if ((k = k % nums.length) && k === 0) return
  nums.unshift(...nums.splice(nums.length - k))
}

/**
 * 环形替换
 * @desc 时间复杂度 O(N)  空间复杂度 O(1)
 * @param nums
 * @param k
 */
export function rotate2(nums: number[], k: number): void {
  const len = nums.length
  if ((k = k % len) && k === 0) return

  // 求最大公约数
  const gcd = (x: number, y: number): number => (y ? gcd(y, x % y) : x)
  // 遍历的次数
  const count = gcd(k, len)

  for (let start = 0; start < count; start++) {
    let current = start
    let prev = nums[start]

    // nums[i] < nums-> nums[(i+k)%len]
    do {
      const next = (current + k) % len;
      [nums[next], prev] = [prev, nums[next]]
      current = next
    } while (start !== current)
  }
}

/**
 * 数组翻转
 * @desc 时间复杂度 O(N)  空间复杂度 O(1)
 * @param nums
 * @param k
 */
export function rotate3(nums: number[], k: number): void {
  const len = nums.length
  if ((k = k % len) && k === 0) return
  reverse(nums, 0, len - 1)
  reverse(nums, 0, k - 1)
  reverse(nums, k, len - 1)

  function reverse(nums: number[], start: number, end: number) {
    while (start < end) {
      [nums[start], nums[end]] = [nums[end], nums[start]]
      start++
      end--
    }
  }
}
