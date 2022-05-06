/**
 * 队列
 */
export class RecentCounter {
  private requests: number[] = []

  ping(t: number): number {
    this.requests.push(t)
    while (this.requests[0] < t - 3000)
      this.requests.shift()
    return this.requests.length
  }
}
