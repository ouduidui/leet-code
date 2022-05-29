# 验证IP地址

> 难度：中等
>
> https://leetcode.cn/problems/validate-ip-address/

## 题目

给定一个字符串 `queryIP`。如果是有效的 `IPv4` 地址，返回 "IPv4" ；如果是有效的 `IPv6` 地址，返回 "IPv6" ；如果不是上述类型的 IP 地址，返回 "Neither" 。

**有效的IPv4地址** 是 “x1.x2.x3.x4” 形式的IP地址。 其中 `0 <= xi <= 255` 且 `xi` 不能包含 **前导零**。例如: “192.168.1.1” 、 “192.168.1.0” 为有效IPv4地址， “192.168.01.1” 为无效IPv4地址; “192.168.1.00” 、 “192.168@1.1” 为无效IPv4地址。

**一个有效的IPv6地址** 是一个格式为“x1:x2:x3:x4:x5:x6:x7:x8” 的IP地址，其中:

- `1 <= xi.length <= 4`
- xi 是一个 **十六进制字符串** ，可以包含数字、小写英文字母( 'a' 到 'f' )和大写英文字母( 'A' 到 'F' )。
- 在 **xi** 中允许前导零。

例如 "2001:0db8:85a3:0000:0000:8a2e:0370:7334" 和 "2001:db8:85a3:0:0:8A2E:0370:7334" 是有效的 IPv6 地址，而 "2001:0db8:85a3::8A2E:037j:7334" 和 "02001:0db8:85a3:0000:0000:8a2e:0370:7334" 是无效的 IPv6 地址。

#### 示例 1：

```
输入：queryIP = "172.16.254.1"
输出："IPv4"
解释：有效的 IPv4 地址，返回 "IPv4"
```

#### 示例 2：

```
输入：queryIP = "2001:0db8:85a3:0:0:8A2E:0370:7334"
输出："IPv6"
解释：有效的 IPv6 地址，返回 "IPv6"
```

#### 示例 3：

```
输入：queryIP = "256.256.256.256"
输出："Neither"
解释：既不是 IPv4 地址，又不是 IPv6 地址
```

## 解题

```ts 
/**
 * 依次判断
 * @desc 时间复杂度 O(N)  空间复杂度 O(1)
 * @param queryIP
 * @returns
 */
export function validIPAddress(queryIP: string): 'IPv4' | 'IPv6' | 'Neither' {
  if (queryIP.split('.').length === 4) return checkIPv4(queryIP)
  if (queryIP.split(':').length === 8) return checkIPv6(queryIP)
  return 'Neither'

  function checkIPv4(queryIP: string): 'IPv4' | 'Neither' {
    const arr = queryIP.split('.')
    for (const str of arr) {
      if (str === '') return 'Neither'
      if (str[0] === '0' && str.length !== 1) return 'Neither'
      for (const ch of str)
        if (!isNumber(ch)) return 'Neither'

      const num = Number(str)
      if (num < 0 || num > 255) return 'Neither'
    }

    return 'IPv4'
  }

  function checkIPv6(queryIP: string): 'IPv6' | 'Neither' {
    const arr = queryIP.split(':')
    for (const str of arr) {
      const len = str.length
      if (len < 1 || len > 4) return 'Neither'
      for (const ch of str)
        if (!isLetterOrNumber(ch)) return 'Neither'
    }

    return 'IPv6'
  }

  function isNumber(ch: string) {
    return ch >= '0' && ch <= '9'
  }

  function isLetterOrNumber(ch: string) {
    if (ch >= '0' && ch <= '9') return true
    if (ch >= 'A' && ch <= 'F') return true
    if (ch >= 'a' && ch <= 'f') return true
    return false
  }
}
```