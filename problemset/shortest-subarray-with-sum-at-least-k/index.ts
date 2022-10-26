/**
 * 前缀和 + 单调双端队列
 * @desc 时间复杂度 O(N) 空间复杂度 O(N)
 * @param nums
 * @param k
 * @returns
 */
export function shortestSubarray(nums: number[], k: number): number {
  const n = nums.length
  const preSumArr = new Array(n + 1).fill(0)
  for (let i = 0; i < n; i++)
    preSumArr[i + 1] = preSumArr[i] + nums[i]

  let res = n + 1
  const queue = []
  for (let i = 0; i <= n; i++) {
    const curSum = preSumArr[i]
    while (queue.length !== 0 && curSum - preSumArr[queue[0]] >= k)
      res = Math.min(res, i - queue.shift()!)

    while (queue.length !== 0 && preSumArr[queue[queue.length - 1]] >= curSum)
      queue.pop()

    queue.push(i)
  }
  return res < n + 1 ? res : -1
}
