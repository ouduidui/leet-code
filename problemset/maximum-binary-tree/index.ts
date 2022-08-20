import { TreeNode } from '~/utils/treeNode'

/**
 * 递归
 * @desc 时间复杂度 O(N²)  空间复杂度 O(N)
 * @param nums
 * @returns
 */
export function constructMaximumBinaryTree(nums: number[]): TreeNode | null {
  const construct = (nums: number[], left: number, right: number) => {
    if (left > right)
      return null

    let best = left
    for (let i = left + 1; i <= right; ++i) {
      if (nums[i] > nums[best])
        best = i
    }
    const node = new TreeNode(nums[best])
    node.left = construct(nums, left, best - 1)
    node.right = construct(nums, best + 1, right)
    return node
  }

  return construct(nums, 0, nums.length - 1)
}

/**
 * 单调栈
 * @desc 时间复杂度 O(N)  空间复杂度 O(N)
 * @param nums
 * @returns
 */
export function constructMaximumBinaryTree2(nums: number[]): TreeNode | null {
  const n = nums.length
  const stack: number[] = []
  const tree = new Array(n).fill(0)
  for (let i = 0; i < n; ++i) {
    tree[i] = new TreeNode(nums[i])
    while (stack.length && nums[i] > nums[stack[stack.length - 1]]) {
      tree[i].left = tree[stack[stack.length - 1]]
      stack.pop()
    }
    if (stack.length)
      tree[stack[stack.length - 1]].right = tree[i]

    stack.push(i)
  }
  return tree[stack[0]]
}
