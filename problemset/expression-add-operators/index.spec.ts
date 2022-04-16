import { describe, expect, it } from 'vitest'
import { addOperators } from '.'

describe('给表达式添加运算符', () => {
  testCase(addOperators)
})

function testCase(fn: (num: string, target: number) => string[]) {
  it.each([
    ['123', 6, ['1+2+3', '1*2*3']],
    ['232', 8, ['2*3+2', '2+3*2']],
    ['3456237490', 9191, []],
  ])('示例%#', (num, target, expected) => {
    expect(fn(num, target).sort()).toStrictEqual(expected.sort())
  })
}
