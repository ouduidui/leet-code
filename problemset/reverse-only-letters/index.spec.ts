import { describe, expect, it } from 'vitest'
import { reverseOnlyLetters } from '.'
// need refactor
describe('仅仅反转字母', () => {
  testCase(reverseOnlyLetters)
})

function testCase(fn: (s: string) => string) {
  it('示例一', () => {
    const s = 'ab-cd'
    const expected = 'dc-ba'
    expect(fn(s)).toBe(expected)
  })

  it('示例二', () => {
    const s = 'a-bC-dEf-ghIj'
    const expected = 'j-Ih-gfE-dCba'
    expect(fn(s)).toBe(expected)
  })

  it('示例三', () => {
    const s = 'Test1ng-Leet=code-Q!'
    const expected = 'Qedo1ct-eeLg=ntse-T!'
    expect(fn(s)).toBe(expected)
  })
}
