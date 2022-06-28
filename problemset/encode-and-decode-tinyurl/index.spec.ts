import { expect, it } from 'vitest'
import { decode, encode } from '.'

it('TinyURL 的加密与解密', () => {
  const url = 'https://leetcode.com/problems/design-tinyurl'
  const tinyUrl = encode(url)
  expect(tinyUrl).not.toBe(url)
  expect(decode(tinyUrl)).toBe(url)
})
