import { describe, expect, it } from 'vitest'
import type { NestedInteger } from './index'
import { deserialize, deserialize2 } from './index'

describe('迷你语法分析器', () => {
  describe('深度优先搜索', () => {
    testCase(deserialize)
  })

  describe('栈', () => {
    testCase(deserialize2)
  })
})

function testCase(fn: (s: string) => NestedInteger) {
  it.each([
    ['324', 324],
    ['[123,[456,[789]]]', [123, [456, [789]]]],
  ])('示例%#', (s, expected) => {
    const ns = fn(s)
    dfs(ns, expected)

    function dfs(ns: NestedInteger, expected: number | unknown[]) {
      if (typeof expected === 'number') {
        expect(ns.isInteger()).toBe(true)
        expect(ns.getList().length).toBe(0)
        expect(ns.getInteger()).toBe(expected)
      }
      else {
        expect(ns.isInteger()).toBe(false)
        const list = ns.getList()
        expect(list.length).toBe(expected.length)
        for (let i = 0; i < list.length; i++)
          dfs(list[i], expected[i] as number | unknown[])
      }
    }
  })
}
