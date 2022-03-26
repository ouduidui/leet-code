import type { ListNode } from '~/utils/listNode'

/**
 * 哈希表
 * @desc 时间复杂度 O(N)  空间复杂度 O(N)
 * @param head
 */
export function hasCycle(head: ListNode | null): boolean {
  if (!head || !head.next) return false

  const nodeSet = new Set<ListNode>()

  while (head !== null) {
    if (nodeSet.has(head))
      return true

    nodeSet.add(head)
    head = head.next
  }

  return false
}

/**
 * 快慢指针
 * @desc 时间复杂度 O(N)  空间复杂度 O(1)
 * @param head
 */
export function hasCycle2(head: ListNode | null): boolean {
  if (!head || !head.next) return false

  let slow: ListNode | null = head
  let fast: ListNode | null = head.next

  while (slow !== fast) {
    if (slow === null || fast === null) return false

    slow = slow.next
    fast = fast.next?.next || null
  }

  return true
}
