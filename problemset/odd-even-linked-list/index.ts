import type { ListNode } from '~/utils/listNode'

/**
 * 分离再拼接
 * @desc 时间复杂度 O(N)  空间复杂度 O(1)
 * @param head
 * @returns
 */
export function oddEvenList(head: ListNode | null): ListNode | null {
  if (!head) return null

  let odd = head
  const evenRoot = head.next
  let even = evenRoot
  if (even === null || even.next === null) return head

  let cur: ListNode | null = even.next
  while (cur) {
    odd.next = cur
    odd = odd.next
    cur = cur.next

    if (cur) {
      even.next = cur
      even = even.next
      cur = cur.next
    }
  }

  odd.next = evenRoot
  even.next = null
  return head
}
