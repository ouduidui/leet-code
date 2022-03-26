/**
 * 回溯
 * @desc 时间复杂度 O(N * 2^N)   空间复杂度 O(N)
 * @param nums
 */
export function subsetsWithDup(nums: number[]): number[][] {
  const ans: number[][] = []
  nums.sort((a, b) => a - b)
  const len = nums.length
  backTrack()
  return ans

  function backTrack(temp: number[] = [], index = 0) {
    ans.push([...temp])

    for (let i = index; i < len; i++) {
      if (i === index || nums[i] !== nums[i - 1]) {
        temp.push(nums[i])
        backTrack(temp, i + 1)
        temp.pop()
      }
    }
  }
}
