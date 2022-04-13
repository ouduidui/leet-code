export class RandomizedSet {
  map = new Map<number, number>()
  nums: number[] = []

  /**
   * 插入操作
   * @param val
   * @returns
   */
  insert(val: number): boolean {
    if (this.map.has(val)) return false

    const index = this.nums.length
    this.nums.push(val)
    this.map.set(val, index)
    return true
  }

  /**
   * 移除操作
   * @param val
   * @returns
   */
  remove(val: number): boolean {
    if (!this.map.has(val)) return false

    const id = this.map.get(val)!
    this.nums[id] = this.nums[this.nums.length - 1]
    this.map.set(this.nums[id], id)
    this.nums.pop()
    this.map.delete(val)
    return true
  }

  /**
   * 生成随机值
   * @returns
   */
  getRandom(): number {
    const randomIndex = Math.floor(Math.random() * this.nums.length)
    return this.nums[randomIndex]
  }
}
