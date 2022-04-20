/**
 * 前缀和
 */
export class NumArray {
  sums: number[]

  /**
   * @desc 时间复杂度 O(N)  空间复杂度 O(N)
   * @param nums
   */
  constructor(nums: number[]) {
    const len = nums.length
    this.sums = new Array(len + 1).fill(0)
    for (let i = 0; i < len; i++)
      this.sums[i + 1] = this.sums[i] + nums[i]
  }

  sumRange(left: number, right: number): number {
    return this.sums[right + 1] - this.sums[left]
  }
}
