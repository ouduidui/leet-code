import { describe, expect, it } from 'vitest'
import { countMatches } from '.'

describe('统计匹配检索规则的物品数量', () => {
  testCase(countMatches)
})

function testCase(fn: typeof countMatches) {
  it.each([
    [[['phone', 'blue', 'pixel'], ['computer', 'silver', 'lenovo'], ['phone', 'gold', 'iphone']], 'color', 'silver', 1],
    [[['phone', 'blue', 'pixel'], ['computer', 'silver', 'lenovo'], ['phone', 'gold', 'iphone']], 'type', 'phone', 2],
  ])('示例%#', (items, ruleKey, ruleValue, expected) => {
    expect(fn(items, ruleKey, ruleValue)).toBe(expected)
  })
}
