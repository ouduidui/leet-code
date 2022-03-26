import { describe, expect, it } from 'vitest'
import { validUtf8 } from '.'

describe('UTF-8 编码验证', () => {
  testCase(validUtf8)
})

function testCase(fn: (data: number[]) => boolean) {
  it.each([
    [[197, 130, 1], true],
    [[235, 140, 4], false],
  ])('示例%#', (data, expected) => {
    expect(fn(data)).toBe(expected)
  })
}
