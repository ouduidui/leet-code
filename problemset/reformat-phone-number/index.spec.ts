import { describe, expect, it } from 'vitest'
import { reformatNumber } from '.'

describe('重新格式化电话号码', () => {
  testCase(reformatNumber)
})

function testCase(fn: (number: string) => string) {
  it.each([
    [
      '1-23-45 6',
      '123-456',
    ],
    [
      '123 4-567',
      '123-45-67',
    ],
    [
      '123 4-5678',
      '123-456-78',
    ],
    [
      '12',
      '12',
    ],
    [
      '--17-5 229 35-39475 ',
      '175-229-353-94-75',
    ],
  ])('示例%#', (number, expected) => {
    expect(fn(number)).toBe(expected)
  })
}
