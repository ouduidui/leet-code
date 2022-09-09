import { describe, expect, it } from 'vitest'
import { minOperations } from '.'

describe('文件夹操作日志搜集器', () => {
  testCase(minOperations)
})

function testCase(fn: (logs: string[]) => number) {
  it.each([
    [
      ['d1/', 'd2/', '../', 'd21/', './'],
      2,
    ],
    [
      ['d1/', 'd2/', './', 'd3/', '../', 'd31/'],
      3,
    ],
    [
      ['d1/', '../', '../', '../'],
      0,
    ],
  ])('示例%#', (logs, expected) => {
    expect(fn(logs)).toBe(expected)
  })
}
