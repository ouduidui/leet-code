# 最长连续序列

> 难度：中等
>
> https://leetcode-cn.com/problems/longest-consecutive-sequence/

## 题目

给定一个未排序的整数数组 `nums` ，找出数字连续的最长序列（不要求序列元素在原数组
中连续）的长度。

请你设计并实现时间复杂度为 `O(n)` 的算法解决此问题。

### 示例

#### 示例 1：

```
输入：nums = [100,4,200,1,3,2]
输出：4
解释：最长数字连续序列是 [1, 2, 3, 4]。它的长度为 4。
```

#### 示例 2：

```
输入：nums = [0,3,7,2,5,8,4,6,0,1]
输出：9
```

## 解题

```typescript
/**
 * 哈希表
 * @desc 时间复杂度 O(N)  空间复杂度 O(N)
 * @param nums
 */
export function longestConsecutive(nums: number[]): number {
  // 存储所有数值（去重）
  const numSet = new Set(nums);

  let result = 0;

  for (const num of numSet) {
    // 如果numSet不存在 num - 1，则num可作为起始数
    if (!numSet.has(num - 1)) {
      let currentNum = num; // 当前值
      let currentStreak = 1; // 当前长度

      // 向后寻找
      while (numSet.has(currentNum + 1)) {
        currentNum += 1;
        currentStreak += 1;
      }

      // 更新返回值
      result = Math.max(result, currentStreak);
    }
  }

  return result;
}
```
