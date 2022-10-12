import { describe, expect, it } from 'vitest'
import { numComponents } from '.'
import type { ListNode } from '~/utils/listNode'
import { createListNode } from '~/utils/listNode'

describe('链表组件', () => {
  testCase(numComponents)
})

function testCase(fn: (head: ListNode | null, nums: number[]) => number) {
  it.each([
    [
      [0, 1, 2, 3],
      [0, 1, 3],
      2,
    ],
    [
      [0, 1, 2, 3, 4],
      [0, 3, 1, 4],
      2,
    ],
  ])('示例%#', (head, nums, expected) => {
    expect(fn(createListNode(head), nums)).toBe(expected)
  })
}
