import { describe, expect, it } from 'vitest'
import { diStringMatch } from '.'

describe('增减字符串匹配', () => {
  testCase(diStringMatch)
})

function testCase(fn: (s: string) => number[]) {
  it.each([
    ['IDID', [0, 4, 1, 3, 2]],
    ['III', [0, 1, 2, 3]],
    ['DDI', [3, 2, 0, 1]],
  ])('示例%#', (s, expected) => {
    expect(fn(s)).toStrictEqual(expected)
  })
}
