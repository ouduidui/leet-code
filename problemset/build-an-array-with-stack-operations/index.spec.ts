import { describe, expect, it } from 'vitest'
import { buildArray } from '.'

describe('用栈操作构建数组', () => {
  testCase(buildArray)
})

function testCase(fn: typeof buildArray) {
  it.each([
    [
      [1, 3], 3, ['Push', 'Push', 'Pop', 'Push'],
    ],
    [
      [1, 2, 3], 3, ['Push', 'Push', 'Push'],
    ],
    [
      [1, 2], 4, ['Push', 'Push'],
    ],
  ])('示例%#', (target, n, expected) => {
    expect(fn(target, n)).toStrictEqual(expected)
  })
}
