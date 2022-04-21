import { describe, expect, it } from 'vitest'
import { toGoatLatin } from '.'

describe('山羊拉丁文', () => {
  testCase(toGoatLatin)
})

function testCase(fn: (sentence: string) => string) {
  it.each([
    [
      'I speak Goat Latin',
      'Imaa peaksmaaa oatGmaaaa atinLmaaaaa',
    ],
    [
      'The quick brown fox jumped over the lazy dog',
      'heTmaa uickqmaaa rownbmaaaa oxfmaaaaa umpedjmaaaaaa overmaaaaaaa hetmaaaaaaaa azylmaaaaaaaaa ogdmaaaaaaaaaa',
    ],
    [
      'Each word consists of lowercase and uppercase letters only',
      'Eachmaa ordwmaaa onsistscmaaaa ofmaaaaa owercaselmaaaaaa andmaaaaaaa uppercasemaaaaaaaa etterslmaaaaaaaaa onlymaaaaaaaaaa',
    ],
  ])('示例%#', (sentence, expected) => {
    expect(fn(sentence)).toBe(expected)
  })
}
