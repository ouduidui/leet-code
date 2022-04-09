import type { TreeNode } from '~/utils/treeNode'

/**
 * 一次遍历
 * @desc 时间复杂度 O(N)  空间复杂度 O(1)
 * @param root
 * @param p
 * @param q
 * @returns
 */
export function lowestCommonAncestor(
  root: TreeNode | null,
  p: TreeNode | null,
  q: TreeNode | null,
): TreeNode | null {
  let ancestor = root
  const pVal = p!.val
  const qVal = q!.val

  while (true) {
    if (pVal < ancestor!.val && qVal < ancestor!.val)
      ancestor = ancestor!.left
    else if (pVal > ancestor!.val && qVal > ancestor!.val)
      ancestor = ancestor!.right
    else
      break
  }

  return ancestor
}
