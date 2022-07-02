/**
 * 优先队列
 */
export class PriorityQueue<T> {
  _data: T[] = []
  size = 0

  constructor(
    private _compare: (a: T, b: T) => boolean,
  ) { }

  /**
   * 判断队列是否为空
   * @returns
   */
  isEmpty(): boolean {
    return this.size === 0
  }

  /**
   * 获取队头的值
   * @returns
   */
  peek(): T | null {
    return this.size === 0 ? null : this._data[0]
  }

  /**
   * 入队操作
   * @param val
   */
  offer(val: T) {
    this._data.push(val)
    // 将优先级最高的放置队尾
    this._shiftUp(this.size++)
  }

  /**
   * 弹出队尾的值
   * @returns
   */
  poll() {
    if (this.size === 0) return null

    this._swap(0, --this.size)
    // 将优先级最高的放置队尾
    this._shiftDown(0)
    return this._data.pop()
  }

  private _parent(index: number): number {
    return index - 1 >> 1
  }

  private _child(index: number): number {
    return (index << 1) + 1
  }

  private _shiftUp(index: number) {
    while (this._parent(index) >= 0
      && this._compare(this._data[index], this._data[this._parent(index)])) {
      this._swap(index, this._parent(index))
      index = this._parent(index)
    }
  }

  private _shiftDown(index: number) {
    while (this._child(index) < this.size) {
      let child = this._child(index)
      if (child + 1 < this.size && this._compare(this._data[child + 1], this._data[child]))
        child = child + 1

      if (this._compare(this._data[index], this._data[child]))
        break

      this._swap(index, child)
      index = child
    }
  }

  /**
   * 调换顺序
   * @param a
   * @param b
   */
  private _swap(a: number, b: number) {
    [this._data[a], this._data[b]] = [this._data[b], this._data[a]]
  }
}
