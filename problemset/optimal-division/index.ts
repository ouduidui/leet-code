/**
 * 数学
 * @desc 时间复杂度 O(N) 空间复杂度 O(1)
 * @param nums
 */
export function optimalDivision(nums: number[]): string {
  switch (nums.length) {
    case 1:
      return `${nums[0]}`
    case 2:
      return `${nums[0]}/${nums[1]}`
    default:
      // 因为每个元素都大于 1，因此按顺序相除一定是最小的情况
      // 当两数相除，当除数保持不变的情况下，除数越小，得到的结果越大
      // 综上，我们可以第一个值作为除数，然后剩余的包裹起来直接相除，得到最小的值，然后再与第一个值相除，等到最大值的情况
      return `${nums.shift()}/(${nums.join('/')})`
  }
}
