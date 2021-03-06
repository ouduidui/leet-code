# 找出游戏的获胜者

> 难度：中等
>
> https://leetcode-cn.com/problems/find-the-winner-of-the-circular-game/

## 题目

共有 `n` 名小伙伴一起做游戏。小伙伴们围成一圈，按 **顺时针顺序** 从 `1` 到 `n` 编号。确切地说，从第 `i` 名小伙伴顺时针移动一位会到达第 `(i+1)` 名小伙伴的位置，其中 `1 <= i < n` ，从第 `n` 名小伙伴顺时针移动一位会回到第 `1` 名小伙伴的位置。

游戏遵循如下规则：

1. 从第 `1` 名小伙伴所在位置 **开始** 。
2. 沿着顺时针方向数 `k` 名小伙伴，计数时需要 包含 起始时的那位小伙伴。逐个绕圈进行计数，一些小伙伴可能会被数过不止一次。
3. 你数到的最后一名小伙伴需要离开圈子，并视作输掉游戏。
4. 如果圈子中仍然有不止一名小伙伴，从刚刚输掉的小伙伴的 顺时针下一位 **小伙伴** 开始，回到步骤 **2** 继续执行。
5. 否则，圈子中最后一名小伙伴赢得游戏。

给你参与游戏的小伙伴总数 **n** ，和一个整数 **k** ，返回游戏的获胜者。

### 示例

#### 示例 1：

![ic234-q2-ex11](https://user-images.githubusercontent.com/54696834/166616200-d4aa7dc8-e5a2-4ac1-b0de-f908c53418b8.png)

```
输入：n = 5, k = 2
输出：3
解释：游戏运行步骤如下：
1) 从小伙伴 1 开始。
2) 顺时针数 2 名小伙伴，也就是小伙伴 1 和 2 。
3) 小伙伴 2 离开圈子。下一次从小伙伴 3 开始。
4) 顺时针数 2 名小伙伴，也就是小伙伴 3 和 4 。
5) 小伙伴 4 离开圈子。下一次从小伙伴 5 开始。
6) 顺时针数 2 名小伙伴，也就是小伙伴 5 和 1 。
7) 小伙伴 1 离开圈子。下一次从小伙伴 3 开始。
8) 顺时针数 2 名小伙伴，也就是小伙伴 3 和 5 。
9) 小伙伴 5 离开圈子。只剩下小伙伴 3 。所以小伙伴 3 是游戏的获胜者。
```

#### 示例 2：

```
输入：n = 6, k = 5
输出：1
解释：小伙伴离开圈子的顺序：5、4、6、2、3 。小伙伴 1 是游戏的获胜者。
```

## 解题

### 模拟 + 队列

```ts
/**
 * 模拟 + 队列
 * @desc 时间复杂度 O(NK)  空间复杂度 O(N)
 * @param n
 * @param k
 * @returns
 */
export function findTheWinner(n: number, k: number): number {
  const queue = new Array(n).fill(0).map((_, i) => i + 1)
  while (queue.length > 1) {
    for (let i = 1; i < k; i++)
      queue.push(queue.shift()!)
    queue.shift()
  }
  return queue[0]
}
```

### 数学 + 递归

以下用 `f(n,k)` 表示 `n` 名小伙伴做游戏，每一轮离开圈子的小伙伴的计数为 `k` 时的获胜者编号。

当 `n=1` 时，圈子中只有一名小伙伴，该小伙伴即为获胜者，因此 `f(1,k) = 1`。

当 `n>1` 时，将有一名小伙伴离开圈子，圈子中剩下 `n-1` 名小伙伴。圈子中的第 `k'` 名小伙伴离开圈子，`k'` 满足 `1≤k'≤n` 且 `k-k'` 是 `n` 的倍数。

由于 `1≤k'≤n` ，因此 `0≤k'-1≤n-1`。又由于 `k-k'` 是 `n` 的倍数等价于 `(k-1)-(k'-1)` 是 `n` 的倍数，因此 `k'-1=(k-1) mod n`，`k'=(k-1) mod n + 1`。

当圈子中剩下 `n-1` 名小伙伴时，可以递归地计算 `f(n-1, k)`，得到剩下的 `n-1` 名小伙伴中获胜者。令 `x=f(n-1,k)`。

由于在第 `k'` 名小伙伴离开后，圈子中剩下的 `n-1` 名小伙伴从第 `k'+1` 名小伙伴开始计数，获胜者编号是从第 `k'+1` 名小伙伴开始的第 `x` 名小伙伴，因此当圈子中有 `n` 名小伙伴时，获胜者编号是 `f(n,k)=(k' mod n +x-1)mod n +1 = (k+x-1) mod n +1`。

将 `x=f(n-1,k)`代入后，可得 `f(n,k)=f(k+f(n-1,k)-1) mod n +1`。

```ts 
/**
 * 数学 + 递归
 * @desc 时间复杂度 O(N)  空间复杂度 O(N)
 * @param n
 * @param k
 * @returns
 */
export function findTheWinner2(n: number, k: number): number {
  return n === 1
    ? 1
    : (k + findTheWinner2(n - 1, k) - 1) % n + 1
}
```

### 数学 + 迭代

```ts
/**
 * 数学 + 迭代
 * @desc 时间复杂度 O(N)  空间复杂度 O(1)
 * @param n
 * @param k
 * @returns
 */
export function findTheWinner3(n: number, k: number): number {
  let winner = 1
  for (let i = 2; i <= n; i++)
    winner = (k + winner - 1) % i + 1
  return winner
}
```