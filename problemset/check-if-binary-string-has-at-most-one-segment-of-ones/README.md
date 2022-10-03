# 检查二进制字符串字段

> 难度：简单
>
> https://leetcode.cn/problems/check-if-binary-string-has-at-most-one-segment-of-ones/

## 题目

给你一个二进制字符串 `s` ，该字符串 **不含前导零** 。

如果 `s` 包含 **零个或一个由连续的** '1' 组成的字段 ，返回 true​​​ 。否则，返回 false 。

如果 `s` 中 **由连续若干个** '1' 组成的字段 **数量不超过** 1，返回 true​​​ 。否则，返回 false 。

### 示例

#### 示例 1：

```
输入：s = "1001"
输出：false
解释：由连续若干个 '1' 组成的字段数量为 2，返回 false
```

#### 示例 2：

```
输入：s = "110"
输出：true
```

## 解题

```ts 
/**
 * 寻找01串
 * @desc 时间复杂度 O(N)  空间复杂度 O(1)
 * @param s
 */
export function checkOnesSegment(s: string): boolean {
  return !s.includes('01')
}
```