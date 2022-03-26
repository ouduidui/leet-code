import { describe, expect, it } from 'vitest'
import { restoreIpAddresses } from '.'
// need refactor
describe('复原IP地址', () => {
  testCase(restoreIpAddresses)
})

function testCase(fn: (s: string) => string[]) {
  it('示例一', () => {
    const s = '25525511135'
    const expected = ['255.255.11.135', '255.255.111.35']
    expect(fn(s)).toStrictEqual(expected)
  })

  it('示例二', () => {
    const s = '0000'
    const expected = ['0.0.0.0']
    expect(fn(s)).toStrictEqual(expected)
  })

  it('示例三', () => {
    const s = '1111'
    const expected = ['1.1.1.1']
    expect(fn(s)).toStrictEqual(expected)
  })

  it('示例四', () => {
    const s = '010010'
    const expected = ['0.10.0.10', '0.100.1.0']
    expect(fn(s)).toStrictEqual(expected)
  })
  it('示例五', () => {
    const s = '101023'
    const expected = [
      '1.0.10.23',
      '1.0.102.3',
      '10.1.0.23',
      '10.10.2.3',
      '101.0.2.3',
    ]
    expect(fn(s)).toStrictEqual(expected)
  })
}
