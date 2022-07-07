# 玩筹码

> 难度：简单
>
> https://leetcode.cn/problems/minimum-cost-to-move-chips-to-the-same-position/

## 题目

有 `n` 个筹码。第 `i` 个筹码的位置是 `position[i]` 。

我们需要把所有筹码移到同一个位置。在一步中，我们可以将第 `i` 个筹码的位置从 `position[i]` 改变为:

- `position[i] + 2` 或 `position[i] - 2` ，此时 `cost = 0`
- `position[i] + 1` 或 `position[i] - 1` ，此时 `cost = 1`

返回将所有筹码移动到同一位置上所需要的 **最小代价** 。

### 示例

#### 示例 1：

![image](https://user-images.githubusercontent.com/54696834/177837452-7e505d9d-ddb0-40f4-87e7-c2639b388370.png)

```
输入：position = [1,2,3]
输出：1
解释：第一步:将位置3的筹码移动到位置1，成本为0。
第二步:将位置2的筹码移动到位置1，成本= 1。
总成本是1。
```

#### 示例 2：

![image](https://user-images.githubusercontent.com/54696834/177837470-c0622a31-c09e-4c87-8b3f-aadeec50cf04.png)

```
输入：position = [2,2,2,3,3]
输出：2
解释：我们可以把位置3的两个筹码移到位置2。每一步的成本为1。总成本= 2。
```

#### 示例 3：

```
输入：position = [1,1000000000]
输出：1
```

## 解题

```ts
/**
 * 贪心算法
 * @desc 时间复杂度 O(N)  空间复杂度 O(1)
 * @params position
 * @returns
 */
export function minCostToMoveChips(position: number[]): number {
  let even = 0
  let odd = 0
  for (const pos of position) {
    if ((pos & 1) !== 0) odd++
    else even++
  }
  return Math.min(odd, even)
}
```