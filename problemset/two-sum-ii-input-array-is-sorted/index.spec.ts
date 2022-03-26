import { describe, expect, it } from 'vitest'
import { twoSum } from '.'

describe('两数之和 II - 输入有序数组', () => {
  testCase(twoSum)
})

function testCase(fn: (numbers: number[], target: number) => number[]) {
  it.each([
    [[2, 7, 11, 15], 9, [1, 2]],
    [[2, 3, 4], 6, [1, 3]],
    [[-1, 0], -1, [1, 2]],
  ])('示例%#', (numbers, target, expected) => {
    expect(fn(numbers, target)).toStrictEqual(expected)
  })
}
