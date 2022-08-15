import { expect, it } from 'vitest'
import { MyCircularDeque } from '.'

it('设计循环双端队列', () => {
  const circularDeque = new MyCircularDeque(3) // 设置容量大小为3
  expect(circularDeque.insertLast(1)).toBe(true) // 返回 true
  expect(circularDeque.insertLast(2)).toBe(true) // 返回 true
  expect(circularDeque.insertFront(3)).toBe(true) // 返回 true
  expect(circularDeque.insertFront(4)).toBe(false) // 已经满了，返回 false
  expect(circularDeque.getRear()).toBe(2) // 返回 2
  expect(circularDeque.isFull()).toBe(true)// 返回 true
  expect(circularDeque.deleteLast()).toBe(true)// 返回 true
  expect(circularDeque.insertFront(4)).toBe(true) // 返回 true
  expect(circularDeque.getFront()).toBe(4) // 返回 4
})
