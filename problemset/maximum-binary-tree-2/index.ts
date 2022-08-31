import { TreeNode } from '~/utils/treeNode'

/**
 * 遍历右子节点
 * @desc 时间复杂度 O(N)  空间复杂度 O(1)
 * @param root
 * @param val
 * @returns
 */
export function insertIntoMaxTree(root: TreeNode | null, val: number): TreeNode | null {
  let parent = null
  let cur = root
  while (cur) {
    if (val > cur.val) {
      if (!parent) return new TreeNode(val, root, null)

      const node = new TreeNode(val, cur, null)
      parent.right = node
      return root
    }
    else {
      parent = cur
      cur = cur.right
    }
  }
  parent!.right = new TreeNode(val)
  return root
}
