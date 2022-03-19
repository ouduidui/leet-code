# 骑士在棋盘上的概率

> 难度：中等
>
> https://leetcode-cn.com/problems/knight-probability-in-chessboard/

## 题目

在一个 `n x n` 的国际象棋棋盘上，一个骑士从单元格 `(row, column)` 开始，并尝试进
行 `k` 次移动。行和列是 **从 0 开始** 的，所以左上单元格是 `(0,0)` ，右下单元格
是 `(n - 1, n - 1)` 。

象棋骑士有 8 种可能的走法，如下图所示。每次移动在基本方向上是两个单元格，然后在
正交方向上是一个单元格。

![knight-probability-in-chessboard](https://user-images.githubusercontent.com/54696834/159101982-e9af0449-2fd6-4619-907f-aca77df727a7.png)

每次骑士要移动时，它都会随机从 8 种可能的移动中选择一种(即使棋子会离开棋盘)，然
后移动到那里。

骑士继续移动，直到它走了 `k` 步或离开了棋盘。

返回 **骑士在棋盘停止移动后仍留在棋盘上的概率** 。

### 示例

#### 示例 1：

```
输入: n = 3, k = 2, row = 0, column = 0
输出: 0.0625
解释: 有两步(到(1,2)，(2,1))可以让骑士留在棋盘上。
在每一个位置上，也有两种移动可以让骑士留在棋盘上。
骑士留在棋盘上的总概率是0.0625。
```

#### 示例 2：

```
输入: n = 1, k = 0, row = 0, column = 0
输出: 1.00000
```

## 解题

```typescript
/**
 * 动态规划
 * @desc 时间复杂度 O(kN^2)  空间复杂度 O(kN^2)
 * @param n
 * @param k
 * @param row
 * @param column
 */
export function knightProbability(
  n: number,
  k: number,
  row: number,
  column: number
): number {
  // 八种走位
  const dirs = [
    [2, 1],
    [2, -1],
    [-2, 1],
    [-2, -1],
    [1, 2],
    [-1, 2],
    [1, -2],
    [-1, -2]
  ];
  const dp: number[][][] = new Array(k + 1)
    .fill([])
    .map(() => new Array(n).fill([]).map(() => new Array(n).fill(0)));

  // 步数
  for (let step = 0; step <= k; step++) {
    for (let x = 0; x < n; x++) {
      for (let y = 0; y < n; y++) {
        if (step === 0) {
          dp[step][x][y] = 1;
        } else {
          for (const dir of dirs) {
            // 获取下一步的坐标
            const newX = x + dir[0];
            const newY = y + dir[1];
            // 通过逆推的方式，如果[newX, newY]在棋盘上，则[x, y]就有八分之一的概率不会出界
            if (newX >= 0 && newX < n && newY >= 0 && newY < n) {
              dp[step][x][y] += dp[step - 1][newX][newY] / 8;
            }
          }
        }
      }
    }
  }

  return dp[k][row][column];
}
```
