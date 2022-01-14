# 全排列

> 难度：中等
>
> https://leetcode-cn.com/problems/permutations/

## 题目

给定一个不含重复数字的数组 `nums` ，返回其 所有可能的全排列。你可以 **按任意顺
序** 返回答案。

### 示例

#### 示例 1：

```
输入：nums = [1,2,3]
输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
```

#### 示例 2：

```
输入：nums = [0,1]
输出：[[0,1],[1,0]]
```

#### 示例 3：

```
输入：nums = [1]
输出：[[1]]
```

## 解题

```typescript
/**
 * 回溯
 * @desc 时间复杂度 O(N*N!)  空间复杂度 O(N)
 * @param nums {number[]}
 * @return {number[][]}
 */
export function permute(nums: number[]): number[][] {
  const res: number[][] = [];
  const temp: number[] = [];
  const len: number = nums.length;
  backtrack([]);
  return res;

  function backtrack(used: boolean[]) {
    if (temp.length === len) res.push([...temp]);
    else {
      for (let i = 0; i < len; i++) {
        if (!used[i]) {
          temp.push(nums[i]);
          used[i] = true;
          backtrack(used);
          used[i] = false;
          temp.pop();
        }
      }
    }
  }
}
```
