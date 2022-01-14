# 组合总和 II

> 难度：中等
>
> https://leetcode-cn.com/problems/combination-sum-ii/

## 题目

给定一个数组 `candidates` 和一个目标数 `target` ，找出 `candidates` 中所有可以使
数字和为 `target` 的组合。

`candidates` 中的每个数字在每个组合中只能使用一次。

注意：解集不能包含重复的组合。

### 示例

#### 示例 1:

```
输入: candidates = [10,1,2,7,6,1,5], target = 8,
输出:
[
    [1,1,6],
    [1,2,5],
    [1,7],
    [2,6]
]
```

#### 示例 2:

```
输入: candidates = [2,5,2,1,2], target = 5,
输出:
[
    [1,2,2],
    [5]
]
```

## 解法

```typescript
/**
 * 回溯
 * @desc 时间复杂度 O(2^n * n)    空间复杂度 O(n)
 * @param candidates
 * @param target
 */
export function combinationSum2(
  candidates: number[],
  target: number
): number[][] {
  const ans: number[][] = [];
  candidates.sort((a, b) => a - b);
  backTracking(0, [], 0);

  return ans;

  function backTracking(sum: number, combine: number[], startIdx: number) {
    if (sum > target) return;
    if (sum === target) return ans.push([...combine]);

    for (let i: number = startIdx; i < candidates.length; i++) {
      // 避免重复操作
      if (i !== startIdx && candidates[i - 1] === candidates[i]) continue;

      combine.push(candidates[i]);
      backTracking(sum + candidates[i], combine, i + 1);
      combine.pop();
    }
  }
}
```
