# TinyURL 的加密与解密

> 难度：中等
>
> https://leetcode.cn/problems/encode-and-decode-tinyurl/

## 题目

`TinyURL` 是一种 `URL` 简化服务， 比如：当你输入一个 URL `https://leetcode.com/problems/design-tinyurl` 时，它将返回一个简化的URL `http://tinyurl.com/4e9iAk` 。请你设计一个类来加密与解密 `TinyURL` 。

加密和解密算法如何设计和运作是没有限制的，你只需要保证一个 `URL` 可以被加密成一个 `TinyURL `，并且这个 `TinyURL` 可以用解密方法恢复成原本的 `URL` 。

实现 Solution 类：

- `Solution()` 初始化 TinyURL 系统对象。
- `String encode(String longUrl)` 返回 `longUrl` 对应的 `TinyURL` 。
- `String decode(String shortUrl)` 返回 `shortUrl` 原本的 `URL` 。题目数据保证给定的 `shortUrl` 是由同一个系统对象加密的。
 

### 示例：

```
输入：url = "https://leetcode.com/problems/design-tinyurl"
输出："https://leetcode.com/problems/design-tinyurl"

解释：
Solution obj = new Solution();
string tiny = obj.encode(url); // 返回加密后得到的 TinyURL 。
string ans = obj.decode(tiny); // 返回解密后得到的原本的 URL 。
```

## 解题

```ts 

/**
 * 哈希表
 */

const map = new Map<string, string>()
const baseUrl = 'https://tinyurl.com/'
export function encode(longUrl: string): string {
  let key
  while (true) {
    key = ((Math.random() * Number.MAX_SAFE_INTEGER) >> 0).toFixed(16)
    if (!map.has(key)) break
  }
  map.set(key, longUrl)
  const tinyUrl = baseUrl + key
  return tinyUrl
}

export function decode(shortUrl: string): string {
  const key = shortUrl.substring(shortUrl.lastIndexOf('/') + 1)
  return map.get(key) || ''
}
```