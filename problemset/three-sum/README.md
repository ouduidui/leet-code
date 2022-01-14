# 三数之和

> 难度：中等
>
> https://leetcode-cn.com/problems/3sum/

## 题目

给你一个包含`n`个整数的数组`nums`，判断`nums`中是否存在三个元素 `a`，`b`，`c` ，
使得`a + b + c = 0` ？请你找出所有和为 `0` 且不重复的三元组。

注意：答案中不可以包含重复的三元组。

### 示例

#### 示例 1：

```
输入：nums = [-1,0,1,2,-1,-4]
输出：[[-1,-1,2],[-1,0,1]]
```

#### 示例 2：

```
输入：nums = []
输出：[]
```

#### 示例 3：

```
输入：nums = [0]
输出：[]
```

## 解法

```typescript
/**
 * 排序 + 双指针
 * @desc 时间复杂度 O(N^2)  空间复杂度 O(logN)
 * @param nums {number[]}
 * @return {number[][]}
 */
export function threeSum(nums: number[]): number[][] {
  if (nums.length < 3) return [];
  const ans: number[][] = [];
  const len: number = nums.length;

  // 排序
  nums.sort((a, b) => a - b);

  for (let i: number = 0; i < len; i++) {
    // 如果当前数值大于零，则三数之和一定大于零
    if (nums[i] > 0) break;

    // 去重
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    // 双指针
    let left: number = i + 1;
    let right: number = len - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];
      if (sum === 0) {
        ans.push([nums[i], nums[left], nums[right]]);
        // 去重
        while (left < right && nums[left] === nums[left + 1]) left++;
        while (left < right && nums[right] === nums[right - 1]) right--;
        left++;
        right--;
      } else if (sum < 0) {
        left++;
      } else if (sum > 0) {
        right--;
      }
    }
  }
  return ans;
}
```
