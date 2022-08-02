import { describe, expect, it } from 'vitest'
import { MyCircularQueue } from '.'

describe('设计循环队列', () => {
  testCase(MyCircularQueue)
})

type CtorType = new (k: number) => {
  enQueue: (value: number) => boolean
  deQueue: () => boolean
  Front: () => number
  Rear: () => number
  isEmpty: () => boolean
  isFull: () => boolean
}

function testCase(Ctor: CtorType) {
  it('示例', () => {
    const circularQueue = new Ctor(3) // 设置长度为 3
    expect(circularQueue.enQueue(1)).toBe(true) // 返回 true
    expect(circularQueue.enQueue(2)).toBe(true) // 返回 true
    expect(circularQueue.enQueue(3)).toBe(true) // 返回 true
    expect(circularQueue.enQueue(4)).toBe(false) // 返回 false，队列已满
    expect(circularQueue.Rear()).toBe(3) // 返回 3
    expect(circularQueue.isFull()).toBe(true) // 返回 true
    expect(circularQueue.deQueue()).toBe(true) // 返回 true
    expect(circularQueue.enQueue(4)).toBe(true) // 返回 true
    expect(circularQueue.Rear()).toBe(4) // 返回 4
  })
}
