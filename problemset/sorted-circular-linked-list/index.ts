import { ListNode as Node } from '~/utils/listNode'

/**
 * 一次遍历
 * @desc 时间复杂度 O(N)  空间复杂度 O(1)
 * @param head
 * @param insertVal
 * @returns
 */
export function insert(head: Node | null, insertVal: number): Node | null {
  const node = new Node(insertVal)
  if (!head) {
    node.next = node
    return node
  }
  if (head.next === head) {
    head.next = node
    node.next = head
    return head
  }

  let cur = head
  let next = head.next!

  while (next !== head) {
    if (insertVal >= cur.val && insertVal <= next.val)
      break

    if (cur.val > next.val) {
      if (insertVal > cur.val || insertVal < next.val)
        break
    }
    cur = cur.next!
    next = next.next!
  }

  cur.next = node
  node.next = next

  return head
}
