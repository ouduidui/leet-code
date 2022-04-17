import { expect, it } from 'vitest'
import { Iterator, PeekingIterator } from '.'

it('顶端迭代器', () => {
  const peekingIterator = new PeekingIterator(new Iterator([1, 2, 3])) // [1,2,3]
  expect(peekingIterator.next()).toBe(1) // 返回 1 ，指针移动到下一个元素 [1,2,3]
  expect(peekingIterator.peek()).toBe(2) // 返回 2 ，指针未发生移动 [1,2,3]
  expect(peekingIterator.next()).toBe(2) // 返回 2 ，指针移动到下一个元素 [1,2,3]
  expect(peekingIterator.next()).toBe(3) // 返回 3 ，指针移动到下一个元素 [1,2,3]
  expect(peekingIterator.hasNext()).toBe(false) // 返回 False
})
