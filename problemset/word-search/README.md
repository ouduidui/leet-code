# 单词搜索

> 难度：中等
>
> https://leetcode-cn.com/problems/word-search/

## 题目

给定一个 `m x n` 二维字符网格 `board` 和一个字符串单词 `word` 。如果 `word` 存在
于网格中，返回 `true` ；否则，返回 `false` 。

单词必须按照字母顺序，通过相邻的单元格内的字母构成，其中“相邻”单元格是那些水平相
邻或垂直相邻的单元格。同一个单元格内的字母不允许被重复使用。

### 示例

#### 示例 1：

![word-search-1](https://user-images.githubusercontent.com/88995580/159103225-b6ae53e2-156f-4dec-8495-5ec95fea47cf.jpg)

```
输入：board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
输出：true
```

#### 示例 2：

![word-search-2](https://user-images.githubusercontent.com/88995580/159103231-7822d579-a68c-42cb-adc5-f3dd4a069f8b.jpg)

```
输入：board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "SEE"
输出：true
```

#### 示例 3：

![word-search-3](https://user-images.githubusercontent.com/88995580/159103241-4a0ad5e3-8bc4-46a5-b800-93e8b8a58390.jpg)

```
输入：board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCB"
输出：false
```

## 解法

```typescript
export function exist(board: string[][], word: string): boolean {
  const m = board.length;
  const n = board[0].length;
  // 用于判断是否使用过
  const visited: boolean[][] = new Array(m)
    .fill([])
    .map(() => new Array(n).fill(false));
  // 位移方向
  const directions = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0]
  ];

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (check(i, j, 0)) {
        return true;
      }
    }
  }

  return false;

  // 回溯
  function check(i: number, j: number, k: number): boolean {
    if (board[i][j] !== word.charAt(k)) {
      // 如果该块字符不匹配，直接返回false
      return false;
    } else if (k === word.length - 1) {
      // 如果凑齐单词，直接返回true
      return true;
    }

    visited[i][j] = true;
    let result = false;
    // 遍历四个走位
    for (const [dx, dy] of directions) {
      const i2 = i + dx;
      const j2 = j + dy;
      if (i2 >= 0 && i2 < m && j2 >= 0 && j2 < n && !visited[i2][j2]) {
        if (check(i2, j2, k + 1)) {
          result = true;
          break;
        }
      }
    }
    // 恢复状态
    visited[i][j] = false;
    return result;
  }
}
```
