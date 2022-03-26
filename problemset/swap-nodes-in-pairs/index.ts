import { ListNode } from '~/utils/listNode'

/**
 * 迭代
 * @desc 时间复杂度 O(N)  空间复杂度 O(1)
 * @param head {ListNode | null}
 * @return {ListNode | null}
 */
export function swapPairs(head: ListNode | null): ListNode | null {
  if (!head || !head.next) return head

  const ans: ListNode = new ListNode(0)
  ans.next = head
  let cur: ListNode | null = ans

  while (cur.next && cur.next.next) {
    const firstNode: ListNode = cur.next
    const secondNode: ListNode | null = cur.next.next
    cur.next = secondNode
    firstNode.next = secondNode.next
    secondNode.next = firstNode
    cur = firstNode
  }

  return ans.next
}

/**
 * 递归
 * @desc 时间复杂度 O(N)  空间复杂度 O(N)
 * @param head {ListNode | null}
 * @return {ListNode | null}
 */
export function swapPairs2(head: ListNode | null): ListNode | null {
  if (!head || !head.next) return head

  const ans: ListNode = head.next
  head.next = swapPairs2(ans.next)
  ans.next = head
  return ans
}
