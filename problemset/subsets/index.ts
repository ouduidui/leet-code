/**
 * 回溯
 * @desc 时间复杂度 O(N2^N)   空间复杂度 O(N)
 * @param nums
 */
export function subsets(nums: number[]): number[][] {
  const ans: number[][] = []
  backTrack()
  return ans

  function backTrack(temp: number[] = [], index = 0) {
    ans.push([...temp])

    for (let i = index; i < nums.length; i++) {
      temp.push(nums[i])
      backTrack(temp, i + 1)
      temp.pop()
    }
  }
}
