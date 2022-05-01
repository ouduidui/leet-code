import type { TreeNode } from '~/utils/treeNode'

/**
 * 中序遍历 + 归并
 * @desc 时间复杂度 O(M+N)  空间复杂度 O(M+N)
 * @param root1
 * @param root2
 * @returns
 */
export function getAllElements(root1: TreeNode | null, root2: TreeNode | null): number[] {
  const nums1: number[] = []
  const nums2: number[] = []

  inorder(root1, nums1)
  inorder(root2, nums2)

  const merged: number[] = []

  while (nums1.length && nums2.length)
    merged.push(nums1[0] <= nums2[0] ? nums1.shift()! : nums2.shift()!)

  merged.push(...nums1, ...nums2)
  return merged

  function inorder(node: TreeNode | null, nums: number[]) {
    if (!node) return
    inorder(node.left, nums)
    nums.push(node.val)
    inorder(node.right, nums)
  }
}
