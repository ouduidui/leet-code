import { describe, expect, it } from 'vitest'
import { connect, connect2 } from '.'
import type { Node } from '~/utils/perfectBinaryTree'
import {
  createBinaryTree,
  createPerfectBinaryTree,
} from '~/utils/perfectBinaryTree'
// need refactor
describe('填充每个节点的下一个右侧节点指针', () => {
  describe('层次遍历', () => {
    testCase(connect)
  })

  describe('使用已建立的 next 指针', () => {
    testCase(connect2)
  })
})

function testCase(fn: (root: Node | null) => Node | null) {
  it('示例一', () => {
    const root = createBinaryTree([1, 2, 3, 4, 5, 6, 7])
    const expected = createPerfectBinaryTree([
      1,
      '#',
      2,
      3,
      '#',
      4,
      5,
      6,
      7,
      '#',
    ])
    expect(fn(root)).toStrictEqual(expected)
  })

  it('示例二', () => {
    const root = createBinaryTree([])
    const expected = createPerfectBinaryTree([])
    expect(fn(root)).toStrictEqual(expected)
  })
}
