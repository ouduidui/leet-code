export class MyStack<T = number> {
  queue = new Array<T>()

  /**
   * 入栈
   * @param x
   */
  push(x: T): void {
    let len = this.queue.length
    this.queue.unshift(x)
    while (len) {
      this.queue.unshift(this.queue.pop()!)
      len--
    }
  }

  /**
   * 出栈
   * @returns
   */
  pop(): T {
    return this.queue.pop()!
  }

  /**
   * 获取栈顶元素
   * @returns
   */
  top(): T {
    return this.queue[this.queue.length - 1]
  }

  /**
   * 判断栈是否为空
   * @returns
   */
  empty(): boolean {
    return this.queue.length === 0
  }
}
