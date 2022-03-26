/**
 * 哈希表
 * @desc 时间复杂度 O(1)  空间复杂度 O(1)
 */
export class DetectSquares {
  // 坐标点哈希表 -> Map<纵坐标y, Map<横坐标x, 数量>>
  coordinate = new Map<number, Map<number, number>>()

  /**
   * 将point存入哈希表
   * @param point {[number, number]}
   */
  add([x, y]: [number, number]): void {
    // 如果没有该y轴数据，则初始化
    if (!this.coordinate.has(y))
      this.coordinate.set(y, new Map())

    const yCoordinate = this.coordinate.get(y)!
    // 更新数量
    yCoordinate.set(x, (yCoordinate.get(x) || 0) + 1)
  }

  /**
   * 计算已有的坐标点能与传入的坐标点组成几个正方形
   * @param point {[number, number]}
   */
  count([x, y]: [number, number]): number {
    let res = 0
    // 如果已有坐标点没有纵坐标等于y的点，则代表无法组成正方形
    if (!this.coordinate.has(y))
      return 0

    // 获取纵坐标为y的哈希表
    const yCoordinate = this.coordinate.get(y)!
    // 遍历哈希表
    this.coordinate.forEach((value, key) => {
      if (key !== y) {
        // 获取正方形的边长
        const len = key - y
        // 横坐标为x的数量 * 横坐标为x+len且纵坐标为y的数量 * 横坐标为x+len的数量
        res
          += (value.get(x) || 0)
          * (yCoordinate.get(x + len) || 0)
          * (value.get(x + len) || 0)
        // 横坐标为x的数量 * 横坐标为x-len且纵坐标为y的数量 * 横坐标为x-len的数量
        res
          += (value.get(x) || 0)
          * (yCoordinate.get(x - len) || 0)
          * (value.get(x - len) || 0)
      }
    })

    return res
  }
}
