/**
 * 队列
 * @desc 时间复杂度 O(1) 空间复杂度 O(N)
 */
export class MovingAverage {
  private queue: number[] = []
  private sum = 0
  constructor(private size: number) { }

  next(val: number): number {
    if (this.queue.length >= this.size)
      this.sum -= this.queue.shift()!

    this.queue.push(val)
    this.sum += val
    return this.sum / this.queue.length
  }
}
