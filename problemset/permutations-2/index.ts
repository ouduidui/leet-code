/**
 * 回溯
 * @desc 时间复杂度 O(N*N!)  空间复杂度 O(N)
 * @param nums {number[]}
 * @return {number[][]}
 */
export function permuteUnique(nums: number[]): number[][] {
  const res: number[][] = []
  const temp: number[] = []
  const len = nums.length
  nums.sort((a, b) => a - b)
  backTrack(new Set())
  return res

  function backTrack(set: Set<string>) {
    if (temp.length === len) res.push([...temp])

    let lastNums = NaN
    for (let i = 0; i < len; i++) {
      const key = `${i}-${nums[i]}`
      if (!set.has(key) && nums[i] !== lastNums) {
        lastNums = nums[i]
        set.add(key)
        temp.push(nums[i])
        backTrack(set)
        set.delete(key)
        temp.pop()
      }
    }
  }
}
