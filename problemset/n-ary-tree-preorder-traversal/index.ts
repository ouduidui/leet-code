import type { Node } from '~/utils/nAryTree'

/**
 * 递归
 * @desc 时间复杂度 O(N)  空间复杂度 O(N)
 * @param root
 */
export function preorder(root: Node | null): number[] {
  const result: number[] = []
  dfs(root, result)
  return result

  function dfs(node: Node | null, result: number[]): void {
    if (node === null) return

    result.push(node.val)

    for (const child of node.children)
      dfs(child, result)
  }
}

/**
 * 迭代
 * @desc 时间复杂度 O(N)  空间复杂度 O(N)
 * @param root
 */
export function preorder2(root: Node | null): number[] {
  if (root === null) return []

  const result: number[] = []
  const stack: Node[] = [root]

  while (stack.length) {
    const node = stack.pop()!
    result.push(node.val)

    const len = node.children.length

    // 倒序入栈
    for (let i = len - 1; i >= 0; i--)
      stack.push(node.children[i])
  }

  return result
}
