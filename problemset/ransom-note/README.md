# 赎金信

> 简单
>
> https://leetcode.cn/problems/ransom-note/

## 题目

给你两个字符串：`ransomNote` 和 `magazine` ，判断 `ransomNote` 能不能由` magazine` 里面的字符构成。

如果可以，返回 `true` ；否则返回 `false` 。

`magazine` 中的每个字符只能在 `ransomNote` 中使用一次。

### 示例

#### 示例 1：

```
输入：ransomNote = "a", magazine = "b"
输出：false
```

#### 示例 2：
```
输入：ransomNote = "aa", magazine = "ab"
输出：false
```

#### 示例 3：

```
输入：ransomNote = "aa", magazine = "aab"
输出：true
```

## 解题

```ts 
/**
 * 哈希表
 * @desc 时间复杂度 O(N + M)  空间复杂度 O(S)
 * @param ransomNote
 * @param magazine
 * @returns
 */
export function canConstruct(ransomNote: string, magazine: string): boolean {
  const map = new Map<string, number>()

  for (const ch of magazine)
    map.set(ch, (map.get(ch) || 0) + 1)

  for (const ch of ransomNote) {
    if (!map.has(ch))
      return false
    else if (map.get(ch) === 1)
      map.delete(ch)
    else
      map.set(ch, map.get(ch)! - 1)
  }

  return true
}
```