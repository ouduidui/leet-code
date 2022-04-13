import { expect, it } from 'vitest'
import { RandomizedSet } from '.'

it('O(1) 时间插入、删除和获取随机元素', () => {
  const randomizedSet = new RandomizedSet()
  expect(randomizedSet.insert(1)).toBe(true) // 向集合中插入 1 。返回 true 表示 1 被成功地插入。
  expect(randomizedSet.remove(2)).toBe(false) // 返回 false ，表示集合中不存在 2 。
  expect(randomizedSet.insert(2)).toBe(true) // 向集合中插入 2 。返回 true 。集合现在包含 [1,2] 。
  expect(randomizedSet.getRandom()).toMatch(/1|2/) // getRandom 应随机返回 1 或 2 。
  expect(randomizedSet.remove(1)).toBe(true) // 从集合中移除 1 ，返回 true 。集合现在包含 [2] 。
  expect(randomizedSet.insert(2)).toBe(false) // 2 已在集合中，所以返回 false 。
  expect(randomizedSet.getRandom()).toBe(2) // 由于 2 是集合中唯一的数字，getRandom 总是返回 2 。
})
