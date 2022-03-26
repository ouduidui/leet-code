# 子集 II

> 难度：中等
>
> https://leetcode-cn.com/problems/subsets-ii/

## 题目

给你一个整数数组 `nums` ，其中可能包含重复元素，请你返回该数组所有可能的子集（幂
集）。

解集 **不能** 包含重复的子集。返回的解集中，子集可以按 **任意顺序** 排列。

### 示例

#### 示例 1：

```
输入：nums = [1,2,2]
输出：[[],[1],[1,2],[1,2,2],[2],[2,2]]
```

#### 示例 2：

```
输入：nums = [0]
输出：[[],[0]]
```

## 解题

```typescript
/**
 * 回溯
 * @desc 时间复杂度 O(N * 2^N)   空间复杂度 O(N)
 * @param nums
 */
export function subsetsWithDup(nums: number[]): number[][] {
  const ans: number[][] = [];
  nums.sort((a, b) => a - b);
  const len = nums.length;
  backTrack();
  return ans;

  function backTrack(temp: number[] = [], index = 0) {
    ans.push([...temp]);

    for (let i = index; i < len; i++) {
      if (i === index || nums[i] !== nums[i - 1]) {
        temp.push(nums[i]);
        backTrack(temp, i + 1);
        temp.pop();
      }
    }
  }
}
```
