import { describe, expect, it } from 'vitest'
import { addTwoNumbers } from '.'
import type { ListNode } from '~/utils/listNode'
import { createListNode } from '~/utils/listNode'

describe('两数相加', () => {
  describe('模拟', () => {
    testCase(addTwoNumbers)
  })
})

function testCase(
  fn: (l1: ListNode | null, l2: ListNode | null) => ListNode | null,
) {
  it.each([
    [
      [2, 4, 3],
      [5, 6, 4],
      [7, 0, 8],
    ],
    [[0], [0], [0]],
    [
      [9, 9, 9, 9, 9, 9, 9],
      [9, 9, 9, 9],
      [8, 9, 9, 9, 0, 0, 0, 1],
    ],
  ])('示例%#', (l1, l2, expected) => {
    expect(fn(createListNode(l1), createListNode(l2))).toEqual(
      createListNode(expected),
    )
  })
}
