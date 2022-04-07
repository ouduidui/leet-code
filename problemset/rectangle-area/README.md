# 矩形面积

> 难度：中等
>
> https://leetcode-cn.com/problems/rectangle-area/

## 题目

给你 **二维** 平面上两个 **由直线构成且边与坐标轴平行/垂直** 的矩形，请你计算并返回两个矩形覆盖的总面积。

每个矩形由其 **左下** 顶点和 **右上** 顶点坐标表示：

- 第一个矩形由其左下顶点 `(ax1, ay1)` 和右上顶点 `(ax2, ay2)` 定义。
- 第二个矩形由其左下顶点 `(bx1, by1)` 和右上顶点 `(bx2, by2)` 定义。

### 示例

#### 示例 1：

![rectangle-plane](https://user-images.githubusercontent.com/54696834/162101539-4044537e-76bc-4309-a200-08880873c462.png)

```
输入：ax1 = -3, ay1 = 0, ax2 = 3, ay2 = 4, bx1 = 0, by1 = -1, bx2 = 9, by2 = 2
输出：45
```

#### 示例 2：

```
输入：ax1 = -2, ay1 = -2, ax2 = 2, ay2 = 2, bx1 = -2, by1 = -2, bx2 = 2, by2 = 2
输出：16
```

## 解题

```ts
/**
 * 计算重叠面积
 * @desc 时间复杂度 O(1)  空间复杂度 O(1)
 * @param ax1
 * @param ay1
 * @param ax2
 * @param ay2
 * @param bx1
 * @param by1
 * @param bx2
 * @param by2
 * @returns
 */
export function computeArea(
  ax1: number,
  ay1: number,
  ax2: number,
  ay2: number,
  bx1: number,
  by1: number,
  bx2: number,
  by2: number,
): number {
  const area1 = (ax2 - ax1) * (ay2 - ay1)
  const area2 = (bx2 - bx1) * (by2 - by1)
  const overlapWidth = Math.min(ax2, bx2) - Math.max(ax1, bx1)
  const overlapHeight = Math.min(ay2, by2) - Math.max(ay1, by1)
  const overlapArea = Math.max(overlapWidth, 0) * Math.max(overlapHeight, 0)
  return area1 + area2 - overlapArea
}
```