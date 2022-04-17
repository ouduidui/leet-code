export class Iterator<T = number> {
  constructor(private arr: T[]) {}

  hasNext(): boolean {
    return this.arr.length > 0
  }

  next(): T {
    return this.arr.shift()!
  }
}

export class PeekingIterator<T = number> {
  private nextElement: T | null = null

  constructor(private iterator: Iterator<T>) {
    if (iterator.hasNext())
      this.nextElement = iterator.next()
  }

  peek(): T {
    return this.nextElement!
  }

  next(): T {
    const res = this.nextElement
    if (this.iterator.hasNext())
      this.nextElement = this.iterator.next()
    else
      this.nextElement = null

    return res!
  }

  hasNext(): boolean {
    return this.nextElement !== null
  }
}
