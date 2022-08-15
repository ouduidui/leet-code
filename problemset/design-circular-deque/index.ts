/**
 * 数组
 */
export class MyCircularDeque {
  capacity: number
  rear = 0
  front = 0
  elements: number[]

  constructor(k: number) {
    this.capacity = k + 1
    this.elements = new Array(this.capacity).fill(0)
  }

  insertFront(value: number): boolean {
    if (this.isFull()) return false
    this.front = (this.front - 1 + this.capacity) % this.capacity
    this.elements[this.front] = value
    return true
  }

  insertLast(value: number): boolean {
    if (this.isFull()) return false
    this.elements[this.rear] = value
    this.rear = (this.rear + 1) % this.capacity
    return true
  }

  deleteFront(): boolean {
    if (this.isEmpty()) return false
    this.front = (this.front + 1) % this.capacity
    return true
  }

  deleteLast(): boolean {
    if (this.isEmpty()) return false
    this.rear = (this.rear - 1 + this.capacity) % this.capacity
    return true
  }

  getFront(): number {
    if (this.isEmpty()) return -1
    return this.elements[this.front]
  }

  getRear(): number {
    if (this.isEmpty()) return -1
    return this.elements[(this.rear - 1 + this.capacity) % this.capacity]
  }

  isEmpty(): boolean {
    return this.rear === this.front
  }

  isFull(): boolean {
    return (this.rear + 1) % this.capacity === this.front
  }
}
