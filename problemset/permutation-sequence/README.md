# 排列序列

> 难度：困难
>
> https://leetcode-cn.com/problems/permutation-sequence/

## 题目

给出集合 `[1,2,3,...,n]`，其所有元素共有 `n!` 种排列。

按大小顺序列出所有排列情况，并一一标记，当 `n = 3` 时, 所有排列如下：

```
"123"
"132"
"213"
"231"
"312"
"321"
```

给定 `n` 和 `k`，返回第 `k` 个排列。

### 示例

#### 示例 1：

```
输入：n = 3, k = 3
输出："213"
```

#### 示例 2：

```
输入：n = 4, k = 9
输出："2314"
```

#### 示例 3：

```
输入：n = 3, k = 1
输出："123"
```

## 解题

### 回溯

```typescript
/**
 * 回溯
 * @desc 时间复杂度 O(N!)  空间复杂度 O(1)
 * @param n {number}
 * @param k {number}
 * @return {string}
 */
export function getPermutation(n: number, k: number): string {
  let idx = 1;
  return backtrack('') || '';

  function backtrack(str: string): string | undefined {
    if (str.length === n && idx === k) {
      return str;
    } else if (str.length === n) {
      idx++;
    } else {
      for (let i = 1; i <= n; i++) {
        if (str.split('').includes(`${i}`)) continue;

        const res = backtrack(str + i);
        if (res) {
          return res;
        }
      }
    }
  }
}
```

### 逆康托展开

> 对于 `n` 个不同的元素（例如数 `n1,2,⋯,n`），它们可以组成的排列总数目为 `n!`。

对于给定的`n`和`k`，我们可以从左到右确定第`k`个排列中的每个位置上的元素到底是什
么。

我们首先确定首个元素`a1`，根据上面的结论，我们可以知道：

- 以`1`为`a1`的排列一共有`(n-1)!`个

- 以`2`为`a1`的排列一共有`(n-1)!`个

- ...

- 以`n`为`a1`的排列一共有`(n-1)!`个

由于我们需要求出从小到大的第`k`个排列，因此：

- 如果`k≤(n−1)!`，我们就可以确认排列的首个元素为`1`，

- 如果`(n−1)!<k≤2⋅(n−1)!`，我们就可以确认排列的首个元素为`2`，

- ...

- 如果`(n−1)⋅(n−1)!<k≤n⋅(n−1)!`，我们就可以确认排列的首个元素为`n`

因此，第`k`个排列的首个元素就是：`a1 = ⌊(k - 1) / (n - 1)!⌋ + 1`

> `⌊x⌋` 表示将 `x` 向下取整

当我们确认了`a1`后，可以使用相似的思路，确认下一个元素`a2`：

- 以`[1,n]\a1`最小的元素为`a2`的排序一共有`(n - 2)!`个；

- 以`[1,n]\a1`次小的元素为`a2`的排序一共有`(n - 2)!`个；

- ...

- 以`[1,n]\a1`最大的元素为`a2`的排序一共有`(n - 2)!`个；

> `[1,n]\a1`表示`1,2,...,n`中除去`a1`以外元素的集合

这些排序从编号`(a1 - 1)(n - 1)!`开始，到`a1(n - 1)`结束，总计`(n-1)!`个，因此
第`k`个排序实际上对应这其中的`k'=(k-1)mod(n-1)!+1`个排序。

这样一来，我们就把原问题转化成了一个完全相同但规模减少`1`的子问题：

> 求`[1,n]\a1`这`n-1`个元素组成的排列中，第`k'`小的排序

```typescript
/**
 * 逆康托展开
 * @desc 时间复杂度 O(N^2)   空间复杂度 O(N)
 * @param n {number}
 * @param k {number}
 * @return {string}
 */
export function getPermutation2(n: number, k: number): string {
  // 阶乘数组 - [1, 1, 4, 24]
  const factorial = [1];
  for (let i = 1; i < n; i++) {
    factorial[i] = factorial[i - 1] * i;
  }

  // 记录已使用过的数字 - 下标代表数字
  const valid: boolean[] = new Array(n + 1).fill(false);

  let ans = '';
  k--;

  for (let i = 1; i <= n; i++) {
    // a = ⌊(k - 1) / (n - 1)!⌋ + 1 算出第nth个排列
    let a = Math.floor(k / factorial[n - i]) + 1;

    // 找出该排列的数组（重点在于去重）
    for (let j = 1; i <= n; j++) {
      // 判断数值是否使用过
      if (valid[j]) continue;
      // 计数
      a--;
      // 找到对应数值
      if (a === 0) {
        ans += j;
        valid[j] = true;
        break;
      }
    }

    // 取余更新k
    k %= factorial[n - i];
  }

  return ans;
}
```
