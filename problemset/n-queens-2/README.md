# N 皇后 II

> 难度：困难
>
> https://leetcode-cn.com/problems/n-queens-ii/

## 题目

**n 皇后问题** 研究的是如何将 `n` 个皇后放置在 `n × n` 的棋盘上，并且使皇后彼此
之间不能相互攻击。

给你一个整数 `n` ，返回 **n 皇后问题** 不同的解决方案的数量。

### 示例

#### 示例 1

![n-queens-1](https://user-images.githubusercontent.com/88995580/159103310-af7330bd-1ab1-4eba-b70d-67735cae9802.jpg)

```
输入：n = 4
输出：2
解释：如上图所示，4 皇后问题存在两个不同的解法。
```

#### 示例 2

```
输入：n = 1
输出：1
```

## 解法

```typescript
/**
 * 基于集合的回溯
 * @desc 时间复杂度 O(N!)   空间复杂度 O(N)
 * @param n {number}
 * @return {string[][]}
 */
export function totalNQueens(n: number): number {
  let res: number = 0;
  const queens = new Array<number>(n).fill(-1);
  const columns = new Set<number>(); // 列
  const diagonals1 = new Set<number>(); // 从左上到右下方向
  const diagonals2 = new Set<number>(); // 从右上到左下方向
  backtrack(0);
  return res;

  function backtrack(row: number) {
    if (row === n) {
      res++;
      return;
    }

    for (let i = 0; i < n; i++) {
      // 如果同列上已经有皇后，就跳过
      if (columns.has(i)) continue;

      // 如果同对角线上已经有皇后，就跳过
      let diagonal1 = row - i;
      if (diagonals1.has(diagonal1)) continue;
      let diagonal2 = row + i;
      if (diagonals2.has(diagonal2)) continue;

      queens[row] = i;
      columns.add(i);
      diagonals1.add(diagonal1);
      diagonals2.add(diagonal2);
      backtrack(row + 1);
      queens[row] = -1;
      columns.delete(i);
      diagonals1.delete(diagonal1);
      diagonals2.delete(diagonal2);
    }
  }
}
```
