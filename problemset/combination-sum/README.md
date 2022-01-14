# 组合总和

> 难度：中等
>
> https://leetcode-cn.com/problems/combination-sum/

## 题目

给定一个无重复元素的正整数数组 `candidates` 和一个正整数 `target` ，找出
`candidates` 中所有可以使数字和为目标数 `target` 的唯一组合。

`candidates` 中的数字可以无限制重复被选取。如果至少一个所选数字数量不同，则两种
组合是唯一的。

对于给定的输入，保证和为 `target` 的唯一组合数少于 `150` 个。

### 示例

#### 示例 1：

```
输入: candidates = [2,3,6,7], target = 7
输出: [[7],[2,2,3]]
```

#### 示例 2：

```
输入: candidates = [2,3,5], target = 8
输出: [[2,2,2,2],[2,3,3],[3,5]]
```

#### 示例 3：

```
输入: candidates = [2], target = 1
输出: []
```

#### 示例 4：

```
输入: candidates = [1], target = 1
输出: [[1]]
```

#### 示例 5：

```
输入: candidates = [1], target = 2
输出: [[1,1]]
```

## 解法

### 回溯

```typescript
/**
 * 回溯
 * @desc 时间复杂度 O(S) S为所有可行解的长度之和   空间复杂度 O(target)
 * @param candidates
 * @param target
 */
export function combinationSum(
  candidates: number[],
  target: number
): number[][] {
  const ans: number[][] = [];
  for (let i: number = 0; i < candidates.length; i++) {
    backTracking(i, [candidates[i]]);
  }

  return ans;

  function backTracking(idx: number, solve: number[]) {
    if (getSum(solve) < target) {
      for (let i: number = idx; i < candidates.length; i++) {
        solve.push(candidates[i]);
        backTracking(i, solve);
        solve.pop();
      }
    } else if (getSum(solve) === target) {
      ans.push([...solve]);
    }
  }

  function getSum(arr: number[]): number {
    return arr.reduce((acc, cur) => acc + cur, 0);
  }
}
```

### 回溯 + 剪枝

```typescript
/**
 * 回溯 + 剪枝
 * @desc 时间复杂度 O(S) S为所有可行解的长度之和   空间复杂度 O(target)
 * @param candidates
 * @param target
 */
export function combinationSum2(
  candidates: number[],
  target: number
): number[][] {
  const ans: number[][] = [];
  backTracking(target, [], 0);
  return ans;

  function backTracking(target: number, combine: number[], idx: number) {
    if (idx === candidates.length) return;

    if (target === 0) {
      ans.push(combine);
      return;
    }

    backTracking(target, combine, idx + 1);

    if (target - candidates[idx] >= 0) {
      backTracking(
        target - candidates[idx],
        [...combine, candidates[idx]],
        idx
      );
    }
  }
}
```
