import { describe, expect, it } from 'vitest'
import { subdomainVisits } from '.'

describe('子域名访问计数', () => {
  testCase(subdomainVisits)
})

function testCase(fn: (cpdomains: string[]) => string[]) {
  it.each([
    [
      ['9001 discuss.leetcode.com'],
      ['9001 leetcode.com', '9001 discuss.leetcode.com', '9001 com'],
    ],
    [
      ['900 google.mail.com', '50 yahoo.com', '1 intel.mail.com', '5 wiki.org'],
      ['901 mail.com', '50 yahoo.com', '900 google.mail.com', '5 wiki.org', '5 org', '1 intel.mail.com', '951 com'],
    ],
  ])('示例%#', (cpdomains, expected) => {
    expect(fn(cpdomains).sort()).toStrictEqual(expected.sort())
  })
}
