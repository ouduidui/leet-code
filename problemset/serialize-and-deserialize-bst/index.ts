import { TreeNode } from '~/utils/treeNode'

/**
 * 后序遍历
 * @desc 时间复杂度 O(N)  空间复杂度 O(N)
 * @param root
 * @returns
 */
export function serialize(root: TreeNode | null): string {
  const list: number[] = []
  postOrder(root, list)
  return list.join(',')

  function postOrder(node: TreeNode | null, list: number[]) {
    if (!node) return
    postOrder(node.left, list)
    postOrder(node.right, list)
    list.push(node.val)
  }
}

/**
 * 后序遍历
 * @desc 时间复杂度 O(N)  空间复杂度 O(N)
 * @param data
 * @returns
 */
export function deserialize(data: string): TreeNode | null {
  if (!data.length) return null

  return construct(
    -Number.MAX_VALUE,
    Number.MAX_VALUE,
    data.split(',').map<number>(i => Number(i)),
  )

  function construct(lower: number, upper: number, stack: number[]) {
    if (
      stack.length === 0
      || stack[stack.length - 1] < lower
      || stack[stack.length - 1] > upper
    )
      return null

    const val = stack.pop()!
    const root = new TreeNode(val)
    root.right = construct(val, upper, stack)
    root.left = construct(lower, val, stack)
    return root
  }
}
