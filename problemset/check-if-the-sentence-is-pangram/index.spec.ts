import { describe, expect, it } from 'vitest'
import { checkIfPangram } from '.'

describe('判断句子是否为全字母句', () => {
  testCase(checkIfPangram)
})

function testCase(fn: (sentence: string) => boolean) {
  it.each([
    ['thequickbrownfoxjumpsoverthelazydog', true],
    ['leetcode', false],
  ])('示例%#', (sentence, expected) => {
    expect(fn(sentence)).toBe(expected)
  })
}
