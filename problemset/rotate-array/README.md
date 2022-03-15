# 轮转数组

> 难度：中等
>
> https://leetcode-cn.com/problems/rotate-array/

## 题目

给你一个数组，将数组中的元素向右轮转 `k`  个位置，其中  `k` 是非负数。

### 示例

#### 示例 1:

```
输入: nums = [1,2,3,4,5,6,7], k = 3
输出: [5,6,7,1,2,3,4]
解释:
向右轮转 1 步: [7,1,2,3,4,5,6]
向右轮转 2 步: [6,7,1,2,3,4,5]
向右轮转 3 步: [5,6,7,1,2,3,4]
```

#### 示例  2:

```
输入：nums = [-1,-100,3,99], k = 2
输出：[3,99,-1,-100]
解释:
向右轮转 1 步: [99,-1,-100,3]
向右轮转 2 步: [3,99,-1,-100]
```

## 解题

### 使用额外的数组

```typescript
/**
 * 使用额外的数组
 * @desc 时间复杂度 O(N) 空间复杂度 O(N)
 * @param nums
 * @param k
 */
export function rotate(nums: number[], k: number): void {
  if ((k = k % nums.length) && k === 0) return;
  nums.unshift(...nums.splice(nums.length - k));
}
```

### 环形替换

```typescript
/**
 * 环形替换
 * @desc 时间复杂度 O(N)  空间复杂度 O(1)
 * @param nums
 * @param k
 */
export function rotate2(nums: number[], k: number): void {
  const len = nums.length;
  if ((k = k % len) && k === 0) return;

  // 求最大公约数
  const gcd = (x: number, y: number): number => (y ? gcd(y, x % y) : x);
  // 遍历的次数
  const count = gcd(k, len);

  for (let start = 0; start < count; start++) {
    let current = start;
    let prev = nums[start];

    // nums[i] < nums-> nums[(i+k)%len]
    do {
      const next = (current + k) % len;
      [nums[next], prev] = [prev, nums[next]];
      current = next;
    } while (start !== current);
  }
}
```

### 数组翻转

```typescript
/**
 * 数组翻转
 * @desc 时间复杂度 O(N)  空间复杂度 O(1)
 * @param nums
 * @param k
 */
export function rotate3(nums: number[], k: number): void {
  const len = nums.length;
  if ((k = k % len) && k === 0) return;
  reverse(nums, 0, len - 1);
  reverse(nums, 0, k - 1);
  reverse(nums, k, len - 1);

  function reverse(nums: number[], start: number, end: number) {
    while (start < end) {
      [nums[start], nums[end]] = [nums[end], nums[start]];
      start++;
      end--;
    }
  }
}
```
