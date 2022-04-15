import { describe, expect, it } from 'vitest'
import { rotateRight } from '.'
import type { ListNode } from '~/utils/listNode'
import { createListNode } from '~/utils/listNode'

describe('旋转链表', () => {
  describe('合并链表', () => {
    testCase(rotateRight)
  })
})

function testCase(fn: (head: ListNode, k: number) => ListNode | null) {
  it.each([
    [[1, 2, 3, 4, 5], 2, [4, 5, 1, 2, 3]],
    [[0, 1, 2], 4, [2, 0, 1]],
  ])('示例%#', (head, k, expected) => {
    expect(fn(createListNode(head)!, k)).toEqual(createListNode(expected))
  })
}
