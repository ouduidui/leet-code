import type { TreeNode } from '~/utils/treeNode'

/**
 * 前序遍历
 * @desc 时间复杂度 O(N)  空间复杂度 O(N)
 * @param root
 */
export function flatten(root: TreeNode | null): void {
  const list: TreeNode[] = []
  const stack: TreeNode[] = []
  let node = root
  // 前序遍历，存入list
  while (node !== null || stack.length) {
    while (node !== null) {
      list.push(node)
      stack.push(node)
      node = node.left
    }
    node = stack.pop()!
    node = node.right
  }

  for (let i = 1; i < list.length; i++) {
    const prev = list[i - 1]
    const curr = list[i]
    prev.left = null
    prev.right = curr
  }
}

/**
 * 前序遍历和展开同步进行
 * @desc 时间复杂度 O(N)  空间复杂度 O(N)
 * @param root
 */
export function flatten2(root: TreeNode | null): void {
  if (root === null) return

  const stack: TreeNode[] = [root]
  let prev: TreeNode | null = null
  while (stack.length) {
    const curr = stack.pop()!
    if (prev) {
      prev.left = null
      prev.right = curr
    }

    // 先进right，后进left
    curr.right && stack.push(curr.right)
    curr.left && stack.push(curr.left)
    prev = curr
  }
}

/**
 * 寻找前驱节点
 * @desc 时间复杂度 O(N)  空间复杂度 O(1)
 * @param root
 */
export function flatten3(root: TreeNode | null): void {
  let curr = root
  while (curr !== null) {
    if (curr.left !== null) {
      const next = curr.left

      // 将predecessor定位到next最右边的节点
      let predecessor = next
      while (predecessor.right !== null)
        predecessor = predecessor.right

      // 将curr的所有右子树接在predecessor的右边
      predecessor.right = curr.right

      curr.left = null
      curr.right = next
    }
    curr = curr.right
  }
}
