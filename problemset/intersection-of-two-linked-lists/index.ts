import type { ListNode } from '~/utils/listNode'

/**
 * 哈希表
 * @desc 时间复杂度 O(M + N)  空间复杂度 O(M)
 * @param headA
 * @param headB
 */
export function getIntersectionNode(
  headA: ListNode | null,
  headB: ListNode | null,
): ListNode | null {
  if (!headA || !headB) return null

  const visited = new WeakSet<ListNode>()

  let cur: ListNode | null = headA

  while (cur) {
    visited.add(cur)
    cur = cur.next
  }

  cur = headB
  while (cur) {
    if (visited.has(cur))
      return cur

    cur = cur.next
  }

  return null
}

/**
 * 双指针
 * @desc 时间复杂度 O(M + N)  空间复杂度 O(1)
 * @param headA
 * @param headB
 * @returns
 */
export function getIntersectionNode2(
  headA: ListNode | null,
  headB: ListNode | null,
): ListNode | null {
  if (!headA || !headB) return null
  let pointA: ListNode | null = headA
  let pointB: ListNode | null = headB

  while (pointA || pointB) {
    if (pointA === pointB) return pointA

    pointA = pointA ? pointA.next : headB
    pointB = pointB ? pointB.next : headA
  }

  return null
}
