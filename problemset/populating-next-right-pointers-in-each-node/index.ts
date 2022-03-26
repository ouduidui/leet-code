import type { Node } from '~/utils/perfectBinaryTree'

/**
 * 层次遍历
 * @desc 时间复杂度 O(N)  空间复杂度 O(N)
 * @param root
 */
export function connect(root: Node | null): Node | null {
  if (root === null) return root

  // 初始化队列
  const queue = [root]

  while (queue.length) {
    const size = queue.length
    for (let i = 0; i < size; i++) {
      const node = queue.shift()!
      if (i < size - 1) node.next = queue[0]
      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
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
  if (root === null) return root

  // 该层最左的节点
  let leftmost = root

  while (leftmost.left) {
    // 父节点
    let head: Node | null = leftmost

    while (head) {
      // 同个父节点下的左右节点相接
      head.left!.next = head.right
      // 左父节点的右子节点连接右父节点的左子节点
      if (head.next)
        head.right!.next = head.next.left

      // 更新下一个同级父节点
      head = head.next
    }

    // 去下一层的最左的节点
    leftmost = leftmost.left
  }

  return root
}
