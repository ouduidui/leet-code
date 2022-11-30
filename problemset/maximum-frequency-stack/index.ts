/**
 * 哈希表 & 栈
 */
export class FreqStack {
  private freq = new Map<number, number>()
  private group = new Map<number, number[]>()
  private maxFreq = 0

  push(val: number): void {
    this.freq.set(val, (this.freq.get(val) || 0) + 1)
    if (!this.group.has(this.freq.get(val)!))
      this.group.set(this.freq.get(val)!, [])

    this.group.get(this.freq.get(val)!)?.push(val)
    this.maxFreq = Math.max(this.maxFreq, this.freq.get(val)!)
  }

  pop(): number {
    const val = this.group.get(this.maxFreq)![this.group.get(this.maxFreq)!.length - 1]
    this.freq.set(val, this.freq.get(val)! - 1)
    this.group.get(this.maxFreq)!.pop()

    if (this.group.get(this.maxFreq)!.length === 0)
      this.maxFreq--

    return val
  }
}
