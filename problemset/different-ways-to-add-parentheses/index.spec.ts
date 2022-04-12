import { describe, expect, it } from 'vitest'
import { diffWaysToCompute } from '.'

describe('为运算表达式设计优先级', () => {
  testCase(diffWaysToCompute)
})

function testCase(fn: (expression: string) => number[]) {
  it.each([
    ['2-1-1', [2, 0]],
    ['2*3-4*5', [-34, -10, -14, -10, 10]],
  ])('示例%#', (expression, expected) => {
    expect(fn(expression)).toStrictEqual(expected)
  })
}
