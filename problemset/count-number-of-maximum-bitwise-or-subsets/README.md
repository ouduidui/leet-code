# 统计按位或能得到最大值的子集数目

> 难度：中等
>
> https://leetcode-cn.com/problems/count-number-of-maximum-bitwise-or-subsets/

## 题目

给你一个整数数组 `nums` ，请你找出 `nums` 子集 按位或 可能得到的** 最大值** ，并
返回按位或能得到最大值的 **不同非空子集的数目** 。

如果数组 `a` 可以由数组 `b` 删除一些元素（或不删除）得到，则认为数组 `a` 是数组
`b` 的一个 **子集** 。如果选中的元素下标位置不一样，则认为两个子集 **不同** 。

对数组 `a `执行 **按位或** ，结果等于 `a[0] OR a[1] OR ... OR a[a.length - 1]`（
下标从 0 开始）。

### 示例

#### 示例 1：

```
输入：nums = [3,1]
输出：2
解释：子集按位或能得到的最大值是 3 。有 2 个子集按位或可以得到 3 ：
- [3]
- [3,1]
```

#### 示例 2：

```
输入：nums = [2,2,2]
输出：7
解释：[2,2,2] 的所有非空子集的按位或都可以得到 2 。总共有 23 - 1 = 7 个子集。
```

#### 示例 3：

```
输入：nums = [3,2,1,5]
输出：6
解释：子集按位或可能的最大值是 7 。有 6 个子集按位或可以得到 7 ：
- [3,5]
- [3,1,5]
- [3,2,5]
- [3,2,1,5]
- [2,5]
- [2,1,5]
```

## 解题

### 回溯

```typescript
/**
 * 回溯
 * @desc 时间复杂度 O(2^N)   空间复杂度 O(N)
 * @param nums
 */
export function countMaxOrSubsets(nums: number[]): number {
  const len = nums.length;
  let max = 0;
  let count = 0;
  dfs(0, 0);
  return count;

  function dfs(pos: number, or: number) {
    if (pos === len) {
      if (or === max) count++;
      else if (or > max) {
        count = 1;
        max = or;
      }
      return;
    }

    dfs(pos + 1, or | nums[pos]);
    dfs(pos + 1, or);
  }
}
```

### 位运算

```typescript
/**
 * 位运算
 * @param nums
 */
export function countMaxOrSubsets2(nums: number[]): number {
  let max = 0;
  let count = 0;
  const len = nums.length;
  // len 长度的数组有 2^len - 1 种非空子集情况
  // 通过二进制来分别每一种情况
  for (let i = 0; i < 1 << len; i++) {
    let or = 0;
    for (let j = 0; j < len; j++) {
      // 判断当前的子集中，当前这个元素是否包含在里面
      if (((i >> j) & 1) === 1) {
        or |= nums[j];
      }
    }
    if (or > max) {
      max = or;
      count = 1;
    } else if (or === max) {
      count++;
    }
  }

  return count;
}
```
