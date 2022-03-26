import { describe, expect, it } from 'vitest'
import { simplifyPath } from '.'
// need refactor
describe('简化路径', () => {
  describe('栈', () => {
    testCase(simplifyPath)
  })
})

function testCase(fn: (path: string) => string) {
  it('示例一', () => {
    const path = '/home/'
    const expected = '/home'

    expect(fn(path)).toBe(expected)
  })

  it('示例二', () => {
    const path = '/../'
    const expected = '/'

    expect(fn(path)).toBe(expected)
  })

  it('示例三', () => {
    const path = '/home//foo/'
    const expected = '/home/foo'

    expect(fn(path)).toBe(expected)
  })

  it('示例四', () => {
    const path = '/a/./b/../../c/'
    const expected = '/c'

    expect(fn(path)).toBe(expected)
  })
}
