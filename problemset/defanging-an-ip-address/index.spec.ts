import { describe, expect, it } from 'vitest'
import { defangIPaddr } from '.'

describe('IP地址无效化', () => {
  testCase(defangIPaddr)
})

function testCase(fn: (address: string) => string) {
  it.each([
    [
      '1.1.1.1',
      '1[.]1[.]1[.]1',
    ],
    [
      '255.100.50.0',
      '255[.]100[.]50[.]0',
    ],
  ])('示例%#', (address, expected) => {
    expect(fn(address)).toBe(expected)
  })
}
