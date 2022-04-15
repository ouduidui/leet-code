# 第一个错误的版本

> 难度：简单
>
> https://leetcode-cn.com/problems/first-bad-version/

## 题目

你是产品经理，目前正在带领一个团队开发新的产品。不幸的是，你的产品的最新版本没有通过质量检测。由于每个版本都是基于之前的版本开发的，所以错误的版本之后的所有版本都是错的。

假设你有 `n` 个版本 `[1, 2, ..., n]`，你想找出导致之后所有版本出错的第一个错误的版本。

你可以通过调用 `bool isBadVersion(version)` 接口来判断版本号 `version` 是否在单元测试中出错。实现一个函数来查找第一个错误的版本。你应该尽量减少对调用 `API` 的次数。

### 示例

#### 示例 1：

```
输入：n = 5, bad = 4
输出：4
解释：
调用 isBadVersion(3) -> false 
调用 isBadVersion(5) -> true 
调用 isBadVersion(4) -> true
所以，4 是第一个错误的版本。
```

#### 示例 2：

```
输入：n = 1, bad = 1
输出：1
```

## 解题

```ts
/**
 * 二分法
 * @desc 时间复杂度 O(logN)  空间复杂度 O(1)
 * @param isBadVersion
 * @returns
 */
export function solution(
  isBadVersion: (version: number) => boolean,
): (n: number) => number {
  return function(n: number): number {
    let low = 1
    let high = n
    while (low < high) {
      const mid = Math.floor(low + (high - low) / 2)
      if (isBadVersion(mid))
        high = mid
      else
        low = mid + 1
    }
    return low
  }
}
```