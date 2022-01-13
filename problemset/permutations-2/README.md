# 全排列 II

> 难度：中等
>
> https://leetcode-cn.com/problems/permutations-ii/

## 题目

给定一个可包含重复数字的序列 `nums` ，按任意顺序 返回所有不重复的全排列。

### 示例

#### 示例 1：

```
输入：nums = [1,1,2]
输出：
[[1,1,2],
[1,2,1],
[2,1,1]]
```

#### 示例 2：

```
输入：nums = [1,2,3]
输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
```

## 解法

```typescript
/**
 * 回溯
 * @desc 时间复杂度 O(N*N!)  空间复杂度 O(N)
 * @param nums {number[]}
 * @return {number[][]}
 */
export function permuteUnique(nums: number[]): number[][] {
  const res: number[][] = [];
  const temp: number[] = [];
  const len = nums.length;
  nums.sort((a, b) => a - b);
  backTrack(new Set());
  return res;

  function backTrack(set: Set<string>) {
    if (temp.length === len) res.push([...temp]);

    let lastNums = NaN;
    for (let i = 0; i < len; i++) {
      const key = `${i}-${nums[i]}`;
      if (!set.has(key) && nums[i] !== lastNums) {
        lastNums = nums[i];
        set.add(key);
        temp.push(nums[i]);
        backTrack(set);
        set.delete(key);
        temp.pop();
      }
    }
  }
}
```
