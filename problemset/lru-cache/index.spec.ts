import { expect, it } from 'vitest'
import { LRUCache } from '.'

it('LRU缓存', () => {
  const obj = new LRUCache(2)
  obj.put(1, 1)
  obj.put(2, 2)
  expect(obj.get(1)).toBe(1)
  obj.put(3, 3)
  expect(obj.get(2)).toBe(-1)
  obj.put(4, 4)
  expect(obj.get(1)).toBe(-1)
  expect(obj.get(3)).toBe(3)
  expect(obj.get(4)).toBe(4)
})
