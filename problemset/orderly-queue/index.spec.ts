import { describe, expect, it } from 'vitest'
import { orderlyQueue } from '.'

describe('有序队列', () => {
  testCase(orderlyQueue)
})

function testCase(fn: (s: string, k: number) => string) {
  it.each([
    [
      'cba',
      1,
      'acb',
    ],
    [
      'baaca',
      3,
      'aaabc',
    ],
  ])('示例%#', (s, k, expected) => {
    expect(fn(s, k)).toBe(expected)
  })
}
