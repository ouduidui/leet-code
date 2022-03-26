import { ListNode } from '~/utils/listNode'

/**
 * 穿针引线
 * @desc 时间复杂度 O(N)  空间复杂度 O(1)
 * @param head {ListNode | null}
 * @param left {number}
 * @param right {number}
 * @return {ListNode | null}
 */
export function reverseBetween(
  head: ListNode | null,
  left: number,
  right: number,
): ListNode | null {
  const dummyNode = new ListNode(0, head)

  // pre定位到left前一个的节点
  let pre = dummyNode
  for (let i = 0; i < left - 1; i++)
    pre = pre.next!

  // rightNode定位到right的节点
  let rightNode = pre
  for (let i = 0; i < right - left + 1; i++)
    rightNode = rightNode.next!

  // leftNode定位到left的节点
  const leftNode = pre.next!
  // cur定位到right的下一个节点
  const cur = rightNode.next

  // 切断节点
  pre.next = null
  rightNode.next = null

  // 反转链表
  reverseLinkedList(leftNode)

  pre.next = rightNode
  leftNode.next = cur
  return dummyNode.next

  /**
   * 反转链表
   * @param head
   */
  function reverseLinkedList(head: ListNode) {
    let pre = null
    let cur = head

    while (cur) {
      const next = cur.next
      cur.next = pre
      pre = cur
      cur = next!
    }
  }
}

/**
 * 穿针引线(头插法)
 * @desc 时间复杂度 O(N)  空间复杂度 O(1)
 * @param head {ListNode | null}
 * @param left {number}
 * @param right {number}
 * @return {ListNode | null}
 */
export function reverseBetween2(
  head: ListNode | null,
  left: number,
  right: number,
): ListNode | null {
  const dummyNode = new ListNode(0, head)
  let pre = dummyNode

  // 移动到left的上一个节点
  for (let i = 0; i < left - 1; i++)
    pre = pre.next!

  const cur = pre.next!
  // 遍历left到right区间的节点
  for (let i = 0; i < right - left; i++) {
    const next = cur.next!
    cur.next = next.next
    next.next = pre.next
    pre.next = next
  }

  return dummyNode.next
}
