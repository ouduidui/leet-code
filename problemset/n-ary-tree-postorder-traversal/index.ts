import type { Node } from '~/utils/nAryTree'

/**
 * 递归
 * @desc 时间复杂度 O(N)  空间复杂度 O(N)
 * @param root
 * @returns
 */
export function postorder(root: Node | null): number[] {
  const result: number[] = []
  dfs(root, result)
  return result

  function dfs(node: Node | null, res: number[]) {
    if (node === null) return
    node.children.forEach(c => dfs(c, res))
    res.push(node.val)
  }
}

/**
 * 迭代
 * @desc 时间复杂度 O(N)  空间复杂度 O(N)
 * @param root
 * @returns
 */
export function postorder2(root: Node | null): number[] {
  if (root === null) return []

  const result: number[] = []
  const stack: Node[] = [root]
  const visited = new Set<Node>()

  while (stack.length > 0) {
    const tail = stack[stack.length - 1]

    const len = tail.children.length

    if (len === 0 || visited.has(tail)) {
      const node = stack.pop()!
      result.push(node.val)
    }
    else {
      visited.add(tail)
      for (let i = len - 1; i >= 0; i--)
        stack.push(tail.children[i])
    }
  }

  return result
}

/**
 * 前序翻转
 * @desc 时间复杂度 O(N)  空间复杂度 O(N)
 * @param root
 * @returns
 */
export function postorder3(root: Node | null): number[] {
  if (root === null) return []

  const result: number[] = []
  const stack: Node[] = [root]

  while (stack.length > 0) {
    const node = stack.pop()!
    result.push(node.val)
    node.children.forEach(c => stack.push(c))
  }

  return result.reverse()
}
