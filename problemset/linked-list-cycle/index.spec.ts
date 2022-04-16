import { describe, expect, it } from 'vitest'
import { hasCycle, hasCycle2 } from '.'
import type { ListNode } from '~/utils/listNode'
import { createCycleListNode } from '~/utils/listNode'

describe('环形链表', () => {
  describe('哈希表', () => {
    testCase(hasCycle)
  })

  describe('快慢指针', () => {
    testCase(hasCycle2)
  })
})

function testCase(fn: (head: ListNode | null) => boolean) {
  it.each([
    [[3, 2, 0, -4], 1, true],
    [[1, 2], 0, true],
    [[1], -1, false],
  ])('示例%#', (arr, pos, expected) => {
    expect(fn(createCycleListNode(arr, pos))).toBe(expected)
  })
}
