import { describe, expect, it } from 'vitest'
import { outerTrees, outerTrees2, outerTrees3 } from '.'

describe('安装栅栏', () => {
  describe('Jarvis 算法', () => {
    testCase(outerTrees)
  })

  describe('Graham 算法', () => {
    testCase(outerTrees2)
  })

  describe('Andrew 算法', () => {
    testCase(outerTrees3)
  })
})

function testCase(fn: (trees: number[][]) => number[][]) {
  it.each([
    [
      [[1, 1], [2, 2], [2, 0], [2, 4], [3, 3], [4, 2]],
      [[1, 1], [2, 0], [4, 2], [3, 3], [2, 4]],
    ],
    [
      [[1, 2], [2, 2], [4, 2]],
      [[1, 2], [2, 2], [4, 2]],
    ],
  ])('示例%#', (trees, expected) => {
    expect(fn(trees).sort()).toStrictEqual(expected.sort())
  })
}
