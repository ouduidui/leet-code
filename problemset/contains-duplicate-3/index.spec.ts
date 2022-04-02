import { describe, expect, it } from 'vitest'
import { containsNearbyAlmostDuplicate, containsNearbyAlmostDuplicate2 } from '.'

describe('存在重复元素 III', () => {
  describe('滑动窗口 + 哈希表', () => {
    testCase(containsNearbyAlmostDuplicate)
  })

  describe('桶 + 哈希表', () => {
    testCase(containsNearbyAlmostDuplicate2)
  })
})

function testCase(fn: (nums: number[], k: number, t: number) => boolean) {
  it.each([
    [[1, 2, 3, 1], 3, 0, true],
    [[1, 0, 1, 1], 1, 2, true],
    [[1, 5, 9, 1, 5, 9], 2, 3, false],
  ])('示例%#', (nums, k, t, expected) => {
    expect(fn(nums, k, t)).toBe(expected)
  })
}
