import { ListNode } from '~/utils/listNode'

/**
 * @desc 时间复杂度：O(max(m,n))  空间复杂度 O(1)
 * @param l1 {ListNode}
 * @param l2 {ListNode}
 * @return {ListNode}
 */
export function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null,
): ListNode | null {
  let head: ListNode | null = null // 存放链头
  let tail: ListNode | null = null // 存放链尾
  let carry = 0 // 进位值

  // 遍历链表
  while (l1 || l2) {
    // 求和
    const n1: number = l1 && l1.val ? l1.val : 0
    const n2: number = l2 && l2.val ? l2.val : 0
    const sum: number = n1 + n2 + carry

    if (!head) {
      head = tail = new ListNode(sum % 10) // 初始化链头和链尾
    }
    else if (tail) {
      // 插入链尾
      tail.next = new ListNode(sum % 10)
      tail = tail.next
    }

    // 进位值
    carry = Math.floor(sum / 10)

    // 获取下一个链表
    if (l1?.val || l1?.val === 0) l1 = l1.next
    if (l2?.val || l2?.val === 0) l2 = l2.next
  }

  // 遍历结束后检查进位
  if (carry > 0)
    tail && (tail.next = new ListNode(carry))

  return head
}
