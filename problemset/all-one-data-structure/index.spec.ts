import { expect, it } from 'vitest'
import { AllOne } from '.'

it('全 O(1) 的数据结构', () => {
  const allOne = new AllOne()
  allOne.inc('hello')
  allOne.inc('hello')

  expect(allOne.getMaxKey()).toBe('hello')
  expect(allOne.getMinKey()).toBe('hello')
  allOne.inc('leet')
  expect(allOne.getMaxKey()).toBe('hello')
  expect(allOne.getMinKey()).toBe('leet')
})
