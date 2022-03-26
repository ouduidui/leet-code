import { describe, expect, it } from 'vitest'
import { fullJustify } from '.'

describe('文本左右对齐', () => {
  describe('模拟', () => {
    testCase(fullJustify)
  })
})

function testCase(fn: (words: string[], maxWidth: number) => string[]) {
  it.each([
    [
      ['This', 'is', 'an', 'example', 'of', 'text', 'justification.'],
      16,
      ['This    is    an', 'example  of text', 'justification.  '],
    ],
    [
      ['What', 'must', 'be', 'acknowledgment', 'shall', 'be'],
      16,
      ['What   must   be', 'acknowledgment  ', 'shall be        '],
    ],
    [
      [
        'Science',
        'is',
        'what',
        'we',
        'understand',
        'well',
        'enough',
        'to',
        'explain',
        'to',
        'a',
        'computer.',
        'Art',
        'is',
        'everything',
        'else',
        'we',
        'do',
      ],
      20,
      [
        'Science  is  what we',
        'understand      well',
        'enough to explain to',
        'a  computer.  Art is',
        'everything  else  we',
        'do                  ',
      ],
    ],
  ])('示例%#', (words, maxWidth, expected) => {
    expect(fn(words, maxWidth)).toStrictEqual(expected)
  })
}
