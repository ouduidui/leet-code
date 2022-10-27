# 数组元素积的符号

> 难度：简单
>
> https://leetcode.cn/problems/sign-of-the-product-of-an-array/

## 题目

已知函数 `signFunc(x)` 将会根据 `x` 的正负返回特定值：

- 如果 `x` 是正数，返回 `1` 。
- 如果 `x` 是负数，返回 `-1` 。
- 如果 `x` 是等于 `0` ，返回 `0` 。

给你一个整数数组 `nums` 。令 `product` 为数组 `nums` 中所有元素值的乘积。

返回 `signFunc(product)` 。

### 示例

#### 示例 1：

```
输入：nums = [-1,-2,-3,-4,3,2,1]
输出：1
解释：数组中所有值的乘积是 144 ，且 signFunc(144) = 1
```

#### 示例 2：

```
输入：nums = [1,5,0,2,-3]
输出：0
解释：数组中所有值的乘积是 0 ，且 signFunc(0) = 0
```

#### 示例 3：

```
输入：nums = [-1,1,-1,1,-1]
输出：-1
解释：数组中所有值的乘积是 -1 ，且 signFunc(-1) = -1
```

## 解题

```ts 
/**
 * 遍历
 * @desc 时间复杂度 O(N) 空间复杂度 O(1)
 * @param nums
 * @returns
 */
export function arraySign(nums: number[]): number {
  let sign = 1
  for (const num of nums) {
    if (num === 0)
      return 0

    if (num < 0)
      sign = -sign
  }
  return sign
}
```