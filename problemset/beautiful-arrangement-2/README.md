# 优美的排列 II

> 难度：中等
>
> https://leetcode.cn/problems/beautiful-arrangement-ii/

## 题目

给你两个整数 `n` 和 `k` ，请你构造一个答案列表 `answer` ，该列表应当包含从 `1` 到 `n` 的 `n` 个不同正整数，并同时满足下述条件：

- 假设该列表是 `answer = [a1, a2, a3, ... , an]` ，那么列表 `[|a1 - a2|, |a2 - a3|, |a3 - a4|, ... , |an-1 - an|]` 中应该有且仅有 `k` 个不同整数。

返回列表 `answer` 。如果存在多种答案，只需返回其中 任意一种 。

### 示例

#### 示例 1：

```
输入：n = 3, k = 1
输出：[1, 2, 3]
解释：[1, 2, 3] 包含 3 个范围在 1-3 的不同整数，并且 [1, 1] 中有且仅有 1 个不同整数：1
```

#### 示例 2：

```
输入：n = 3, k = 2
输出：[1, 3, 2]
解释：[1, 3, 2] 包含 3 个范围在 1-3 的不同整数，并且 [2, 1] 中有且仅有 2 个不同整数：1 和 2
```

## 解题

```ts 
/**
 * 从特殊情况到一般情况
 * @desc 时间复杂度 O(N)  空间复杂度 O(1)
 * @param n
 * @param k
 * @returns
 */
export function constructArray(n: number, k: number): number[] {
  const answer = new Array(n).fill(0)
  let idx = 0
  for (let i = 1; i < n - k; ++i) {
    answer[idx] = i
    ++idx
  }
  for (let i = n - k, j = n; i <= j; ++i, --j) {
    answer[idx] = i
    ++idx
    if (i !== j) {
      answer[idx] = j
      ++idx
    }
  }
  return answer
}
```