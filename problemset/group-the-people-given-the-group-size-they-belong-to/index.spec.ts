import { describe, expect, it } from 'vitest'
import { groupThePeople } from '.'

describe('用户分组', () => {
  testCase(groupThePeople)
})

function testCase(fn: (groupSizes: number[]) => number[][]) {
  it.each([
    [
      [3, 3, 3, 3, 3, 1, 3],
    ],
    [
      [2, 1, 3, 3, 3, 2],
    ],
  ])('示例%#', (groupSizes) => {
    const expected = fn(groupSizes)
    const set = new Set<number>()
    for (const group of expected) {
      const groupSize = group.length
      expect(group.every(item => groupSizes[item] === groupSize)).toBeTruthy()
      group.forEach((item) => {
        expect(set.has(item)).toBeFalsy()
        set.add(item)
      })
    }
    expect(set.size).toBe(groupSizes.length)
  })
}
