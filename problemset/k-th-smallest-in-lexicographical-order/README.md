# 字典序的第 K 小数字

> 难度：困难
>
> https://leetcode-cn.com/problems/k-th-smallest-in-lexicographical-order/

## 题目

给定整数  `n`  和  `k`，返回  ` [1, n]`  中字典序第  `k`  小的数字。

### 示例

#### 示例 1:

```
输入: n = 13, k = 2
输出: 10
解释: 字典序的排列是 [1, 10, 11, 12, 13, 2, 3, 4, 5, 6, 7, 8, 9]，所以第二小的数字是 10。
```

#### 示例 2:

```
输入: n = 1, k = 1
输出: 1
```

## 解题

```typescript
/**
 * 字典树思想
 * @desc 时间复杂度 O(log²N)  空间复杂度 O(1)
 * @param n
 * @param k
 * @returns
 */
export function findKthNumber(n: number, k: number): number {
  let curr = 1;
  k--;

  while (k > 0) {
    // 获取当前节点下面的子树数量
    const steps = getSteps(curr, n);
    // 如果steps小于k的话，则跳到下一个兄弟节点
    if (steps <= k) {
      k -= steps;
      curr++;
    }
    // 如果steps大于k的话，则答案就在该节点下，则开始递归查找
    else {
      curr *= 10;
      k--;
    }
  }

  return curr;

  /**
   * 找到以curr为节点下的子树数量
   * @param curr
   * @param n
   * @returns
   */
  function getSteps(curr: number, n: number): number {
    let steps = 0;
    // 该层子树的第一个节点
    let first = curr;
    // 该层子树的最后一个节点
    let last = curr;
    while (first <= n) {
      steps += Math.min(last, n) - first + 1;
      first = first * 10;
      last = last * 10 + 9;
    }

    return steps;
  }
}
```
