# 最大数

> 难度：中等
>
> https://leetcode-cn.com/problems/largest-number/

## 题目

给定一组非负整数 `nums`，重新排列每个数的顺序（每个数不可拆分）使之组成一个最大
的整数。

注意：输出结果可能非常大，所以你需要返回一个字符串而不是整数。

### 示例

#### 示例 1：

```
输入：nums = [10,2]
输出："210"
```

#### 示例  2：

```
输入：nums = [3,30,34,5,9]
输出："9534330"
```

## 解题

```typescript
/**
 * 排序
 * @desc 时间复杂度 O(NlogNlogM)  空间复杂度 O(logN)
 * @param nums
 */
export function largestNumber(nums: number[]): string {
  // [4, 42] -> 442 > 424 -> [4, 24]
  // [4, 45] -> 454 > 445 -> [45, 4]
  nums.sort((x, y) => {
    let sx = 10;
    let sy = 10;
    while (sx <= x) sx *= 10;
    while (sy <= y) sy *= 10;
    return sx * y + x - (sy * x + y);
  });

  if (nums[0] === 0) return '0';

  return nums.join('');
}
```
