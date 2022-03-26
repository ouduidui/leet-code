# 好子集的数目

> 难度：困难
>
> https://leetcode-cn.com/problems/the-number-of-good-subsets/

## 题目

给你一个整数数组 `nums` 。如果 `nums` 的一个子集中，所有元素的乘积可以表示为一个
或多个 **互不相同的质数** 的乘积，那么我们称它为 **好子集** 。

- 比方说，如果 `nums = [1, 2, 3, 4]` ：
  - `[2, 3]` ，`[1, 2, 3]` 和 `[1, 3]` 是 **好** 子集，乘积分别为
    `6 = 2*3 `，`6 = 2*3` 和 `3 = 3` 。
  - `[1, 4]` 和 `[4]` 不是 **好** 子集，因为乘积分别为 `4 = 2*2` 和 `4 = 2*2` 。

请你返回 `nums` 中不同的 **好** 子集的数目对 `10^9 + 7` 取余 的结果。

`nums` 中的 **子集** 是通过删除 `nums` 中一些（可能一个都不删除，也可能全部都删
除）元素后剩余元素组成的数组。如果两个子集删除的下标不同，那么它们被视为不同的子
集。

### 示例

#### 示例 1：

```
输入：nums = [1,2,3,4]
输出：6
解释：好子集为：
- [1,2]：乘积为 2 ，可以表示为质数 2 的乘积。
- [1,2,3]：乘积为 6 ，可以表示为互不相同的质数 2 和 3 的乘积。
- [1,3]：乘积为 3 ，可以表示为质数 3 的乘积。
- [2]：乘积为 2 ，可以表示为质数 2 的乘积。
- [2,3]：乘积为 6 ，可以表示为互不相同的质数 2 和 3 的乘积。
- [3]：乘积为 3 ，可以表示为质数 3 的乘积。
```

#### 示例 2：

```
输入：nums = [4,2,3,15]
输出：5
解释：好子集为：
- [2]：乘积为 2 ，可以表示为质数 2 的乘积。
- [2,3]：乘积为 6 ，可以表示为互不相同质数 2 和 3 的乘积。
- [2,15]：乘积为 30 ，可以表示为互不相同质数 2，3 和 5 的乘积。
- [3]：乘积为 3 ，可以表示为质数 3 的乘积。
- [15]：乘积为 15 ，可以表示为互不相同质数 3 和 5 的乘积。
```

## 解题

```typescript
// 1 - 30 的质数
const PRIMES = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29];
// nums数组最大数值
const NUM_MAX = 30;
// 除数
const MOD = 10 ** 9 + 7;

export function numberOfGoodSubsets(nums: number[]): number {
  // 初始化每个数出现频率
  const freq = new Array(NUM_MAX + 1).fill(0);
  for (const num of nums) {
    freq[num]++;
  }

  const f = new Array(1 << PRIMES.length).fill(0);
  f[0] = 1;
  for (let i = 0; i < freq[1]; i++) {
    f[0] = (f[0] * 2) % MOD;
  }

  // 遍历 2 - 30每个数
  for (let i = 2; i <= NUM_MAX; i++) {
    // 如果没出现过，直接跳过
    if (freq[i] === 0) {
      continue;
    }

    // 检查 i 的每个质因数是否均不超过 1 个
    let subset = 0;
    let check = true;
    // 遍历所有质数
    for (let j = 0; j < PRIMES.length; j++) {
      const prime = PRIMES[j];
      if (i % (prime * prime) == 0) {
        check = false;
        break;
      }
      if (i % prime === 0) {
        subset |= 1 << j;
      }
    }
    if (!check) {
      continue;
    }

    // 动态规划
    for (let mask = (1 << PRIMES.length) - 1; mask > 0; mask--) {
      if ((mask & subset) === subset) {
        f[mask] = (f[mask] + f[mask ^ subset] * freq[i]) % MOD;
      }
    }
  }

  let ans = 0;
  for (let mask = 1, maskMax = 1 << PRIMES.length; mask < maskMax; mask++) {
    ans = (ans + f[mask]) % MOD;
  }

  return ans;
}
```
