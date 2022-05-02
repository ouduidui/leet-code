import { describe, expect, it } from 'vitest'
import { isValid } from '.'

describe('标签验证器', () => {
  testCase(isValid)
})

function testCase(fn: (code: string) => boolean) {
  it.each([
    ['<DIV>This is the first line <![CDATA[<div>]]></DIV>', true],
    ['<DIV>>>  ![cdata[]] <![CDATA[<div>]>]]>]]>>]</DIV>', true],
    ['<A>  <B> </A>   </B>', false],
    ['<DIV>  div tag is not closed  <DIV>', false],
    ['<DIV>  unmatched <  </DIV>', false],
    ['<DIV> closed tags with invalid tag name  <b>123</b> </DIV>', false],
    ['<DIV> unmatched tags with invalid tag name  </1234567890> and <CDATA[[]]>  </DIV>', false],
    ['<DIV>  unmatched start tag <B>  and unmatched end tag </C>  </DIV>', false],
  ])('示例%#', (code, expected) => {
    expect(fn(code)).toBe(expected)
  })
}
