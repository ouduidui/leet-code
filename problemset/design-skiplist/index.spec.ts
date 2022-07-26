import { expect, it } from 'vitest'
import { Skiplist } from '.'

it('设计跳表', () => {
  const skiplist = new Skiplist()
  skiplist.add(1)
  skiplist.add(2)
  skiplist.add(3)
  expect(skiplist.search(0)).toBe(false) // 返回 false
  skiplist.add(4)
  expect(skiplist.search(1)).toBe(true) // 返回 true
  expect(skiplist.erase(0)).toBe(false) // 返回 false，0 不在跳表中
  expect(skiplist.erase(1)).toBe(true) // 返回 true
  expect(skiplist.search(1)).toBe(false) // 返回 false，1 已被擦除
})
