# 数字范围按位与

> 难度：中等
>
> https://leetcode-cn.com/problems/bitwise-and-of-numbers-range/

## 题目

给你两个整数 `left` 和 `right` ，表示区间 `[left, right]` ，返回此区间内所有数字
**按位与** 的结果（包含 `left` `、right` 端点）。

### 示例

#### 示例 1：

```
输入：left = 5, right = 7
输出：4
```

#### 示例 2：

```
输入：left = 0, right = 0
输出：0
```

#### 示例 3：

```
输入：left = 1, right = 2147483647
输出：0
```

## 解题

### 位移

```typescript
/**
 * 位移
 * @desc 时间复杂度 O(logN)  空间复杂度 O(1)
 * @param left
 * @param right
 */
export function rangeBitwiseAnd(left: number, right: number): number {
  let shift = 0;
  // 找到公共前缀
  while (left < right) {
    left >>= 1;
    right >>= 1;
    shift++;
  }

  return left << shift;
}
```

### Brian Kernighan 算法

```typescript
/**
 * Brian Kernighan 算法
 * @desc 时间复杂度 O(logN)  空间复杂度 O(1)
 * @param left
 * @param right
 */
export function rangeBitwiseAnd2(left: number, right: number): number {
  while (left < right) {
    // 抹去最右边的 1
    right = right & (right - 1);
  }

  return right;
}
```
