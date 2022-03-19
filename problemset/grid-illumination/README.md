# 网格照明

> 难度：困难
>
> https://leetcode-cn.com/problems/grid-illumination/

## 题目

在大小为 `n x n` 的网格 `grid` 上，每个单元格都有一盏灯，最初灯都处于 **关闭**
状态。

给你一个由灯的位置组成的二维数组 `lamps` ，其中 `lamps[i] = [rowi, coli]` 表示
**打开** 位于 `grid[rowi][coli]` 的灯。即便同一盏灯可能在 `lamps` 中多次列出，不
会影响这盏灯处于 **打开** 状态。

当一盏灯处于打开状态，它将会照亮 **自身所在单元格** 以及同一 **行** 、同一
**列** 和两条 **对角线** 上的 **所有其他单元格** 。

另给你一个二维数组 `queries` ，其中 `queries[j] = [rowj, colj]` 。对于第 `j` 个
查询，如果单元格 `[rowj, colj]` 是被照亮的，则查询结果为 `1` ，否则为 `0` 。在第
`j` 次查询之后 [按照查询的顺序] ，关闭 位于单元格 `grid[rowj][colj]` 上及相邻
`8` 个方向上（与单元格 `grid[rowi][coli]` 共享角或边）的任何灯。

返回一个整数数组 `ans` 作为答案， `ans[j]` 应等于第 `j` 次查询 `queries[j]` 的结
果，`1` 表示照亮，`0` 表示未照亮。

### 示例

#### 示例 1：

![grid-illumination-1](https://user-images.githubusercontent.com/54696834/159102020-dd52c625-d16e-4630-a1d2-01727e86a718.jpg)

```
输入：n = 5, lamps = [[0,0],[4,4]], queries = [[1,1],[1,0]]
输出：[1,0]
解释：最初所有灯都是关闭的。在执行查询之前，打开位于 [0, 0] 和 [4, 4] 的灯。第 0 次查询检查 grid[1][1] 是否被照亮（蓝色方框）。该单元格被照亮，所以 ans[0] = 1 。然后，关闭红色方框中的所有灯。
```

![grid-illumination-2](https://user-images.githubusercontent.com/54696834/159102021-ddb29098-a5ea-4b11-bce1-ecb148e5a30b.jpg)

```
第 1 次查询检查 grid[1][0] 是否被照亮（蓝色方框）。该单元格没有被照亮，所以 ans[1] = 0 。然后，关闭红色矩形中的所有灯。
```

![grid-illumination-3](https://user-images.githubusercontent.com/54696834/159102023-e6249265-fcf5-4e10-95d6-e1ca5e3e71e4.jpg)

#### 示例 2：

```
输入：n = 5, lamps = [[0,0],[4,4]], queries = [[1,1],[1,1]]
输出：[1,1]
```

#### 示例 3：

```
输入：n = 5, lamps = [[0,0],[0,4]], queries = [[0,4],[0,1],[1,4]]
输出：[1,1,0]
```

## 解法

```typescript
/**
 * 哈希表
 * @desc 时间复杂度 O(L + Q)   空间复杂度 O(L)
 * @param n
 * @param lamps
 * @param queries
 */
export function gridIllumination(
  n: number,
  lamps: number[][],
  queries: number[][]
): number[] {
  const row = new Map<number, number>(); // 行 -> x
  const col = new Map<number, number>(); // 列 -> y
  const diagonal = new Map<number, number>(); // 对角线 -> x - y
  const antiDiagonal = new Map<number, number>(); // 反对角线  -> x + y
  const points = new Set<string>(); // 灯 -> 'x-y'
  // 生成坐标点的hash字符串
  const hash = (x: number, y: number): string => `${x}-${y}`;

  // 遍历灯
  for (const [x, y] of lamps) {
    // 如果这灯已经亮过，就无需重复操作
    if (points.has(hash(x, y))) continue;
    points.add(hash(x, y));

    row.set(x, (row.get(x) || 0) + 1);
    col.set(y, (col.get(y) || 0) + 1);
    diagonal.set(x - y, (diagonal.get(x - y) || 0) + 1);
    antiDiagonal.set(x + y, (antiDiagonal.get(x + y) || 0) + 1);
  }

  // 初始化结果数组
  const ret: number[] = new Array(queries.length).fill(0);

  // 遍历queries
  for (const [i, [r, c]] of queries.entries()) {
    // 该区域亮着，则设置为1
    if (
      row.get(r) ||
      col.get(c) ||
      diagonal.get(r - c) ||
      antiDiagonal.get(r + c)
    ) {
      ret[i] = 1;
    }

    // 遍历该查找点的四周
    for (let x = r - 1; x < r + 2; x++) {
      for (let y = c - 1; y < c + 2; y++) {
        // 如果超出区域或者该坐标点没有灯，则跳过
        if (x < 0 || y < 0 || x >= n || y >= n || !points.has(hash(x, y))) {
          continue;
        }

        // 清掉灯
        points.delete(hash(x, y));
        row.set(x, row.get(x)! - 1);
        col.set(y, col.get(y)! - 1);
        diagonal.set(x - y, diagonal.get(x - y)! - 1);
        antiDiagonal.set(x + y, antiDiagonal.get(x + y)! - 1);
      }
    }
  }

  return ret;
}
```
