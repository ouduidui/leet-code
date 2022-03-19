# 检测正方形

> 难度：中等
>
> https://leetcode-cn.com/problems/detect-squares/

## 题目

给你一个在 `X-Y` 平面上的点构成的数据流。设计一个满足下述要求的算法：

- **添加** 一个在数据流中的新点到某个数据结构中。可以添加 **重复** 的点，并会视
  作不同的点进行处理。
- 给你一个查询点，请你从数据结构中选出三个点，使这三个点和查询点一同构成一个
  **面积为正** 的 **轴对齐正方形** ，**统计** 满足该要求的方案数目。

**轴对齐正方形** 是一个正方形，除四条边长度相同外，还满足每条边都与 x-轴 或 y-轴
平行或垂直。

实现 `DetectSquares` 类：

- `DetectSquares()` 使用空数据结构初始化对象
- `void add(int[] point)` 向数据结构添加一个新的点 `point = [x, y]`
- `int count(int[] point)` 统计按上述方式与点 `point = [x, y]` 共同构造 **轴对齐
  正方形** 的方案数。

### 示例

![detect-squares](https://user-images.githubusercontent.com/54696834/159102056-1f78a9b2-14ca-4416-9b54-69581e5bc29d.png)

```
输入：
["DetectSquares", "add", "add", "add", "count", "count", "add", "count"]
[[], [[3, 10]], [[11, 2]], [[3, 2]], [[11, 10]], [[14, 8]], [[11, 2]], [[11, 10]]]
输出：
[null, null, null, null, 1, 0, null, 2]

解释：
DetectSquares detectSquares = new DetectSquares();
detectSquares.add([3, 10]);
detectSquares.add([11, 2]);
detectSquares.add([3, 2]);
detectSquares.count([11, 10]); // 返回 1 。你可以选择：
                               //   - 第一个，第二个，和第三个点
detectSquares.count([14, 8]);  // 返回 0 。查询点无法与数据结构中的这些点构成正方形。
detectSquares.add([11, 2]);    // 允许添加重复的点。
detectSquares.count([11, 10]); // 返回 2 。你可以选择：
                               //   - 第一个，第二个，和第三个点
                               //   - 第一个，第三个，和第四个点
```

## 解题

```typescript
/**
 * 哈希表
 * @desc 时间复杂度 O(1)  空间复杂度 O(1)
 */
export class DetectSquares {
  // 坐标点哈希表 -> Map<纵坐标y, Map<横坐标x, 数量>>
  coordinate = new Map<number, Map<number, number>>();

  /**
   * 将point存入哈希表
   * @param point {[number, number]}
   */
  add([x, y]: [number, number]): void {
    // 如果没有该y轴数据，则初始化
    if (!this.coordinate.has(y)) {
      this.coordinate.set(y, new Map());
    }
    const yCoordinate = this.coordinate.get(y)!;
    // 更新数量
    yCoordinate.set(x, (yCoordinate.get(x) || 0) + 1);
  }

  /**
   * 计算已有的坐标点能与传入的坐标点组成几个正方形
   * @param point {[number, number]}
   */
  count([x, y]: [number, number]): number {
    let res = 0;
    // 如果已有坐标点没有纵坐标等于y的点，则代表无法组成正方形
    if (!this.coordinate.has(y)) {
      return 0;
    }
    // 获取纵坐标为y的哈希表
    const yCoordinate = this.coordinate.get(y)!;
    // 遍历哈希表
    this.coordinate.forEach((value, key) => {
      if (key !== y) {
        // 获取正方形的边长
        const len = key - y;
        // 横坐标为x的数量 * 横坐标为x+len且纵坐标为y的数量 * 横坐标为x+len的数量
        res +=
          (value.get(x) || 0) *
          (yCoordinate.get(x + len) || 0) *
          (value.get(x + len) || 0);
        // 横坐标为x的数量 * 横坐标为x-len且纵坐标为y的数量 * 横坐标为x-len的数量
        res +=
          (value.get(x) || 0) *
          (yCoordinate.get(x - len) || 0) *
          (value.get(x - len) || 0);
      }
    });

    return res;
  }
}
```
