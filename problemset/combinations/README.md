# 组合

> 难度：中等
>
> https://leetcode-cn.com/problems/combinations/

## 题目

给定两个整数 `n` 和 `k`，返回范围 `[1, n]` 中所有可能的 `k` 个数的组合。

你可以按 任何顺序 返回答案。

### 示例

#### 示例 1：

```
输入：n = 4, k = 2
输出：
[
  [2,4],
  [3,4],
  [2,3],
  [1,2],
  [1,3],
  [1,4],
]
```

#### 示例 2：

```
输入：n = 1, k = 1
输出：[[1]]
```

## 解法

```typescript
/**
 * 回溯
 * @desc 时间复杂度 O(N!)  空间复杂度 O(n+k)
 * @param n {number}
 * @param k {number}
 * @return {number[][]}
 */
export function combine(n: number, k: number): number[][] {
  const ans: number[][] = [];
  backtrack();
  return ans;

  function backtrack(temp: number[] = [], num: number = 1) {
    if (temp.length + (n - num + 1) < k) {
      return;
    }

    if (temp.length === k) {
      return ans.push([...temp]);
    }

    for (let i = num; i <= n; i++) {
      temp.push(i);
      backtrack(temp, i + 1);
      temp.pop();
    }
  }
}
```
