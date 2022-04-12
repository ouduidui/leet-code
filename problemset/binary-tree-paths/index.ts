import type { TreeNode } from '~/utils/treeNode'

/**
 * 深度优先遍历
 * @desc 时间复杂度 O(N²)  空间复杂度 O(N²)
 * @param root
 * @returns
 */
export function binaryTreePaths(root: TreeNode | null): string[] {
  const result: string[] = []
  root && dfs(root, [], result)
  return result

  function dfs(node: TreeNode, temp: number[], result: string[]) {
    temp.push(node.val)
    if (!node.left && !node.right)
      return result.push(temp.join('->'))

    node.left && dfs(node.left, [...temp], result)
    node.right && dfs(node.right, [...temp], result)
  }
}

/**
 * 广度优先遍历
 * @desc 时间复杂度 O(N²)  空间复杂度 O(N²)
 * @param root
 * @returns
 */
export function binaryTreePaths2(root: TreeNode | null): string[] {
  const result: string[] = []
  if (root === null) return result

  const nodeQueue: TreeNode[] = [root]
  const tempQueue: string[] = [`${root.val}`]

  while (nodeQueue.length) {
    const node = nodeQueue.pop()!
    const temp = tempQueue.pop()!

    if (!node.left && !node.right) {
      result.push(temp)
    }
    else {
      if (node.left) {
        nodeQueue.unshift(node.left)
        tempQueue.unshift(`${temp}->${node.left.val}`)
      }

      if (node.right) {
        nodeQueue.unshift(node.right)
        tempQueue.unshift(`${temp}->${node.right.val}`)
      }
    }
  }

  return result
}
