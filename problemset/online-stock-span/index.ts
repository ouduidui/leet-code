/**
 * 单调栈
 * @desc 时间复杂度 O(N) 空间复杂度 O(N)
 */
export class StockSpanner {
  private stack: [number, number][] = [[-1, Number.MAX_VALUE]]
  private idx = -1

  next(price: number): number {
    this.idx++
    while (price >= this.stack[this.stack.length - 1][1])
      this.stack.pop()

    const ret = this.idx - this.stack[this.stack.length - 1][0]
    this.stack.push([this.idx, price])
    return ret
  }
}
