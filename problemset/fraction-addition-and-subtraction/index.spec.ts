import { describe, expect, it } from 'vitest'
import { fractionAddition } from '.'

describe('分数加减运算', () => {
  testCase(fractionAddition)
})

function testCase(fn: (expression: string) => string) {
  it.each([
    [
      '-1/2+1/2',
      '0/1',
    ],
    [
      '-1/2+1/2+1/3',
      '1/3',
    ],
    [
      '1/3-1/2',
      '-1/6',
    ],
    [
      '7/2+2/3-3/4',
      '41/12',
    ],
  ])('示例%#', (expression, expected) => {
    expect(fn(expression)).toBe(expected)
  })
}
