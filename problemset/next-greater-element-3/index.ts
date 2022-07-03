/**
 * 下一个排列
 * @desc 时间复杂度 O(logN)  空间复杂度 O(logN)
 * @param n
 * @returns
 */
export function nextGreaterElement(n: number): number {
  const MAX = 2 ** 31 - 1

  const nums = [...(`${n}`)]
  let i = nums.length - 2
  while (i >= 0 && nums[i] >= nums[i + 1]) i--

  if (i < 0) return -1

  let j = nums.length - 1
  while (j >= 0 && nums[i] >= nums[j]) j--;

  [nums[i], nums[j]] = [nums[j], nums[i]]
  reverse(nums, i + 1)
  const ans = Number(nums.join(''))
  return ans > MAX ? -1 : ans

  function reverse(nums: string[], begin: number) {
    let i = begin
    let j = nums.length - 1
    while (i < j) {
      [nums[i], nums[j]] = [nums[j], nums[i]]
      i++
      j--
    }
  }
}
