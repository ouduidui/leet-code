import { describe, expect, it } from 'vitest'
import { numIslands, numIslands2, numIslands3 } from '.'
// need refactor
describe('岛屿数量', () => {
  describe('深度优先遍历', () => {
    testCase(numIslands)
  })

  describe('广度优先遍历', () => {
    testCase(numIslands2)
  })

  describe('并查集', () => {
    testCase(numIslands3)
  })
})

function testCase(fn: (grid: string[][]) => number) {
  it('示例一', () => {
    const grid = [
      ['1', '1', '1', '1', '0'],
      ['1', '1', '0', '1', '0'],
      ['1', '1', '0', '0', '0'],
      ['0', '0', '0', '0', '0'],
    ]
    const expected = 1
    expect(fn(grid)).toBe(expected)
  })

  it('示例二', () => {
    const grid = [
      ['1', '1', '0', '0', '0'],
      ['1', '1', '0', '0', '0'],
      ['0', '0', '1', '0', '0'],
      ['0', '0', '0', '1', '1'],
    ]
    const expected = 3
    expect(fn(grid)).toBe(expected)
  })
}
