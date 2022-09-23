import { ListNode } from '~/utils/listNode'

/**
 * 单向链表
 */
export class MyLinkedList {
  private _size = 0
  private _head = new ListNode(0)

  get(index: number): number {
    if (index < 0 || index >= this._size)
      return -1

    let cur = this._head
    for (let i = 0; i <= index; i++)
      cur = cur.next!

    return cur.val
  }

  addAtHead(val: number): void {
    this.addAtIndex(0, val)
  }

  addAtTail(val: number): void {
    this.addAtIndex(this._size, val)
  }

  addAtIndex(index: number, val: number): void {
    if (index > this._size)
      return

    index = Math.max(0, index)
    this._size++
    let pred = this._head
    for (let i = 0; i < index; i++)
      pred = pred.next!

    const toAdd = new ListNode(val, pred.next)
    pred.next = toAdd
  }

  deleteAtIndex(index: number): void {
    if (index < 0 || index >= this._size)
      return

    this._size--
    let pred = this._head
    for (let i = 0; i < index; i++) {
      pred = pred.next!
      pred.next = pred.next!.next
    }
  }
}
