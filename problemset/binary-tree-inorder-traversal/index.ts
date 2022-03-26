import type { TreeNode } from '~/utils/treeNode'

/**
 * 递归
 * @desc 时间复杂度 O(N)  空间复杂度 O(N)
 * @param root {TreeNode | null}
 * @return {number[]}
 */
export function inorderTraversal(root: TreeNode | null): number[] {
  return dfs(root)

  function dfs(tree: TreeNode | null): number[] {
    if (tree === null) return []
    return [...dfs(tree.left), tree.val, ...dfs(tree.right)]
  }
}

/**
 * 迭代 + 栈
 * @desc 时间复杂度 O(N)  空间复杂度 O(N)
 * @param root {TreeNode | null}
 * @return {number[]}
 */
export function inorderTraversal2(root: TreeNode | null): number[] {
  const res: number[] = []
  const stack: TreeNode[] = []
  while (root || stack.length) {
    while (root) {
      stack.push(root)
      root = root.left
    }

    const tree = stack.pop() as TreeNode
    res.push(tree.val)
    root = tree.right
  }

  return res
}

/**
 * Morris 中序遍历
 * @desc 时间复杂度 O(N)  空间复杂度 O(1)
 * @param root {TreeNode | null}
 * @return {number[]}
 */
export function inorderTraversal3(root: TreeNode | null): number[] {
  const res: number[] = []
  let predecessor: TreeNode | null = null

  while (root) {
    if (root.left) {
      // predecessor 节点就是当前 root 节点向左走一步，然后一直向右走至无法走为止
      predecessor = root.left
      while (predecessor.right && predecessor.right !== root)
        predecessor = predecessor.right

      // 让 predecessor 的右指针指向 root，继续遍历左子树
      if (predecessor.right === null) {
        predecessor.right = root
        root = root.left
      }
      // 说明左子树已经访问完了，我们需要断开链接
      else {
        res.push(root.val)
        predecessor.right = null
        root = root.right
      }
    }
    // 如果没有左孩子，则直接访问右孩子
    else {
      res.push(root.val)
      root = root.right
    }
  }

  return res
}
