import type { TreeNode } from '~/utils/treeNode'

/**
 * 递归
 * @desc 时间复杂度 O(N)  空间复杂度 O(N)
 * @param root
 */
export function postorderTraversal(root: TreeNode | null): number[] {
  if (!root) return []
  const result: number[] = []
  dfs(root, result)
  return result

  function dfs(root: TreeNode | null, result: number[]) {
    if (!root) return

    root.left && dfs(root.left, result)
    root.right && dfs(root.right, result)
    result.push(root.val)
  }
}

/**
 * 迭代
 * @desc 时间复杂度 O(N)  空间复杂度 O(N)
 * @param root
 */
export function postorderTraversal2(root: TreeNode | null): number[] {
  if (!root) return []
  const result: number[] = []
  const stack: TreeNode[] = []
  let prev: TreeNode | null = null

  while (root || stack.length) {
    // 递归当前节点的左节点，逐一入栈
    while (root) {
      stack.push(root)
      root = root.left
    }

    // 获取栈顶节点
    root = stack.pop()!

    if (!root.right || root.right === prev) {
      // 如果没有右节点，或者右节点是上一个处理的节点，
      // 这代表当前为根节点，并已经处理完该根节点的左右节点
      result.push(root.val)
      prev = root
      root = null
    }
    else {
      // 如果有右节点，向下走
      stack.push(root)
      root = root.right
    }
  }

  return result
}

/**
 * Morris 遍历
 * @desc 时间复杂度 O(N)  空间复杂度 O(N)
 * @param root
 */
export function postorderTraversal3(root: TreeNode | null): number[] {
  if (!root) return []
  const result: number[] = []

  let p1: TreeNode | null = root
  let p2: TreeNode | null = null

  while (p1) {
    p2 = p1.left
    if (p2) {
      while (p2.right != null && p2.right !== p1)
        p2 = p2.right

      if (p2.right === null) {
        p2.right = p1
        p1 = p1.left
        continue
      }
      else {
        p2.right = null
        addPath(result, p1.left)
      }
    }
    p1 = p1.right
  }
  addPath(result, root)
  return result

  function addPath(res: number[], node: TreeNode | null) {
    let count = 0
    while (node) {
      count++
      res.push(node.val)
      node = node.right
    }

    let left = res.length - count
    let right = res.length - 1
    while (left < right) {
      [res[left], res[right]] = [res[right], res[left]]
      left++
      right--
    }
  }
}
