import { expect, it } from 'vitest'
import { MyQueue } from '.'

it('用栈实现队列', () => {
  const queue = new MyQueue()
  queue.push(1) // queue is: [1]
  queue.push(2) // queue is: [1, 2] (leftmost is front of the queue)
  expect(queue.peek()).toBe(1) // return 1
  expect(queue.pop()).toBe(1) // return 1, queue is [2]
  expect(queue.empty()).toBe(false) // return false
})
