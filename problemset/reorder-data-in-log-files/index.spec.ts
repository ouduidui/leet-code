import { describe, expect, it } from 'vitest'
import { reorderLogFiles } from '.'

describe('重新排列日志文件', () => {
  testCase(reorderLogFiles)
})

function testCase(fn: (logs: string[]) => string[]) {
  it.each([
    [
      ['dig1 8 1 5 1', 'let1 art can', 'dig2 3 6', 'let2 own kit dig', 'let3 art zero'],
      ['let1 art can', 'let3 art zero', 'let2 own kit dig', 'dig1 8 1 5 1', 'dig2 3 6'],
    ],
    [
      ['a1 9 2 3 1', 'g1 act car', 'zo4 4 7', 'ab1 off key dog', 'a8 act zoo'],
      ['g1 act car', 'a8 act zoo', 'ab1 off key dog', 'a1 9 2 3 1', 'zo4 4 7'],
    ],
    [
      ['1 n u', 'r 527', 'j 893', '6 14', '6 82'],
      ['1 n u', 'r 527', 'j 893', '6 14', '6 82'],
    ],
  ])('示例%#', (logs, expected) => {
    expect(fn(logs)).toStrictEqual(expected)
  })
}
