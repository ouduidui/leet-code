# 字母异位词分组

> 难度：中等
>
> https://leetcode-cn.com/problems/group-anagrams/

## 题目

给你一个字符串数组，请你将 **字母异位词** 组合在一起。可以按任意顺序返回结果列表
。

字母异位词 是由重新排列源单词的字母得到的一个新单词，所有源单词中的字母通常恰好
只用一次。

### 示例

#### 示例 1:

```
输入: strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
输出: [["bat"],["nat","tan"],["ate","eat","tea"]]
```

#### 示例 2:

```
输入: strs = [""]
输出: [[""]]
```

#### 示例 3:

```
输入: strs = ["a"]
输出: [["a"]]
```

## 排序

```typescript
/**
 * 排序
 * @desc 时间复杂度 O(nklogk) n是strs中的字符串的数量，k是strs中的字符串的的最大长度
 * @desc 空间复杂度 O(nk)
 * @param strs
 */
export function groupAnagrams(strs: string[]): string[][] {
  if (strs.length === 1) return [strs];

  const map = new Map<string, string[]>();

  for (let str of strs) {
    let arr = [...str];
    arr.sort();
    let key = arr.join('');
    let list: string[] = map.has(key) ? (map.get(key) as string[]) : [];
    list.push(str);
    map.set(key, list);
  }

  return Array.from(map.values());
}
```
