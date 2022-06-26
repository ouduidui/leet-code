# 黑名单中的随机数

> 难度：困难
>
> https://leetcode.cn/problems/random-pick-with-blacklist/

## 题目

给定一个整数 `n` 和一个 `无重复` 黑名单整数数组 `blacklist` 。设计一种算法，从 `[0, n - 1]` 范围内的任意整数中选取一个 **未加入** 黑名单 `blacklist` 的整数。任何在上述范围内且不在黑名单 `blacklist` 中的整数都应该有 **同等的可能性** 被返回。

优化你的算法，使它最小化调用语言 **内置** 随机函数的次数。

实现 `Solution` 类:

- Solution(int n, int[] blacklist) 初始化整数 n 和被加入黑名单 blacklist 的整数
- int pick() 返回一个范围为 [0, n - 1] 且不在黑名单 blacklist 中的随机整数
 

### 示例：

```
输入
["Solution", "pick", "pick", "pick", "pick", "pick", "pick", "pick"]
[[7, [2, 3, 5]], [], [], [], [], [], [], []]
输出
[null, 0, 4, 1, 6, 1, 0, 4]

解释
Solution solution = new Solution(7, [2, 3, 5]);
solution.pick(); // 返回0，任何[0,1,4,6]的整数都可以。注意，对于每一个pick的调用，
                 // 0、1、4和6的返回概率必须相等(即概率为1/4)。
solution.pick(); // 返回 4
solution.pick(); // 返回 1
solution.pick(); // 返回 6
solution.pick(); // 返回 1
solution.pick(); // 返回 0
solution.pick(); // 返回 4
```

## 解题

```ts
/**
 * 黑名单映射
 */
export class Solution {
  bound: number
  b2w: Map<number, number>

  constructor(n: number, blacklist: number[]) {
    this.b2w = new Map<number, number>()
    const len = blacklist.length
    this.bound = n - len
    const black = new Set()

    for (const b of blacklist) {
      if (b >= this.bound)
        black.add(b)
    }

    let w = this.bound
    for (const b of blacklist) {
      if (b < this.bound) {
        while (black.has(w)) w++

        this.b2w.set(b, w)
        w++
      }
    }
  }

  pick(): number {
    const x = Math.floor(Math.random() * this.bound)
    return this.b2w.get(x) || x
  }
}
```