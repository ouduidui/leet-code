import { ListNode } from '~/utils/listNode'

/**
 * 递归
 * @desc 时间复杂度 O(N+M)  空间复杂度 O(N+M)
 * @param l1 {ListNode | null}
 * @param l2 {ListNode | null}
 * @return {ListNode | null}
 */
export function mergeTwoLists(
  l1: ListNode | null,
  l2: ListNode | null,
): ListNode | null {
  if (!l1 && !l2) return null
  if (!l1) return l2
  if (!l2) return l1

  if (l1.val < l2.val) {
    l1.next = mergeTwoLists(l1.next, l2)
    return l1
  }
  else {
    l2.next = mergeTwoLists(l1, l2.next)
    return l2
  }
}

/**
 * 迭代
 * @desc 时间复杂度 O(N+M)  空间复杂度 O(1)
 * @param l1 {ListNode | null}
 * @param l2 {ListNode | null}
 * @return {ListNode | null}
 */
export function mergeTwoLists2(
  l1: ListNode | null,
  l2: ListNode | null,
): ListNode | null {
  const prevHead: ListNode = new ListNode(-1)

  let prev: ListNode | null = prevHead
  while (l1 && l2) {
    if (l1.val <= l2.val) {
      prev.next = l1
      l1 = l1.next
    }
    else {
      prev.next = l2
      l2 = l2.next
    }
    prev = prev?.next
  }

  prev.next = l1 || l2

  return prevHead.next
}
