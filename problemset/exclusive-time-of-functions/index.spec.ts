import { describe, expect, it } from 'vitest'
import { exclusiveTime } from '.'

describe('函数的独占时间', () => {
  testCase(exclusiveTime)
})

function testCase(fn: (n: number, logs: string[]) => number[]) {
  it.each([
    [
      2,
      ['0:start:0', '1:start:2', '1:end:5', '0:end:6'],
      [3, 4],
    ],
    [
      1,
      ['0:start:0', '0:start:2', '0:end:5', '0:start:6', '0:end:6', '0:end:7'],
      [8],
    ],
    [
      2,
      ['0:start:0', '0:start:2', '0:end:5', '1:start:6', '1:end:6', '0:end:7'],
      [7, 1],
    ],
    [
      2,
      ['0:start:0', '0:start:2', '0:end:5', '1:start:7', '1:end:7', '0:end:8'],
      [8, 1],
    ],
    [
      1,
      ['0:start:0', '0:end:0'],
      [1],
    ],
  ])('示例%#', (n, logs, expected) => {
    expect(fn(n, logs)).toStrictEqual(expected)
  })
}
