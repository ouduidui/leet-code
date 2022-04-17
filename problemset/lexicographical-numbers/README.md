# 字典序排数

> 难度：中等
>
> https://leetcode-cn.com/problems/lexicographical-numbers/

## 题目

给你一个整数 `n` ，按字典序返回范围 `[1, n]` 内所有整数。

你必须设计一个时间复杂度为 `O(n)` 且使用 `O(1)` 额外空间的算法。

### 示例

#### 示例 1：

```
输入：n = 13
输出：[1,10,11,12,13,2,3,4,5,6,7,8,9]
```

#### 示例 2：

```
输入：n = 2
输出：[1,2]
```

## 解题

```ts
/**
 * 深度优先搜索
 * @desc 时间复杂度 O(N)  空间复杂度 O(1)
 * @param n
 * @returns
 */
export function lexicalOrder(n: number): number[] {
  const result: number[] = []

  let num = 1
  for (let i = 0; i < n; i++) {
    result.push(num)

    if (num * 10 <= n) {
      num *= 10
    }
    else {
      while (num % 10 === 9 || num === n)
        num = (num / 10) >> 0

      num++
    }
  }

  return result
}
```