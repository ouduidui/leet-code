/**
 * 双优先队列 + 模拟
 * @desc 时间复杂度 O((k+n)logk)  空间复杂度 O(k)
 * @param k
 * @param arrival
 * @param load
 * @returns
 */
export function busiestServers(
  k: number,
  arrival: number[],
  load: number[],
): number[] {
  const used = new PriorityQueue<[delay: number, index: number]>((a, b) => a[0] < b[0])
  const available = new PriorityQueue<number>((a, b) => a < b)
  for (let i = 0; i < k; i++)
    available.offer(i)

  const counts = new Array(k).fill(0)
  let maxCount = 0

  // 遍历所有请求
  for (let i = 0; i < arrival.length; i++) {
    const arr = arrival[i]
    const duration = load[i]
    // 找到已经处理完请求的服务器并将其入队等候
    while (used.size > 0 && used.peek()![0] <= arr) {
      const cur = used.poll()!
      available.offer(
        i + ((cur[1] - i) % k + k) % k, // 保证得到的是一个不小于 i 的且与 id 同余的数
      )
    }
    if (available.size > 0) {
      // 找到空闲的服务器下标
      const idx = available.poll()! % k
      used.offer([arr + duration, idx])

      // 更新计数
      counts[idx]++
      maxCount = Math.max(maxCount, counts[idx])
    }
  }

  return counts.reduce((acc, cur, index) => {
    if (cur === maxCount) acc.push(index)
    return acc
  }, [])
}

/**
 * 优先队列
 */
class PriorityQueue<T> {
  _data: T[] = []
  size = 0

  constructor(
    private _compare: (a: T, b: T) => boolean,
  ) {}

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
