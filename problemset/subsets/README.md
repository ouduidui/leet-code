# 子集

> 难度：中等
>
> https://leetcode-cn.com/problems/subsets/

## 题目

给你一个整数数组 `nums` ，数组中的元素 **互不相同** 。返回该数组所有可能的子集（
幂集）。

解集 **不能** 包含重复的子集。你可以按 **任意顺序** 返回解集。

### 示例

#### 示例 1：

```
输入：nums = [1,2,3]
输出：[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
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
 * @desc 时间复杂度 O(N2^N)   空间复杂度 O(N)
 * @param nums
 */
export function subsets(nums: number[]): number[][] {
  const ans: number[][] = [];
  backTrack();
  return ans;

  function backTrack(temp: number[] = [], index: number = 0) {
    ans.push([...temp]);

    for (let i = index; i < nums.length; i++) {
      temp.push(nums[i]);
      backTrack(temp, i + 1);
      temp.pop();
    }
  }
}
```
