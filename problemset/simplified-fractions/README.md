# 最简分数

> 难度：中等
>
> https://leetcode-cn.com/problems/simplified-fractions/

## 题目

给你一个整数 `n` ，请你返回所有 `0` 到 `1` 之间（不包括 `0` 和 `1`）满足分母小于
等于 `n` 的 最简 `分数` 。分数可以以 **任意** 顺序返回。

### 示例

#### 示例 1：

```
输入：n = 2
输出：["1/2"]
解释："1/2" 是唯一一个分母小于等于 2 的最简分数。
```

#### 示例 2：

```
输入：n = 3
输出：["1/2","1/3","2/3"]
```

#### 示例 3：

```
输入：n = 4
输出：["1/2","1/3","1/4","2/3","3/4"]
解释："2/4" 不是最简分数，因为它可以化简为 "1/2" 。
```

#### 示例 4：

```
输入：n = 1
输出：[]
```

## 解题

```typescript
/**
 * 数学
 * @desc 时间复杂度 O(N^2 * logN)  空间复杂度 O(1)
 * @param n
 */
export function simplifiedFractions(n: number): string[] {
  const ans: string[] = [];
  // 分母
  for (let i = 2; i <= n; i++) {
    // 分子
    for (let j = 1; j < i; j++) {
      // 如果最大公约数为1的话
      if (greatestCommonDivisor(j, i) === 1) {
        ans.push(j + '/' + i);
      }
    }
  }

  return ans;

  /**
   * 求最大公约数
   * @desc 用较小数除较大数，再用出现的余数（第一余数）去除除数，再用出现的余数（第二余数）去除第一余数，如此反复，直到最后余数是0为止。 如果是求两个数的最大公约数，那么最后的除数就是这两个数的最大公约数
   * @param numerator 分子
   * @param denominator 分母
   */
  function greatestCommonDivisor(
    numerator: number,
    denominator: number
  ): number {
    if (denominator === 0) {
      return numerator;
    }
    return greatestCommonDivisor(denominator, numerator % denominator);
  }
}
```
