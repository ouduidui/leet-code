import { describe, expect, it } from 'vitest'
import { solveEquation } from '.'

describe('求解方程', () => {
  testCase(solveEquation)
})

function testCase(fn: (equation: string) => string) {
  it.each([
    [
      'x+5-3+x=6+x-2',
      'x=2',
    ],
    [
      'x=x',
      'Infinite solutions',
    ],
    [
      '2x=x',
      'x=0',
    ],
  ])('示例%#', (equation, expected) => {
    expect(fn(equation)).toBe(expected)
  })
}
