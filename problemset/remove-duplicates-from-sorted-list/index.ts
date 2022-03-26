import type { ListNode } from '~/utils/listNode'

/**
 * 一次遍历
 * @desc 时间复杂度 O(N)   空间复杂度 O(1)
 * @param head
 */
export function deleteDuplicates(head: ListNode | null): ListNode | null {
  if (!head) return head

  let cur = head

  while (cur.next) {
    if (cur.val === cur.next.val)
      cur.next = cur.next.next
    else
      cur = cur.next
  }

  return head
}
