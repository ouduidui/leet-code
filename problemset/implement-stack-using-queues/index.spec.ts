import { expect, it } from 'vitest'
import { MyStack } from '.'

it('用队列实现栈', () => {
  const stack = new MyStack<Number>()
  stack.push(1)
  stack.push(2)
  expect(stack.top()).toBe(2)
  expect(stack.pop()).toBe(2)
  expect(stack.empty()).toBe(false)
})
