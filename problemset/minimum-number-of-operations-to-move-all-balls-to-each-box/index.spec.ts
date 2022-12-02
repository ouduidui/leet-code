import { describe, expect, it } from 'vitest'
import { minOperations } from '.'

describe('移动所有球到每个盒子所需的最小操作数', () => {
  testCase(minOperations)
})

function testCase(fn: (boxes: string) => number[]) {
  it.each([
    ['110', [1, 1, 3]],
    ['001011', [11, 8, 5, 4, 3, 4]],
  ])('示例%#', (boxes, expected) => {
    expect(fn(boxes)).toStrictEqual(expected)
  })
}
