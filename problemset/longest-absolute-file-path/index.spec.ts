import { describe, expect, it } from 'vitest'
import { lengthLongestPath } from '.'

describe('文件的最长绝对路径', () => {
  testCase(lengthLongestPath)
})

function testCase(fn: (input: string) => number) {
  it.each([
    ['dir\n\tsubdir1\n\tsubdir2\n\t\tfile.ext', 20],
    ['dir\n\tsubdir1\n\t\tfile1.ext\n\t\tsubsubdir1\n\tsubdir2\n\t\tsubsubdir2\n\t\t\tfile2.ext', 32],
    ['a', 0],
    ['file1.txt\nfile2.txt\nlongfile.txt', 12],
  ])('示例%#', (input, expected) => {
    expect(fn(input)).toBe(expected)
  })
}
