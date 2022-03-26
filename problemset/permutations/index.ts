/**
 * 回溯
 * @desc 时间复杂度 O(N*N!)  空间复杂度 O(N)
 * @param nums {number[]}
 * @return {number[][]}
 */
export function permute(nums: number[]): number[][] {
  const res: number[][] = []
  const temp: number[] = []
  const len: number = nums.length
  backtrack([])
  return res

  function backtrack(used: boolean[]) {
    if (temp.length === len) { res.push([...temp]) }
    else {
      for (let i = 0; i < len; i++) {
        if (!used[i]) {
          temp.push(nums[i])
          used[i] = true
          backtrack(used)
          used[i] = false
          temp.pop()
        }
      }
    }
  }
}
