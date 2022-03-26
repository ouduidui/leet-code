import type { TreeNode } from '~/utils/treeNode'

/**
 * 深度优先搜索
 * @desc 时间复杂度 O(min(M,N))   空间复杂度 O(min(M,N))
 * @param p
 * @param q
 */
export function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
  if (p === null && q === null) return true
  if (p == null || q === null) return false
  if (p.val !== q.val) return false

  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
}

/**
 * 广度优先搜索
 * @desc 时间复杂度 O(min(M,N))   空间复杂度 O(min(M,N))
 * @param p
 * @param q
 */
export function isSameTree2(p: TreeNode | null, q: TreeNode | null): boolean {
  if (p === null && q === null) return true
  if (p === null || q === null) return false

  const queue1: TreeNode[] = [p]
  const queue2: TreeNode[] = [q]
  while (queue1.length && queue2.length) {
    const node1 = queue1.shift()!
    const node2 = queue2.shift()!
    if (node1.val !== node2.val) return false

    const left1 = node1.left
    const right1 = node1.right
    const left2 = node2.left
    const right2 = node2.right

    if ((left1 === null || left2 === null) && left1 !== left2) return false
    if ((right1 === null || right2 === null) && right1 !== right2) return false

    left1 && queue1.push(left1)
    left2 && queue2.push(left2)
    right1 && queue1.push(right1)
    right2 && queue2.push(right2)
  }

  return queue1.length + queue2.length === 0
}
