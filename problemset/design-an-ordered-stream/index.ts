/**
 * 使用数组存储 + 遍历
 */
export class OrderedStream {
  private ptr = 1
  private stream: string[]

  constructor(n: number) {
    this.stream = new Array(n + 1)
  }

  insert(idKey: number, value: string): string[] {
    this.stream[idKey] = value
    const res: string[] = []
    while (this.ptr < this.stream.length && this.stream[this.ptr]) {
      res.push(this.stream[this.ptr])
      this.ptr++
    }

    return res
  }
}
