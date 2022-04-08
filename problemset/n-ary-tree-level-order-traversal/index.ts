import type { Node } from '~/utils/nAryTree'

/**
 * 广度优先搜索
 * @desc 时间复杂度 O(N)  空间复杂度 O(N)
 * @param root
 * @returns
 */
export function levelOrder(root: Node | null): number[][] {
  if (root === null) return []

  const result: number[][] = []
  const queue: Node[] = [root]

  while (queue.length) {
    const len = queue.length
    const nums: number[] = []
    for (let i = 0; i < len; i++) {
      const node = queue.pop()!
      nums.push(node.val)
      if (node.children.length)
        queue.unshift(...[...node.children].reverse())
    }
    result.push(nums)
  }

  return result
}
