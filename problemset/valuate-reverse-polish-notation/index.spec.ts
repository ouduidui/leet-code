import { describe, expect, it } from 'vitest'
import { evalRPN } from '.'

describe('逆波兰表达式求值', () => {
  testCase(evalRPN)
})

function testCase(fn: (tokens: string[]) => number) {
  it.each([
    [['2', '1', '+', '3', '*'], 9],
    [['4', '13', '5', '/', '+'], 6],
    [['10', '6', '9', '3', '+', '-11', '*', '/', '*', '17', '+', '5', '+'], 22],
  ])('示例%#', (tokens, expected) => {
    expect(fn(tokens)).toBe(expected)
  })
}
