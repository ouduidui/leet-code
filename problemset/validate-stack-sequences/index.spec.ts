import { describe, expect, it } from 'vitest'
import { validateStackSequences } from '.'

describe('验证栈序列', () => {
  testCase(validateStackSequences)
})

function testCase(fn: (pushed: number[], popped: number[]) => boolean) {
  it.each([
    [
      [1, 2, 3, 4, 5],
      [4, 5, 3, 2, 1],
      true,
    ],
    [
      [1, 2, 3, 4, 5],
      [4, 3, 5, 1, 2],
      false,
    ],
  ])('示例%#', (pushed, popped, expected) => {
    expect(fn(pushed, popped)).toBe(expected)
  })
}
