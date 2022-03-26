# 寻找最近的回文数

> 难度：困难
>
> https://leetcode-cn.com/problems/find-the-closest-palindrome/

## 题目

给定一个表示整数的字符串 `n` ，返回与它最近的回文整数（不包括自身）。如果不止一
个，返回较小的那个。

“最近的”定义为两个整数**差的绝对值**最小。

### 示例

#### 示例 1:

```
输入: n = "123"
输出: "121"
```

#### 示例 2:

```
输入: n = "1"
输出: "0"
解释: 0 和 2是最近的回文，但我们返回最小的，也就是 0。
```

## 解题

```typescript
/**
 * 模拟
 * @desc 时间复杂度 O(logN)  空间复杂度 O(logN)
 * @param n
 */
export function nearestPalindromic(n: string): string {
  const selfNumber = BigInt(n);
  // 构造所有回文数
  const candidates = getCandidates(n);
  // 初始化答案
  let ans = -1n;

  // 遍历所有回文数，找到符合条件的回文数
  for (const candidate of candidates) {
    // 如果跟原值相等，直接跳过
    if (candidate === selfNumber) continue;

    // 回文数跟原值的差的绝对值
    const diff1 =
      candidate - selfNumber >= 0n
        ? candidate - selfNumber
        : -1n * (candidate - selfNumber);
    // 回文数跟上一个保存的答案的差的绝对值
    const diff2 =
      ans - selfNumber >= 0n ? ans - selfNumber : -1n * (ans - selfNumber);

    // 如果ans还是初始值
    // 如果新的回文数更加接近原值
    // 如果新的回文数跟上一个回文数一样接近原值，但是新的回文数比上一个答案小 （也就是上一个答案大于原值，而新的小于原值的情况）
    // 如何上述情况，替换答案
    if (ans === -1n || diff1 < diff2 || (diff1 === diff2 && candidate < ans)) {
      ans = candidate;
    }
  }

  return ans + '';

  /**
   * 构建所有回文数集合
   * @param n
   */
  function getCandidates(n: string): bigint[] {
    const len = n.length;

    // 初始化两个边缘情况答案
    const candidates: bigint[] = [
      BigInt(10 ** (len - 1) - 1), //  999…999
      BigInt(10 ** len + 1) // 100…001
    ];

    // 获取前半段，如1234567 -> 1234
    const selfPrefix = BigInt(n.substring(0, (len + 1) >> 1));
    // 逐一生成符合条件的回文数
    for (let i = selfPrefix - 1n; i <= selfPrefix + 1n; i++) {
      // 前半段
      const prefix = i + '';
      // 后半段 直接拿前半段倒序
      const suffix = prefix.split('').reverse().join('');
      // 拼接成回文数
      const candidate = prefix + suffix.substring(len & 1 /* 判断奇偶 */);
      candidates.push(BigInt(candidate));
    }

    return candidates;
  }
}
```
