import { describe, expect, it } from 'vitest'
import { getIntersectionNode, getIntersectionNode2 } from '.'
import type { ListNode } from '~/utils/listNode'
import { createIntersectionListNode } from '~/utils/listNode'

describe('相交链表', () => {
  testCase(getIntersectionNode)
  testCase(getIntersectionNode2)
})

function testCase(
  fn: (headA: ListNode | null, headB: ListNode | null) => ListNode | null,
) {
  it.each([
    [
      8,
      [4, 1, 8, 4, 5],
      [5, 6, 1, 8, 4, 5],
      2,
      3,
    ],
    [
      2,
      [1, 9, 1, 2, 4],
      [3, 2, 4],
      3,
      1,
    ],
    [
      0,
      [2, 6, 4],
      [1, 5],
      3,
      2,
    ],
  ])('示例%#', (intersectVal, listA, listB, skipA, skipB) => {
    const [headA, headB, intersectionNode] = createIntersectionListNode(intersectVal, listA, listB, skipA, skipB)
    expect(fn(headA, headB)).toBe(intersectionNode)
  })
}
