# 差的绝对值为 K 的数对数目

> 难度：简单
>
> https://leetcode-cn.com/problems/count-number-of-pairs-with-absolute-difference-k/

## 题目

给你一个整数数组 `nums` 和一个整数 `k` ，请你返回数对 `(i, j)` 的数目，满足
`i < j` 且 `|nums[i] - nums[j]| == k` 。

`|x|` 的值定义为：

- 如果 `x >= 0` ，那么值为 `x` 。
- 如果 `x < 0` ，那么值为 `-x` 。

### 示例

#### 示例 1：

```
输入：nums = [1,2,2,1], k = 1
输出：4
解释：差的绝对值为 1 的数对为：
```

- [**1**,**2**,2,1]
- [**1**,2,**2**,1]
- [1,**2**,2,**1**]
- [1,2,**2**,**1**]

#### 示例 2：

```
输入：nums = [1,3], k = 3
输出：0
解释：没有任何数对差的绝对值为 3 。
```

#### 示例 3：

```
输入：nums = [3,2,1,5,4], k = 2
输出：3
解释：差的绝对值为 2 的数对为：
- [3,2,1,5,4]
- [3,2,1,5,4]
- [3,2,1,5,4]
```

## 解法

### 暴力解法

```typescript
/**
 * 暴力解法
 * @desc 时间复杂度 O(N^2)   空间复杂度 O(1)
 * @param nums
 * @param k
 */
export function countKDifference(nums: number[], k: number): number {
  let ret = 0;

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (Math.abs(nums[i] - nums[j]) === k) {
        ret++;
      }
    }
  }

  return ret;
}
```

### 哈希表

```typescript
/**
 * 哈希表
 * @desc 时间复杂度 O(N)   空间复杂度 O(N)
 * @param nums
 * @param k
 */
export function countKDifference2(nums: number[], k: number): number {
  let ret = 0;
  const count = new Map<number, number>();
  for (let i = 0; i < nums.length; i++) {
    ret += (count.get(nums[i] - k) || 0) + (count.get(nums[i] + k) || 0);
    count.set(nums[i], (count.get(nums[i]) || 0) + 1);
  }

  return ret;
}
```
