import { describe, expect, it } from 'vitest'
import { connect, connect2 } from '.'
import type { Node } from '~/utils/perfectBinaryTree'
import {
  createBinaryTree,
  createPerfectBinaryTree,
} from '~/utils/perfectBinaryTree'

describe('填充每个节点的下一个右侧节点指针 II', () => {
  describe('层级遍历', () => {
    testCase(connect)
  })

  describe('使用已建立的 next 指针', () => {
    testCase(connect2)
  })
})

function testCase(fn: (root: Node | null) => Node | null) {
  it.each([
    [
      [1, 2, 3, 4, 5, null, 7],
      [1, '#', 2, 3, '#', 4, 5, null, 7, '#'],
    ],
  ])('示例%#', (root, expected) => {
    expect(fn(createBinaryTree(root)))
      .toStrictEqual(createPerfectBinaryTree(expected as (number | '#' | null)[]))
  })
}
