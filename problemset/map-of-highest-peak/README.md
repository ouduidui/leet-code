# 地图中的最高点

> 难度：中等
>
> https://leetcode-cn.com/problems/map-of-highest-peak/

## 题目

给你一个大小为 `m x n` 的整数矩阵 `isWater` ，它代表了一个由 **陆地** 和 **水
域** 单元格组成的地图。

- 如果 `isWater[i][j] == 0` ，格子 `(i, j)` 是一个 **陆地** 格子。
- 如果 `isWater[i][j] == 1` ，格子 `(i, j)` 是一个 **水域** 格子。

你需要按照如下规则给每个单元格安排高度：

- 每个格子的高度都必须是非负的。
- 如果一个格子是是 **水域** ，那么它的高度必须为 0 。
- 任意相邻的格子高度差 **至多** 为 1 。当两个格子在正东、南、西、北方向上相互紧
  挨着，就称它们为相邻的格子。（也就是说它们有一条公共边）

找到一种安排高度的方案，使得矩阵中的最高高度值 **最大** 。

请你返回一个大小为 `m x n` 的整数矩阵 `height` ，其中 `height[i][j]` 是格子
`(i, j)` 的高度。如果有多种解法，请返回 **任意一个** 。

### 示例

#### 示例 1：

![map-of-highest-peak-1](https://user-images.githubusercontent.com/54696834/159102060-233fe3d6-c5ce-4456-9ccb-abea03e03496.png)

```
输入：isWater = [[0,1],[0,0]]
输出：[[1,0],[2,1]]
解释：上图展示了给各个格子安排的高度。
蓝色格子是水域格，绿色格子是陆地格。
```

#### 示例 2：

![map-of-highest-peak-2.png](https://user-images.githubusercontent.com/54696834/159102058-09267885-a2d0-42e2-93b0-7d41401749f2.png)

```
输入：isWater = [[0,0,1],[1,0,0],[0,0,0]]
输出：[[1,1,0],[0,1,1],[1,2,2]]
解释：所有安排方案中，最高可行高度为 2 。
任意安排方案中，只要最高高度为 2 且符合上述规则的，都为可行方案。
```

## 解题

```typescript
/**
 * 多源广度优先搜索
 * @desc 时间复杂度 O(MN)  空间复杂度 O(MN)
 * @param isWater {number[][]}
 * @return {number[][]}
 */
export function highestPeak(isWater: number[][]): number[][] {
  const m = isWater.length;
  const n = isWater[0].length;

  if (m === 0 || n === 0) return [];

  // 初始化返回数组，将未处理的区域设置为-1
  const ans: number[][] = new Array(m)
    .fill([])
    .map(() => new Array(n).fill(-1));

  // 初始化队列
  const queue: number[][] = [];

  // 先处理水域部分，将其设置为0，并且入队
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (isWater[i][j] == 1) {
        ans[i][j] = 0;
        queue.unshift([i, j]);
      }
    }
  }

  // 四个方向
  const dirs = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1]
  ];

  // 遍历队列，向四个方向扩展处理
  while (queue.length) {
    // 此处的辅助队列是为了避免处理超时
    const _queue = [...queue];
    queue.length = 0;
    while (_queue.length) {
      const position = _queue.pop()!;
      for (const dir of dirs) {
        const x = position[0] + dir[0];
        const y = position[1] + dir[1];
        if (x >= 0 && x < m && y >= 0 && y < n && ans[x][y] === -1) {
          ans[x][y] = ans[position[0]][position[1]] + 1;
          // 处理完入队，还需要进行向四周扩展处理
          queue.unshift([x, y]);
        }
      }
    }
  }

  return ans;
}
```
