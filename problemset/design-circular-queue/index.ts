/**
 * 数组
 * @desc 时间复杂度 O(1)  空间复杂度 O(N)
 */
export class MyCircularQueue {
  private rear = 0
  private front = 0
  private capacity: number
  private elements: number[]
  constructor(k: number) {
    this.capacity = k + 1
    this.elements = new Array(this.capacity).fill(0)
  }

  enQueue(value: number): boolean {
    if (this.isFull()) return false

    this.elements[this.rear] = value
    this.rear = (this.rear + 1) % this.capacity
    return true
  }

  deQueue(): boolean {
    if (this.isEmpty()) return false

    this.front = (this.front + 1) % this.capacity
    return true
  }

  Front(): number {
    if (this.isEmpty()) return -1
    return this.elements[this.front]
  }

  Rear(): number {
    if (this.isEmpty()) return -1
    return this.elements[(this.rear - 1 + this.capacity) % this.capacity]
  }

  isEmpty(): boolean {
    return this.rear === this.front
  }

  isFull(): boolean {
    return ((this.rear + 1) % this.capacity) === this.front
  }
}
