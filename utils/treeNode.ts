// Definition for a binary tree node.
export class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val
    this.left = left === undefined ? null : left
    this.right = right === undefined ? null : right
  }
}

type TreeNodeArrayItem = number | null

/**
 * 数组转树
 * @param array
 */
export function createTreeNode(array: TreeNodeArrayItem[]): TreeNode | null {
  if (!array.length || array[0] === null) return null
  const rootTree = new TreeNode(array.shift()!)
  const queue: TreeNode[] = [rootTree]

  while (array.length) {
    const tree = queue.pop()!
    const num1 = array.shift()
    if (num1 || num1 === 0) {
      tree.left = new TreeNode(num1)
      queue.unshift(tree.left)
    }
    const num2 = array.shift()
    if (num2 || num2 === 0) {
      tree.right = new TreeNode(num2)
      queue.unshift(tree.right)
    }
  }

  return rootTree
}

/**
 * 找到对应节点
 * @param root
 * @param val
 * @returns
 */
export function findNode(root: TreeNode, val: number): TreeNode | null {
  const queue: TreeNode[] = [root]
  while (queue.length) {
    const node = queue.pop()!
    if (node.val === val) return node

    node.left && queue.unshift(node.left)
    node.right && queue.unshift(node.right)
  }
  return null
}
