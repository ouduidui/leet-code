
import { describe, expect, it } from 'vitest'
import { uniqueMorseRepresentations } from '.'

describe('唯一摩尔斯密码词', () => {
  testCase(uniqueMorseRepresentations)
})

function testCase(fn: (words: string[]) => number) {
  it.each([
    [['gin', 'zen', 'gig', 'msg'], 2],
    [['a'], 1],
  ])('示例%#', (words, expected) => {
    expect(fn(words)).toBe(expected)
  })
}
