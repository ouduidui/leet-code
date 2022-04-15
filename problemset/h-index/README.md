# H指数

> 难度：中等
>
> https://leetcode-cn.com/problems/h-index/

## 题目

给你一个整数数组 `citations` ，其中 `citations[i]` 表示研究者的第 `i` 篇论文被引用的次数。计算并返回该研究者的 **h 指数**。

根据维基百科上 **h 指数** 的定义：`h` 代表“高引用次数”，一名科研人员的 **h指数**是指他（她）的 （n 篇论文中）总共有 `h` 篇论文分别被引用了至少 `h` 次。且其余的 `n - h` 篇论文每篇被引用次数 **不超过 h 次**。

如果 `h` 有多种可能的值，**h 指数** 是其中最大的那个。

 
### 示例

#### 示例 1：

```
输入：citations = [3,0,6,1,5]
输出：3 
解释：给定数组表示研究者总共有 5 篇论文，每篇论文相应的被引用了 3, 0, 6, 1, 5 次。
     由于研究者有 3 篇论文每篇 至少 被引用了 3 次，其余两篇论文每篇被引用 不多于 3 次，所以她的 h 指数是 3。
```

#### 示例 2：

```
输入：citations = [1,3,1]
输出：1
```

## 解题

### 排序

```ts
/**
 * 排序
 * @desc 时间复杂度 O(NlogN)  空间复杂度 O(logN)
 * @param citations
 * @returns
 */
export function hIndex(citations: number[]): number {
  citations.sort((a, b) => a - b)
  let h = 0
  let i = citations.length - 1
  while (i >= 0 && citations[i] > h) {
    h++
    i--
  }
  return h
}
```

### 计数排序

```ts
/**
 * 计数排序
 * @desc 时间复杂度 O(N)  空间复杂度 O(N)
 * @param citations
 * @returns
 */
export function hIndex2(citations: number[]): number {
  const len = citations.length
  const counter = new Array(len + 1).fill(0)
  // 统计次数，大于等于len统一以len处理
  for (let i = 0; i < len; i++)
    citations[i] >= len ? counter[len]++ : counter[citations[i]]++

  let tot = 0
  for (let i = len; i >= 0; i--) {
    tot += counter[i]
    if (tot >= i)
      return i
  }

  return 0
}
```