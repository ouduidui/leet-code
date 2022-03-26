import type { Node } from '~/utils/perfectBinaryTree'

/**
 * 层级遍历
 * @desc 时间复杂度 O(N)  空间复杂度 O(N)
 * @param root
 */
export function connect(root: Node | null): Node | null {
  if (root === null) return null

  const queue: Node[] = [root]

  while (queue.length) {
    const len = queue.length
    let last: Node | null = null
    for (let i = 0; i < len; i++) {
      const node = queue.pop()!
      if (node.left) queue.unshift(node.left)
      if (node.right) queue.unshift(node.right)
      if (last) last.next = node
      last = node
    }
  }

  return root
}

/**
 * 使用已建立的 next 指针
 * @desc 时间复杂度 O(N)  空间复杂度 O(1)
 * @param root
 */
export function connect2(root: Node | null): Node | null {
  if (root === null) return null

  let start: Node | null = root
  let last: Node | null
  let nextStart: Node | null
  while (start) {
    last = null
    nextStart = null
    for (let p: Node | null = start; p !== null; p = p.next) {
      p.left && handle(p.left)
      p.right && handle(p.right)
      start = nextStart
    }
  }

  return root

  function handle(p: Node) {
    if (last) last.next = p
    if (nextStart === null) nextStart = p
    last = p
  }
}
