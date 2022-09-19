/**
 * 模拟
 * @desc 时间复杂度 O(NlogN) 空间复杂度 O(N)
 * @param nums
 * @returns
 */
export function frequencySort(nums: number[]): number[] {
  const cnt = new Map<number, number>()
  for (const num of nums)
    cnt.set(num, (cnt.get(num) || 0) + 1)

  const list = [...nums]
  list.sort((a, b) => {
    const cnt1 = cnt.get(a)!
    const cnt2 = cnt.get(b)!
    return cnt1 !== cnt2 ? cnt1 - cnt2 : b - a
  })
  const length = nums.length
  for (let i = 0; i < length; i++)
    nums[i] = list[i]

  return nums
}
