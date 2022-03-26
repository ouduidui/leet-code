import { describe, expect, it } from 'vitest'
import { countHighestScoreNodes } from '.'

describe('统计最高分的节点数目', () => {
  testCase(countHighestScoreNodes)
})

function testCase(fn: (parents: number[]) => number) {
  it.each([
    [[-1, 2, 0, 2, 0], 3],
    [[-1, 2, 0], 2],
  ])('示例%#', (parents, expected) => {
    expect(fn(parents)).toBe(expected)
  })
}
