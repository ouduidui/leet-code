# 摘樱桃

> 难度：困难
>
> https://leetcode.cn/problems/cherry-pickup/

## 题目

一个`N x N`的网格(grid) 代表了一块樱桃地，每个格子由以下三种数字的一种来表示：

- `0` 表示这个格子是空的，所以你可以穿过它。
- `1` 表示这个格子里装着一个樱桃，你可以摘到樱桃然后穿过它。
- `-1` 表示这个格子里有荆棘，挡着你的路。

你的任务是在遵守下列规则的情况下，尽可能的摘到最多樱桃：

- 从位置 `(0, 0)` 出发，最后到达` (N-1, N-1)` ，只能向下或向右走，并且只能穿越有效的格子（即只可以穿过值为`0`或者`1`的格子）；
- 当到达 `(N-1, N-1)` 后，你要继续走，直到返回到` (0, 0)` ，只能向上或向左走，并且只能穿越有效的格子；
- 当你经过一个格子且这个格子包含一个樱桃时，你将摘到樱桃并且这个格子会变成空的（值变为`0`）；
- 如果在 `(0, 0)` 和 `(N-1, N-1)` 之间不存在一条可经过的路径，则没有任何一个樱桃能被摘到。


### 示例

```
输入: grid =
[[0, 1, -1],
 [1, 0, -1],
 [1, 1,  1]]
输出: 5
解释： 
玩家从（0,0）点出发，经过了向下走，向下走，向右走，向右走，到达了点(2, 2)。
在这趟单程中，总共摘到了4颗樱桃，矩阵变成了[[0,1,-1],[0,0,-1],[0,0,0]]。
接着，这名玩家向左走，向上走，向上走，向左走，返回了起始点，又摘到了1颗樱桃。
在旅程中，总共摘到了5颗樱桃，这是可以摘到的最大值了。
```

## 解题

```ts
/**
 * 动态规划
 * @desc 时间复杂度 O(N³)  空间复杂度 O(N²)
 * @param grid
 * @returns
 */
export function cherryPickup(grid: number[][]): number {
  const len = grid.length
  const dp: number[][] = new Array(len).fill([])
    .map(() => new Array(len).fill(-Number.MAX_VALUE))
  dp[0][0] = grid[0][0]

  for (let i = 1; i < len * 2 - 1; i++) {
    for (let x1 = Math.min(i, len - 1); x1 >= Math.max(i - len + 1, 0); x1--) {
      for (let x2 = Math.min(i, len - 1); x2 >= x1; x2--) {
        const y1 = i - x1
        const y2 = i - x2
        if (grid[x1][y1] === -1 || grid[x2][y2] === -1) {
          dp[x1][x2] = -Number.MAX_VALUE
          continue
        }

        let res = dp[x1][x2] // 都往右

        if (x1 > 0)
          res = Math.max(res, dp[x1 - 1][x2]) // 往下，往右
        if (x2 > 0)
          res = Math.max(res, dp[x1][x2 - 1]) // 往右，往下
        if (x1 > 0 && x2 > 0)
          res = Math.max(res, dp[x1 - 1][x2 - 1]) // 都往下

        res += grid[x1][y1]
        // 避免重复摘同一个樱桃
        if (x2 !== x1)
          res += grid[x2][y2]

        dp[x1][x2] = res
      }
    }
  }

  return Math.max(dp[len - 1][len - 1], 0)
}
```