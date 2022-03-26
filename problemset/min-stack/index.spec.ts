import { MinStack } from '.';
import { it, expect } from 'vitest';

it('最小栈', () => {
  const stack = new MinStack();
  stack.push(-2);
  stack.push(0);
  stack.push(-3);
  expect(stack.getMin()).toBe(-3);
  stack.pop();
  expect(stack.top()).toBe(0);
  expect(stack.getMin()).toBe(-2);
});
