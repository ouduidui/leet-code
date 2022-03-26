import { ListNode } from '~/utils/listNode'

/**
 * 递归
 * @desc 时间复杂度 O(N)  空间复杂度 O(N)
 * @param head
 * @param val
 * @returns
 */
export function removeElements(
  head: ListNode | null,
  val: number,
): ListNode | null {
  if (head === null) return head
  head.next = removeElements(head.next, val)
  return head.val === val ? head.next : head
}

/**
 * 迭代
 * @desc 时间复杂度 O(N)  空间复杂度 O(1)
 * @param head
 * @param val
 * @returns
 */
export function removeElements2(
  head: ListNode | null,
  val: number,
): ListNode | null {
  const dummyHead = new ListNode(0, head)
  let temp = dummyHead
  while (temp.next !== null) {
    if (temp.next.val === val)
      temp.next = temp.next.next
    else
      temp = temp.next
  }
  return dummyHead.next
}
