import { describe, expect, it } from 'vitest'
import { oneEditAway } from '.'

describe('一次编辑', () => {
  testCase(oneEditAway)
})

function testCase(fn: (first: string, second: string) => boolean) {
  it.each([
    ['pale', 'ple', true],
    ['pales', 'pal', false],
  ])('示例%#', (first, second, expected) => {
    expect(fn(first, second)).toBe(expected)
  })
}
