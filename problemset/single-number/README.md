# 只出现一次的数字

> 难度：简单
>
> https://leetcode-cn.com/problems/single-number/

## 题目

给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那
个只出现了一次的元素。

> 说明： 你的算法应该具有线性时间复杂度。 你可以不使用额外空间来实现吗？

### 示例

#### 示例 1:

```
输入: [2,2,1]
输出: 1
```

#### 示例 2:

```
输入: [4,1,2,1,2]
输出: 4
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
  const set = new Set<number>();
  for (const num of nums) {
    set.has(num) ? set.delete(num) : set.add(num);
  }
  return [...set][0];
}
```

### 位运算

```typescript
/**
 * 位运算
 * @desc 时间复杂度 O(N)  空间复杂度 O(1)
 * @param nums
 */
export function singleNumber2(nums: number[]): number {
  let single = 0;
  for (const num of nums) {
    // 异或处理
    // a⊕b⊕a = b⊕a⊕a = b⊕(a⊕a) = b⊕0 = b
    single ^= num;
  }
  return single;
}
```
