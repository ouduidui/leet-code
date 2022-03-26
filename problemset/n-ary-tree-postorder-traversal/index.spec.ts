import { describe, expect, it } from 'vitest'
import { postorder, postorder2, postorder3 } from '.'
import type { Node } from '~/utils/nAryTree'
import { createNAryTree } from '~/utils/nAryTree'
// need refactor
describe('N 叉树的后序遍历', () => {
  describe('递归', () => {
    testCase(postorder)
  })

  describe('迭代', () => {
    testCase(postorder2)
  })

  describe('前序翻转', () => {
    testCase(postorder3)
  })
})

function testCase(fn: (root: Node | null) => number[]) {
  it('示例一', () => {
    const root = createNAryTree([1, null, 3, 2, 4, null, 5, 6])
    const expected = [5, 6, 3, 2, 4, 1]
    expect(fn(root)).toEqual(expected)
  })

  it('示例二', () => {
    const root = createNAryTree([
      1,
      null,
      2,
      3,
      4,
      5,
      null,
      null,
      6,
      7,
      null,
      8,
      null,
      9,
      10,
      null,
      null,
      11,
      null,
      12,
      null,
      13,
      null,
      null,
      14,
    ])
    const expected = [2, 6, 14, 11, 7, 3, 12, 8, 4, 13, 9, 10, 5, 1]
    expect(fn(root)).toEqual(expected)
  })
}
