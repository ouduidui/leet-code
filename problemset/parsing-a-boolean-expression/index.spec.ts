import { describe, expect, it } from 'vitest'
import { parseBoolExpr } from '.'

describe('解析布尔表达式', () => {
  testCase(parseBoolExpr)
})

function testCase(fn: (expression: string) => boolean) {
  it.each([
    ['!(f)', true],
    ['|(f,t)', true],
    ['&(t,f)', false],
    ['|(&(t,f,t),!(t))', false],
  ])('示例%#', (expression, expected) => {
    expect(fn(expression)).toBe(expected)
  })
}
