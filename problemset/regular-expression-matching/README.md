# 正则表达式匹配

> 难度：困难
>
> https://leetcode-cn.com/problems/regular-expression-matching/

## 题目

给你一个字符串`s`和一个字符规律`p`，请你来实现一个支持 `'.'` 和 `'*'` 的正则表达
式匹配。

- `'.'` 匹配任意单个字符
- `'*'` 匹配零个或多个前面的那一个元素

所谓匹配，是要涵盖**整个**字符串`s`的，而不是部分字符串。

### 示例

#### 示例 1：

```
输入：s = "aa" p = "a"
输出：false
解释："a" 无法匹配 "aa" 整个字符串。
```

#### 示例 2:

```
输入：s = "aa" p = "a*"
输出：true
解释：因为 '*' 代表可以匹配零个或多个前面的那一个元素, 在这里前面的元素就是 'a'。因此，字符串 "aa" 可被视为 'a' 重复了一次。
```

#### 示例 3：

```
输入：s = "ab" p = ".*"
输出：true
解释：".*" 表示可匹配零个或多个（'*'）任意字符（'.'）。
```

#### 示例 4：

```
输入：s = "aab" p = "c*a*b"
输出：true
解释：因为 '*' 表示零个或多个，这里 'c' 为 0 个, 'a' 被重复一次。因此可以匹配字符串 "aab"。
```

#### 示例 5：

```
输入：s = "mississippi" p = "mis*is*p*."
输出：false
```

## 解法

### 解题思路

#### 从左往右扫的话

字符后面是否跟着星号会影响结果，分析起来有点复杂。

![regular-expression-matching-1](https://user-images.githubusercontent.com/88995580/159103294-749d501f-fbe6-413f-b7ee-91e2eb0ae192.png)

#### 选择从右往左扫描

星号的前面肯定有一个字符，星号也只影响这一个字符，它就像一个拷贝器。

![regular-expression-matching-2](https://user-images.githubusercontent.com/88995580/159103304-5f39ba3a-3e34-4291-a36c-a75fea8d284d.png)

`s`、`p` 串是否匹配，取决于：最右端是否匹配、剩余的子串是否匹配。

只是最右端可能是特殊符号，需要分情况讨论而已。

#### 通用地表示出子问题

大子串是否匹配，和剩余子串是否匹配，是规模不一样的同一问题。

![regular-expression-matching-3](https://user-images.githubusercontent.com/88995580/159103299-b6785ab7-30d9-4ede-a75a-0e3b258ced95.png)

##### **情况 1：`s[i-1]` 和 `p[j-1]` `是匹配的**

最右端的字符是匹配的，那么，大问题的答案 = 剩余子串是否匹配。

![regular-expression-matching-4](https://user-images.githubusercontent.com/88995580/159103303-46bff88d-dc37-4e94-9a96-60b0351ba846.png)

##### **情况 2：`s[i-1]` 和 `p[j-1]` `是不匹配的**

右端不匹配，还不能判死刑——可能是 `p[j-1]` 为星号造成的不匹配，星号不是真实字符，
它不匹配不算数。

如果 `p[j-1]p[j−1]` 不是星号，那就真的不匹配了。

![regular-expression-matching-5](https://user-images.githubusercontent.com/88995580/159103301-29148616-7352-4f4a-bca9-44d94c32bf25.png)

**`p[j-1]` 是星号，并且 `s[i-1]` 和 `p[j-2]` 匹配，要考虑三种情况：**

- `p[j−1]` 星号可以让 `p[j-2]` 在 p 串中消失、出现 1 次、出现 >=2 次。
- 只要其中一种使得剩余子串能匹配，那就能匹配，见下图 a1、a2、a3。

![regular-expression-matching-6](https://user-images.githubusercontent.com/88995580/159103274-821a8f73-dd39-4bb9-81f7-819b961810f6.png)

- a3 情况：假设 s 的右端是一个 `a`，p 的右端是 `a*` ，`*` 让 `a` 重复 >= 2 次
  - 星号不是真实字符，s、p 是否匹配，要看 s 去掉末尾的 `a`，p 去掉末尾一个 `a`，
    剩下的是否匹配。
  - 星号拷贝了 >=2 个 `a`，拿掉一个，剩下 >=1 个`a`，p 末端依旧是 `a*` 没变。
  - s 末尾的 `a` 被抵消了，继续考察 `s(0,i-2)` 和 `p(0,i-1)` 是否匹配。

**`p[j−1]` == "∗"，但 `s[i-1]` 和 `p[j−2]` 不匹配** `s[i−1]` 和 `p[j−2]` 不匹配
，还有救，`p[j−1]` 星号可以干掉 `p[j−2]`，继续考察 `s(0,i-1)` 和 `p(0,j-3)`。

![regular-expression-matching-7](https://user-images.githubusercontent.com/88995580/159103291-23ccb475-9627-4fac-8980-b7884c182a8b.png)

#### base case

p 为空串，s 不为空串，肯定不匹配。

s 为空串，但 p 不为空串，要想匹配，只可能是右端是星号，它干掉一个字符后，把 p 变
为空串。

s、p 都为空串，肯定匹配。

![regular-expression-matching-8](https://user-images.githubusercontent.com/88995580/159103285-6dada695-4b49-414b-b7a4-be5d5dee5995.png)

### 实现

```typescript
/**
 * 动态规划
 * @param s {string} 字符串
 * @param p {string} 正则串
 */
export function isMatch(s: string, p: string): boolean {
  if (!s || !p) return false;

  // 获取长度
  const sLen: number = s.length;
  const pLen: number = p.length;

  const dp: Array<Array<boolean>> = Array(sLen + 1);
  for (let i: number = 0; i < dp.length; i++) {
    // 将项默认为false
    dp[i] = Array(pLen + 1).fill(false);
  }

  // 初始值为true
  dp[0][0] = true;

  // 检测s为空串，但p不为空串情况
  // 要想匹配，只可能是右端是星号，它干掉一个字符后，把 p 变为空串
  for (let j: number = 1; j < pLen + 1; j++) {
    if (p[j - 1] == '*') dp[0][j] = dp[0][j - 2];
  }

  for (let i: number = 1; i < sLen + 1; i++) {
    for (let j: number = 1; j < pLen + 1; j++) {
      if (s[i - 1] == p[j - 1] || p[j - 1] == '.') {
        // 最右端的字符与最右端的正则相匹配
        dp[i][j] = dp[i - 1][j - 1];
      } else if (p[j - 1] == '*') {
        // 如果s[i - 1]与p[j - 1]不匹配，则判断p[j - 1]是否为"*"
        if (s[i - 1] == p[j - 2] || p[j - 2] == '.') {
          // 如果s[i-1] 和 p[j-2] 匹配
          dp[i][j] =
            dp[i][j - 2] || // 让 p[j-2] 重复0次
            dp[i - 1][j - 2] || // 让 p[j-2] 重复1次
            dp[i - 1][j]; // 让 p[j-2] 重复大于等于2次
        } else {
          dp[i][j] = dp[i][j - 2];
        }
      }
    }
  }

  return dp[sLen][pLen];
}
```
