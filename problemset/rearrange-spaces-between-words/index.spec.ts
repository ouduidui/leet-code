import { describe, expect, it } from 'vitest'
import { reorderSpaces } from '.'

describe('重新排列单词间的空格', () => {
  testCase(reorderSpaces)
})

function testCase(fn: (text: string) => string) {
  it.each([
    [
      '  this   is  a sentence ',
      'this   is   a   sentence',
    ],
    [
      ' practice   makes   perfect',
      'practice   makes   perfect ',
    ],
    [
      'hello   world',
      'hello   world',
    ],
    [
      '  walks  udp package   into  bar a',
      'walks  udp  package  into  bar  a ',
    ],
    [
      'a',
      'a',
    ],
  ])('示例%#', (text, expected) => {
    expect(fn(text)).toBe(expected)
  })
}
