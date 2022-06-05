/**
 * 拒绝采样
 * @desc 时间复杂度 O(1)  空间复杂度 O(1)
 */
export class Solution {
  constructor(
    private radius: number,
    private x_center: number,
    private y_center: number,
  ) {}

  randPoint(): number[] {
    while (true) {
      const x = this.getRandom()
      const y = this.getRandom()
      if (x ** 2 + y ** 2 <= this.radius ** 2)
        return [this.x_center + x, this.y_center + y]
    }
  }

  private getRandom(): number {
    return Math.random() * (2 * this.radius) - this.radius
  }
}

/**
 * 计算分布函数
 * @desc 时间复杂度 O(1)  空间复杂度 O(1)
 */
export class Solution2 {
  constructor(
    private radius: number,
    private x_center: number,
    private y_center: number,
  ) {}

  randPoint(): number[] {
    const u = Math.random()
    const theta = Math.random() * 2 * Math.PI
    const r = Math.sqrt(u)
    return [
      this.x_center + r * Math.cos(theta) * this.radius,
      this.y_center + r * Math.sin(theta) * this.radius,
    ]
  }
}
