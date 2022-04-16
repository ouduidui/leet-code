import { describe, expect, it } from 'vitest'
import { detectCycle, detectCycle2 } from '.'
import type { ListNode } from '~/utils/listNode'
import { createCycleListNode } from '~/utils/listNode'

describe('环形链表 II', () => {
  describe('哈希表', () => {
    testCase(detectCycle)
  })

  describe('快慢指针', () => {
    testCase(detectCycle2)
  })
})

function testCase(fn: (head: ListNode | null) => ListNode | null) {
  it.each([
    [[3, 2, 0, -4], 1],
    [[1, 2], 0],
    [[1], -1],
  ])('示例%#', (arr, pos) => {
    const head = createCycleListNode(arr, pos)
    if (pos === -1) { expect(fn(head)).toBeNull() }
    else {
      let expected = head
      while (pos > 0) {
        expected = expected!.next
        pos--
      }

      expect(fn(head)).toBe(expected)
    }
  })
}
