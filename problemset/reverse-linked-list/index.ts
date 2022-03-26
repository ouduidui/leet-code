import { ListNode } from '~/utils/listNode'

/**
 * 迭代
 * @desc 时间复杂度 O(N)  空间复杂度 O(1)
 * @param head
 * @returns
 */
export function reverseList(head: ListNode | null): ListNode | null {
  if (!head || !head.next) return null

  const dummy = new ListNode(0)

  while (head) {
    dummy.next = new ListNode(head.val, dummy.next)
    head = head.next
  }

  return dummy.next
}
