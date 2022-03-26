# 只出现一次的数字 II

> 难度：中等
>
> https://leetcode-cn.com/problems/single-number-ii/

## 题目

给你一个整数数组 `nums` ，除某个元素仅出现 **一次** 外，其余每个元素都恰出现
**三次** 。请你找出并返回那个只出现了一次的元素。

### 示例

#### 示例 1：

```
输入：nums = [2,2,3,2]
输出：3
```

#### 示例 2：

```
输入：nums = [0,1,0,1,0,1,99]
输出：99
```

## 解题

### 哈希表

```typescript
/**
 * 哈希表
 * @desc 时间复杂度 O(N)  空间复杂度 O(N)
 * @param nums
 */
export function singleNumber(nums: number[]): number {
  const map = new Map<number, boolean>();

  for (const num of nums) {
    map.has(num) ? map.set(num, true) : map.set(num, false);
  }

  for (const [key, value] of map) {
    if (!value) return key;
  }

  return 0;
}
```

### 依次确定每一个二进制位

```typescript
/**
 * 依次确定每一个二进制位
 * @desc 时间复杂度 O(N)  空间复杂度 O(1)
 * @param nums
 */
export function singleNumber2(nums: number[]): number {
  let ans = 0;

  for (let i = 0; i < 32 /*32位整数*/; i++) {
    let total = 0;
    for (const num of nums) {
      // 累加num的第 i 个二进制位
      total += (num >> i) & 1;
    }
    // 对total除以 3，余数为只出现过一次的第 i 个二进制位
    if (total % 3 !== 0) {
      ans |= 1 << i;
    }
  }

  return ans;
}
```

### 数字电路设计

> [题解](https://leetcode-cn.com/problems/single-number-ii/solution/zhi-chu-xian-yi-ci-de-shu-zi-ii-by-leetc-23t6/)

```typescript
/**
 * 数字电路设计
 * @desc 时间复杂度 O(N)  空间复杂度 O(1)
 * @param nums
 */
export function singleNumber3(nums: number[]): number {
  let a = 0;
  let b = 0;
  for (const num of nums) {
    [a, b] = [(~a & b & num) | (a & ~b & ~num), ~a & (b ^ num)];
  }
  return b;
}
```

### 数字电路设计优化

```typescript
/**
 * 数字电路设计优化
 * @desc 时间复杂度 O(N)  空间复杂度 O(1)
 * @param nums
 */
export function singleNumber4(nums: number[]): number {
  let a = 0;
  let b = 0;
  for (const num of nums) {
    b = ~a & (b ^ num);
    a = ~b & (a ^ num);
  }
  return b;
}
```
