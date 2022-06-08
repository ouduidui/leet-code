# 有效的回旋镖

> 难度：简单
>
> https://leetcode.cn/problems/valid-boomerang/

## 题目

给定一个数组 `points` ，其中 `points[i] = [xi, yi]` 表示 `X-Y` 平面上的一个点，如果这些点构成一个 **回旋镖** 则返回 `true` 。

**回旋镖** 定义为一组三个点，这些点 **各不相同** 且 **不在一条直线上** 。

### 示例

#### 示例 1：

```
输入：points = [[1,1],[2,3],[3,2]]
输出：true
```

#### 示例 2：

```
输入：points = [[1,1],[2,2],[3,3]]
输出：false
```

## 解题

```ts 
/**
 * 向量叉乘
 * @desc 时间复杂度 O(1)  空间复杂度 O(1)
 * @param points
 * @returns
 */
export function isBoomerang(points: number[][]): boolean {
  const [
    [x1, y1], [x2, y2], [x3, y3],
  ] = points

  const v1 = [x2 - x1, y2 - y1]
  const v2 = [x3 - x2, y3 - y2]
  return v1[0] * v2[1] - v1[1] * v2[0] !== 0
}
```