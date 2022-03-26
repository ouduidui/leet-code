export class MinStack {
  stack: number[] = []
  minStack: number[] = [Infinity]

  push(val: number): void {
    this.stack.push(val)
    this.minStack.push(Math.min(val, this.minStack[this.minStack.length - 1]))
  }

  pop(): void {
    this.stack.pop()
    this.minStack.pop()
  }

  top(): number {
    return this.stack[this.stack.length - 1]
  }

  getMin(): number {
    return this.minStack[this.minStack.length - 1]
  }
}
