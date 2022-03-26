import { TreeNode } from '~/utils/treeNode'

/**
 * 中序遍历
 * @desc 时间复杂度 O(N)  空间复杂度 O(logN)
 * @param nums {number[]}
 * @return {TreeNode | null}
 */
export function sortedArrayToBST(nums: number[]): TreeNode | null {
  return helper(nums, 0, nums.length - 1)

  function helper(
    nums: number[],
    left: number,
    right: number,
  ): TreeNode | null {
    if (left > right)
      return null

    // 总是选择中间位置左边的数字作为根节点
    const mid = (left + right) >> 1

    const root = new TreeNode(nums[mid])
    root.left = helper(nums, left, mid - 1)
    root.right = helper(nums, mid + 1, right)
    return root
  }
}
