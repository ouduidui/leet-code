# 蜡烛之间的盘子

> 难度：中等
>
> https://leetcode-cn.com/problems/plates-between-candles/

## 题目

给你一个长桌子，桌子上盘子和蜡烛排成一列。给你一个下标从 `0`  开始的字符串
 `s` ，它只包含字符  `'*'` 和  `'|'` ，其中  `'*'`  表示一个 **盘子** ，`'|'` 
表示一支  **蜡烛** 。

同时给你一个下标从 `0`  开始的二维整数数组  `queries` ，其中
 `queries[i] = [lefti, righti]`  表示 子字符串  `s[lefti...righti]` （包含左右端
点的字符）。对于每个查询，你需要找到 **子字符串中**  在 **两支蜡烛之间**  的盘子
的 **数目** 。如果一个盘子在 **子字符串中**  左边和右边 **都**  至少有一支蜡烛，
那么这个盘子满足在 **两支蜡烛之间** 。

- 比方说，`s = "||**||**|*"` ，查询  `[3, 8]` ，表示的是子字符串  `"*||**|"` 。
  子字符串中在两支蜡烛之间的盘子数目为  `2` ，子字符串中右边两个盘子在它们左边和
  右边 **都** 至少有一支蜡烛。

请你返回一个整数数组  `answer` ，其中  `answer[i]`  是第  `i`  个查询的答案。

### 示例

#### 示例 1

![plates-between-candles-1](https://user-images.githubusercontent.com/54696834/159102001-f7219fe1-6466-44c5-a21d-318db3db83ef.png)

```
输入：s = "**|**|***|", queries = [[2,5],[5,9]]
输出：[2,3]
解释：
- queries[0] 有两个盘子在蜡烛之间。
- queries[1] 有三个盘子在蜡烛之间。
```

#### 示例 2

![plates-between-candles-2](https://user-images.githubusercontent.com/54696834/159101975-ae3e96de-bc91-4a0a-a095-5c6c73830615.png)

```
输入：s = "***|**|*****|**||**|*", queries = [[1,17],[4,5],[14,17],[5,11],[15,16]]
输出：[9,0,0,0,0]
解释：
- queries[0] 有 9 个盘子在蜡烛之间。
- 另一个查询没有盘子在蜡烛之间。
```

## 解题

```typescript
/**
 * 预处理 + 前缀和
 * @desc 时间复杂度 O(N+M)  空间复杂度 O(N)
 * @param s
 * @param queries
 */
export function platesBetweenCandles(s: string, queries: number[][]): number[] {
  const len = s.length;
  const preSum: number[] = new Array(len).fill(0);
  let i = 0,
    j = 0;
  // 从左到右计算每个位置左边的盘子数量
  for (i = 0, j = 0; i < len; i++) {
    if (s[i] === '*') j++;
    preSum[i] = j;
  }

  // 定位每个点左边最近的蜡烛
  const left = new Array(len).fill(0);
  for (i = 0, j = -1; i < len; i++) {
    if (s[i] === '|') j = i;
    left[i] = j;
  }

  // 定位每个点右边最近的蜡烛
  const right = new Array(len).fill(0);
  for (i = len - 1, j = -1; i >= 0; i--) {
    if (s[i] === '|') j = i;
    right[i] = j;
  }

  const ans: number[] = [];
  for (i = 0; i < queries.length; i++) {
    const [l, r] = queries[i];
    const x = right[l];
    const y = left[r];
    ans.push(x === -1 || y === -1 || x >= y ? 0 : preSum[y] - preSum[x]);
  }

  return ans;
}
```
