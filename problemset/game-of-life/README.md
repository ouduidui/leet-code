# 生命游戏

> 难度：中等
>
> https://leetcode-cn.com/problems/game-of-life/

## 题目

根据 百度百科 ， **生命游戏** ，简称为 **生命** ，是英国数学家约翰·何顿·康威在 1970 年发明的细胞自动机。

给定一个包含 `m × n` 个格子的面板，每一个格子都可以看成是一个细胞。每个细胞都具有一个初始状态： `1` 即为 **活细胞 （live）**，或 `0` 即为 **死细胞 （dead）**。每个细胞与其八个相邻位置（水平，垂直，对角线）的细胞都遵循以下四条生存定律：

- 如果活细胞周围八个位置的活细胞数少于两个，则该位置活细胞死亡；
- 如果活细胞周围八个位置有两个或三个活细胞，则该位置活细胞仍然存活；
- 如果活细胞周围八个位置有超过三个活细胞，则该位置活细胞死亡；
- 如果死细胞周围正好有三个活细胞，则该位置死细胞复活；

下一个状态是通过将上述规则同时应用于当前状态下的每个细胞所形成的，其中细胞的出生和死亡是同时发生的。给你 `m x n` 网格面板 `board` 的当前状态，返回下一个状态。

### 示例

#### 示例 1：

![grid1](https://user-images.githubusercontent.com/54696834/163748039-46d0641b-814f-4b8d-8103-0a248f085a9d.jpg)

```
输入：board = [[0,1,0],[0,0,1],[1,1,1],[0,0,0]]
输出：[[0,0,0],[1,0,1],[0,1,1],[0,1,0]]
```

#### 示例 2：

![grid2](https://user-images.githubusercontent.com/54696834/163748047-326edc76-0598-4180-96f6-0ae8db9bec25.jpg)

```
输入：board = [[1,1],[1,0]]
输出：[[1,1],[1,1]]
```

## 解题

```ts
/**
 * 使用额外的状态
 * @desc 时间复杂度 O(MN)  空间复杂度 O(1)
 * @param board
 */
export function gameOfLife(board: number[][]): void {
  const dirs = [
    [1, 0], [-1, 0], [0, 1], [0, -1], [1, 1], [1, -1], [-1, 1], [-1, -1],
  ]

  const m = board.length
  const n = board[0].length
  const toLiveFlag = 2
  const toDeadFlag = 3
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      let count = 0
      for (const dir of dirs) {
        const [x, y] = [i + dir[0], j + dir[1]]
        if (
          x >= 0
          && y >= 0
          && x < m
          && y < n
          && (board[x][y] === 1 || board[x][y] === toDeadFlag)
        )
          count++
      }
      const val = board[i][j]
      if (val === 1 && (count < 2 || count > 3))
        board[i][j] = toDeadFlag
      else if (val === 0 && count === 3)
        board[i][j] = toLiveFlag
    }
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      const val = board[i][j]
      if (val === toDeadFlag) board[i][j] = 0
      if (val === toLiveFlag) board[i][j] = 1
    }
  }
}
```