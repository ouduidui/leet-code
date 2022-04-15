import { describe, expect, it } from 'vitest'
import { reverseOnlyLetters } from '.'

describe('仅仅反转字母', () => {
  testCase(reverseOnlyLetters)
})

function testCase(fn: (s: string) => string) {
  it.each([
    ['ab-cd', 'dc-ba'],
    ['a-bC-dEf-ghIj', 'j-Ih-gfE-dCba'],
    ['Test1ng-Leet=code-Q!', 'Qedo1ct-eeLg=ntse-T!'],
  ])('示例%#', (s, expected) => {
    expect(fn(s)).toBe(expected)
  })
}
