# 直线上最多的点数

> 难度：困难
>
> https://leetcode-cn.com/problems/max-points-on-a-line/

## 题目

给你一个数组 `points` ，其中 `points[i] = [xi, yi]` 表示 `X-Y` 平面上的一个点。
求最多有多少个点在同一条直线上。

### 示例

#### 示例 1：

![max-points-on-a-line-1](https://user-images.githubusercontent.com/54696834/159101997-76c8ea9d-0069-4d7c-ba3e-69a92f9ecb50.jpg)

```
输入：points = [[1,1],[2,2],[3,3]]
输出：3
```

#### 示例 2：

![max-points-on-a-line-2](https://user-images.githubusercontent.com/54696834/159101992-a023a180-5ca6-46be-a461-99f9e1d94726.jpg)

```
输入：points = [[1,1],[3,2],[5,3],[4,1],[2,3],[1,4]]
输出：4
```

## 解题

```typescript
/**
 * 哈希表
 * @desc 时间复杂度  O(N^2 * logM) M为横纵坐标差的最大值   空间复杂度 O(N)
 * @param points
 */
export function maxPoints(points: number[][]): number {
  const len = points.length;
  if (len <= 2) return len;

  // 找到最大公约数
  const gcd = (a: number, b: number): number => (b ? gcd(b, a % b) : a);

  let result = 0;
  for (let i = 0; i < len; i++) {
    // 如果result已经超过len的一半或者len - i，那么即使剩余的点都再一条直线上都不可能大过目前答案
    if (result >= len - i || result > len / 2) break;

    // 初始化哈希表
    const map = new Map<string, number>();
    // 以 i 为起始点，遍历后续节点是否在同一直线上
    for (let j = i + 1; j < len; j++) {
      // x = xi - xj
      let x = points[i][0] - points[j][0];
      // y = yi - yj
      let y = points[i][1] - points[j][1];
      if (x === 0) {
        // 垂直直线
        y = 1;
      } else if (y === 0) {
        // 水平直线
        x = 1;
      } else {
        // 统一标准，将y调整为整数
        if (y < 0) {
          x = -x;
          y = -y;
        }
        // 找到x和y的最大公约数
        const gcdXY = gcd(Math.abs(x), Math.abs(y));
        // 将 x 和 y 化到最简
        x /= gcdXY;
        y /= gcdXY;
      }
      // 此时x和y是最简状况，其我们需要将斜率作为唯一指标，因此可以选择将x和y拼接作为key值确保唯一值
      const key = `${x}:${y}`;
      map.set(key, (map.get(key) || 0) + 1);
    }

    // 找到最大点数，更新答案
    for (const num of map.values()) {
      result = Math.max(result, num + 1);
    }
  }

  return result;
}
```
