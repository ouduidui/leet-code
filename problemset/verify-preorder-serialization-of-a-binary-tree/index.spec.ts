import { describe, expect, it } from 'vitest'
import { isValidSerialization } from '.'

describe('验证二叉树的前序序列化', () => {
  testCase(isValidSerialization)
})

function testCase(fn: (preorder: string) => boolean) {
  it.each([
    [
      '9,3,4,#,#,1,#,#,2,#,6,#,#',
      true,
    ],
    [
      '1,#',
      false,
    ],
    [
      '9,#,#,1',
      false,
    ],
  ])('示例%#', (preorder, expected) => {
    expect(fn(preorder)).toBe(expected)
  })
}
