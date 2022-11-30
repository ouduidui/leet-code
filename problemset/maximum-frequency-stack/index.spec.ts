import { expect, it } from 'vitest'
import { FreqStack } from '.'

it('最大频率栈', () => {
  const freqStack = new FreqStack()
  freqStack.push(5)// 堆栈为 [5]
  freqStack.push(7)// 堆栈是 [5,7]
  freqStack.push(5)// 堆栈是 [5,7,5]
  freqStack.push(7)// 堆栈是 [5,7,5,7]
  freqStack.push(4)// 堆栈是 [5,7,5,7,4]
  freqStack.push(5)// 堆栈是 [5,7,5,7,4,5]
  expect(freqStack.pop()).toBe(5)// 返回 5 ，因为 5 出现频率最高。堆栈变成 [5,7,5,7,4]。
  expect(freqStack.pop()).toBe(7)// 返回 7 ，因为 5 和 7 出现频率最高，但7最接近顶部。堆栈变成 [5,7,5,4]。
  expect(freqStack.pop()).toBe(5)// 返回 5 ，因为 5 出现频率最高。堆栈变成 [5,7,4]。
  expect(freqStack.pop()).toBe(4)// 返回 4 ，因为 4, 5 和 7 出现频率最高，但 4 是最接近顶部的。堆栈变成 [5,7]。
})
