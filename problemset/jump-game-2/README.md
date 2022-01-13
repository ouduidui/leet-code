# 跳跃游戏 II

> 难度：中等
>
> https://leetcode-cn.com/problems/jump-game-ii/

## 题目

给你一个非负整数数组 `nums` ，你最初位于数组的第一个位置。

数组中的每个元素代表你在该位置可以跳跃的**最大长度**。

你的目标是使用最少的跳跃次数到达数组的最后一个位置。

假设你总是可以到达数组的最后一个位置。

### 示例

#### 示例 1:

```
输入: nums = [2,3,1,1,4]
输出: 2
解释: 跳到最后一个位置的最小跳跃数是 2。 从下标为 0 跳到下标为 1 的位置，跳 1 步，然后跳 3 步到达数组的最后一个位置。
```

#### 示例 2:

```
输入: nums = [2,3,0,1,4]
输出: 2
```

## 解法

### 贪心算法 - 反向查找

```typescript
/**
 * 贪心算法 - 反向查找
 * @desc 时间复杂度 O(N^2)  空间复杂度 O(1)
 * @param nums
 */
export function jump(nums: number[]): number {
  let position = nums.length - 1;
  let steps = 0;
  while (position > 0) {
    for (let i = 0; i < position; i++) {
      if (i + nums[i] >= position) {
        position = i;
        steps++;
        break;
      }
    }
  }

  return steps;
}
```

### 贪心算法 - 正向查找

```typescript
/**
 * 贪心算法 - 正向查找
 * @desc 时间复杂度 O(n)   空间复杂度 O(1)
 * @param nums
 */
export function jump2(nums: number[]): number {
  const len = nums.length;
  let end = 0;
  let maxPosition = 0;
  let steps = 0;

  for (let i = 0; i < len - 1; i++) {
    maxPosition = Math.max(maxPosition, i + nums[i]);
    if (i === end) {
      end = maxPosition;
      steps++;
    }
  }

  return steps;
}
```
