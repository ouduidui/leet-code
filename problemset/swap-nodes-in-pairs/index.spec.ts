import { describe, expect, it } from 'vitest'
import { swapPairs, swapPairs2 } from '.'
import type { ListNode } from '~/utils/listNode'
import { createListNode } from '~/utils/listNode'

describe('两两交换链表中的节点', () => {
  describe('迭代', () => {
    testCase(swapPairs)
  })

  describe('递归', () => {
    testCase(swapPairs2)
  })
})

function testCase(fn: (head: ListNode | null) => ListNode | null) {
  it.each([
    [
      [1, 2, 3, 4],
      [2, 1, 4, 3],
    ],
    [[], []],
    [[1], [1]],
  ])('示例%#', (head, expected) => {
    expect(fn(createListNode(head))).toEqual(createListNode(expected))
  })
}
