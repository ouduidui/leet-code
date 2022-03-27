import { describe, expect, it } from 'vitest'
import { missingRolls } from '.'

describe('找出缺失的观测数据', () => {
  testCase(missingRolls)
})

function testCase(fn: (rolls: number[], mean: number, n: number) => number[]) {
  it.each([
    [[3, 2, 4, 3], 4, 2, [6, 6]],
    [[1, 5, 6], 3, 4, [6, 1, 1, 1]],
    [[1, 2, 3, 4], 6, 4, []],
    [[1], 3, 1, [5]],
  ])('示例%#', (rolls, mean, n, expected) => {
    expect(fn(rolls, mean, n)).toStrictEqual(expected)
  })
}
