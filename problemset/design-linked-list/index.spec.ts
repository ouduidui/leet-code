import { expect, it } from 'vitest'
import { MyLinkedList } from '.'

it('设计链表', () => {
  testCase(MyLinkedList)
})

type CtorType = new () => {
  get: (index: number) => number
  addAtHead: (val: number) => void
  addAtTail: (val: number) => void
  addAtIndex: (index: number, val: number) => void
  deleteAtIndex: (index: number) => void
}

function testCase(Ctor: CtorType) {
  const linkedList = new Ctor()
  linkedList.addAtHead(1)
  linkedList.addAtTail(3)
  linkedList.addAtIndex(1, 2) // 链表变为1-> 2-> 3
  expect(linkedList.get(1)).toBe(2) // 返回2
  linkedList.deleteAtIndex(1) // 现在链表是1-> 3
  expect(linkedList.get(1)).toBe(3) // 返回3
}
