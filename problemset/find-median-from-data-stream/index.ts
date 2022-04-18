import { PriorityQueue } from '~/utils/priorityQueue'

/**
 * 优先队列
 */
export class MedianFinder {
  // 记录小于等于中位数的数值
  private minQueue = new PriorityQueue<number>((a, b) => b < a)
  // 记录大于中位数的数值
  private maxQueue = new PriorityQueue<number>((a, b) => a < b)

  /**
   * 插入数值
   * @desc 时间复杂度 O(logN)  空间复杂度 O(N)
   * @param num
   */
  addNum(num: number): void {
    if (this.minQueue.isEmpty() || num < this.minQueue.peek()!) {
      this.minQueue.offer(num)
      if (this.maxQueue.size + 1 < this.minQueue.size)
        this.maxQueue.offer(this.minQueue.poll()!)
    }
    else {
      this.maxQueue.offer(num)
      if (this.maxQueue.size > this.minQueue.size)
        this.minQueue.offer(this.maxQueue.poll()!)
    }
  }

  /**
   * 获取中位数
   * @desc 时间复杂度 O(1)  空间复杂度 O(N)
   * @returns
   */
  findMedian(): number {
    if (this.minQueue.size > this.maxQueue.size)
      return this.minQueue.peek()!

    return (this.minQueue.peek()! + this.maxQueue.peek()!) / 2
  }
}
