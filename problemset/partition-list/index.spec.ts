import { describe, expect, it } from 'vitest'
import { partition } from '.'
import type { ListNode } from '~/utils/listNode'
import { createListNode } from '~/utils/listNode'

describe('分隔链表', () => {
  testCase(partition)
})

function testCase(fn: (head: ListNode | null, x: number) => ListNode | null) {
  it.each([
    [
      [1, 4, 3, 2, 5, 2],
      3,
      [1, 2, 2, 4, 3, 5],
    ],
    [
      [2, 1],
      2,
      [1, 2],
    ],
  ])('示例%#', (head, x, expected) => {
    expect(fn(createListNode(head), x)).toStrictEqual(createListNode(expected))
  })
}
