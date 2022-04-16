import { describe, it } from 'vitest'
import { groupAnagrams } from '.'
import { twoDimensionalArrayEqual } from '~/utils/tools'

describe('字母异位词分组', () => {
  describe('排序', () => {
    testCase(groupAnagrams)
  })
})

function testCase(fn: (strs: string[]) => string[][]) {
  it.each([
    [
      ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'],
      [['bat'], ['nat', 'tan'], ['ate', 'eat', 'tea']],
    ],
    [
      [''],
      [['']],
    ],
    [
      ['a'],
      [['a']],
    ],
  ])('示例%#', (strs, expected) => {
    twoDimensionalArrayEqual(fn(strs), expected, true)
  })
}
