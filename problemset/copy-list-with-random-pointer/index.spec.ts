import { describe, expect, it } from 'vitest'
import { copyRandomList, copyRandomList2 } from '.'
import type { Node } from '~/utils/listNodeWithRandomPointer'
import {
  createListNodeWithRandomPointer,
} from '~/utils/listNodeWithRandomPointer'

describe('复制带随机指针的链表', () => {
  describe('回溯 + 哈希表', () => {
    testCase(copyRandomList)
  })
  describe('迭代 + 节点拆分', () => {
    testCase(copyRandomList2)
  })
})

function testCase(fn: (head: Node | null) => Node | null) {
  it.each([
    [
      [
        [7, null],
        [13, 0],
        [11, 4],
        [10, 2],
        [1, 0],
      ],
    ],
    [
      [
        [1, 1],
        [2, 1],
      ],
    ],
    [
      [
        [3, null],
        [3, 0],
        [3, null],
      ],
    ],
  ])('示例%#', (arr) => {
    const head = createListNodeWithRandomPointer(
      arr as [number, number | null][],
    )
    const result = fn(head)
    result !== null && expect(result).not.toBe(head)
    expect(result).toStrictEqual(head)
  })
}
