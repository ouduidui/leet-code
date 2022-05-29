import { describe, expect, it } from 'vitest'
import { validIPAddress } from '.'

describe('验证IP地址', () => {
  testCase(validIPAddress)
})

function testCase(fn: (queryIP: string) => 'IPv4' | 'IPv6' | 'Neither') {
  it.each([
    [
      '172.16.254.1',
      'IPv4',
    ],
    [
      '2001:0db8:85a3:0:0:8A2E:0370:7334',
      'IPv6',
    ],
    [
      '256.256.256.256',
      'Neither',
    ],
    [
      '"1e1.4.5.6"',
      'Neither',
    ],
  ])('示例%#', (queryIP, expected) => {
    expect(fn(queryIP)).toBe(expected)
  })
}
