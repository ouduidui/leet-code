export class MyQueue<T = number> {
  inStack: T[] = []
  outStack: T[] = []

  push(x: T): void {
    this.inStack.push(x)
  }

  pop(): T {
    if (!this.outStack.length)
      this.inToOut()

    return this.outStack.pop()!
  }

  peek(): T {
    if (!this.outStack.length)
      this.inToOut()

    return this.outStack[this.outStack.length - 1]
  }

  empty(): boolean {
    return this.outStack.length === 0 && this.inStack.length === 0
  }

  private inToOut() {
    while (this.inStack.length)
      this.outStack.push(this.inStack.pop()!)
  }
}
