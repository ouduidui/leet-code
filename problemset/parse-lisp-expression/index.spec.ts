import { describe, expect, it } from 'vitest'
import { evaluate, evaluate2 } from '.'

describe('Lisp 语法解析', () => {
  describe('递归解析', () => testCase(evaluate))
  describe('状态机', () => testCase(evaluate2))
})

function testCase(fn: (expression: string) => number) {
  it.each([
    ['(let x 2 (mult x (let x 3 y 4 (add x y))))', 14],
    ['(let x 3 x 2 x)', 2],
    ['(let x 1 y 2 x (add x y) (add x y))', 5],
  ])('示例%#', (expression, expected) => {
    expect(fn(expression)).toBe(expected)
  })
}
