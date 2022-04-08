
import { describe, expect, it } from 'vitest'
import { isPalindrome, isPalindrome2 } from '.'
import type { ListNode } from '~/utils/listNode'
import { createListNode } from '~/utils/listNode'

describe('回文链表', () => {
  describe('将值复制到数组', () => {
    testCase(isPalindrome)
  })

  describe('快慢指针', () => {
    testCase(isPalindrome2)
  })
})

function testCase(fn: (head: ListNode | null) => boolean) {
  it.each([
    [[1, 2, 2, 1], true],
    [[1, 2], false],
  ])('示例%#', (head, expected) => {
    expect(fn(createListNode(head))).toBe(expected)
  })
}
