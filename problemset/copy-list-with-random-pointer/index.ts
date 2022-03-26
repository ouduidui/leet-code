import { Node } from '~/utils/listNodeWithRandomPointer'

/**
 * 回溯 + 哈希表
 * @desc 时间复杂度 O(N)  空间复杂度 O(N)
 * @param head
 */
export function copyRandomList(head: Node | null): Node | null {
  const nodeMap = new Map<Node, Node>()
  return _copyRandomList(head)

  function _copyRandomList(node: Node | null): Node | null {
    if (node === null) return null

    if (!nodeMap.has(node)) {
      const cloneNode = new Node(node.val)
      nodeMap.set(node, cloneNode)
      cloneNode.next = _copyRandomList(node.next)
      cloneNode.random = _copyRandomList(node.random)
    }

    return nodeMap.get(node)!
  }
}

/**
 * 迭代 + 节点拆分
 * @desc 时间复杂度 O(N)  空间复杂度 O(1)
 * @param head
 */
export function copyRandomList2(head: Node | null): Node | null {
  if (head === null) return null

  let node: Node | null
  // 实现链表复制，穿插在原列表中
  // node1 -> node2  =====>   node1 -> cloneNode1 -> node2 -> cloneNode2
  for (node = head; node; node = node.next.next)
    node.next = new Node(node.val, node.next || undefined)

  // 实现随机节点绑定
  for (node = head; node && node.next; node = node.next.next) {
    const cloneNode = node.next!
    cloneNode.random = node.random ? node.random.next : null
  }

  const cloneHead = head.next
  // 将复制链表从原链表脱离开来
  for (node = head; node !== null; node = node.next) {
    const cloneNode = node.next!
    node.next = node.next!.next
    cloneNode.next = cloneNode.next ? cloneNode.next.next : null
  }

  return cloneHead
}
