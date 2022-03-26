import { describe, expect, it } from 'vitest'
import { simplifiedFractions } from '.'
// need refactor
describe('最简分数', () => {
  testCase(simplifiedFractions)
})

function testCase(fn: (n: number) => string[]) {
  it('示例一', () => {
    const n = 2
    const expected = ['1/2']
    expect(fn(n)).toStrictEqual(expected)
  })

  it('示例二', () => {
    const n = 3
    const expected = ['1/2', '1/3', '2/3']
    expect(fn(n)).toStrictEqual(expected)
  })

  it('示例三', () => {
    const n = 4
    const expected = ['1/2', '1/3', '2/3', '1/4', '3/4']
    expect(fn(n)).toStrictEqual(expected)
  })

  it('示例四', () => {
    const n = 1
    const expected: string[] = []
    expect(fn(n)).toStrictEqual(expected)
  })
}
