import { ListNode } from '~/utils/listNode'

/**
 * 一次遍历
 * @desc 时间复杂度 O(N)   空间复杂度 O(1)
 * @param head
 */
export function deleteDuplicates(head: ListNode | null): ListNode | null {
  if (!head) return head

  const dummy = new ListNode(0, head)

  let cur = dummy
  while (cur && cur.next && cur.next.next) {
    if (cur.next.val === cur.next.next.val) {
      const x = cur.next.val
      // 去重
      while (cur.next && cur.next.val === x)
        cur.next = cur.next.next
    }
    else {
      cur = cur.next
    }
  }

  return dummy.next
}
