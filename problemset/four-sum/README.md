# 四数之和

> 难度：中等
>
> https://leetcode-cn.com/problems/4sum/

## 题目

给你一个由 `n` 个整数组成的数组`nums` ，和一个目标值 `target` 。请你找出并返回满
足下述全部条件且不重复的四元组`[nums[a], nums[b], nums[c], nums[d]]` ：

- `0 <= a, b, c, d< n`
- `a`、`b`、`c` 和 `d` 互不相同
- `nums[a] + nums[b] + nums[c] + nums[d] == target`
- 你可以按 **任意顺序** 返回答案 。

### 示例

#### 示例 1：

```
输入：nums = [1,0,-1,0,-2,2], target = 0
输出：[[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
```

#### 示例 2：

```
输入：nums = [2,2,2,2,2], target = 8
输出：[[2,2,2,2]]
```

## 解法

```typescript
/**
 * 排序+双指针
 * @desc 时间复杂度 O(N^3)  空间复杂度 O(logN)
 * @param nums
 * @param target
 */
export function fourSum(nums: number[], target: number): number[][] {
  const ans: number[][] = [];
  if (nums.length < 4) return ans;

  // 排序
  nums.sort((a, b) => a - b);

  const len: number = nums.length;

  for (let i: number = 0; i < len - 3; i++) {
    // 如果与上一个相同的话，跳过该次循环
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    // 如果相邻四位相加超过target则结束循环
    if (nums[i] + nums[i + 1] + nums[i + 2] + nums[i + 3] > target) break;

    // 如果与最后三位相加还小于target的话，跳过本次循环
    if (nums[i] + nums[len - 3] + nums[len - 2] + nums[len - 1] < target)
      continue;

    for (let j: number = i + 1; j < len - 2; j++) {
      if (j > i + 1 && nums[j] === nums[j - 1]) continue;
      if (nums[i] + nums[j] + nums[j + 1] + nums[j + 2] > target) break;
      if (nums[i] + nums[j] + nums[len - 2] + nums[len - 1] < target) continue;

      // 化为三数之和
      let left: number = j + 1;
      let right: number = len - 1;
      while (left < right) {
        const sum = nums[i] + nums[j] + nums[left] + nums[right];
        if (sum === target) {
          ans.push([nums[i], nums[j], nums[left], nums[right]]);
          while (left < right && nums[left] === nums[left + 1]) left++;
          while (left < right && nums[right] === nums[right - 1]) right--;
          left++;
          right--;
        } else if (sum < target) {
          left++;
        } else {
          right--;
        }
      }
    }
  }

  return ans;
}
```
