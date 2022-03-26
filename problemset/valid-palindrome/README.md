# 验证回文串

> 难度：简单
>
> https://leetcode-cn.com/problems/valid-palindrome/

## 题目

给定一个字符串，验证它是否是回文串，只考虑字母和数字字符，可以忽略字母的大小写。

说明：本题中，我们将空字符串定义为有效的回文串。

### 示例

#### 示例 1:

```
输入: "A man, a plan, a canal: Panama"
输出: true
解释："amanaplanacanalpanama" 是回文串
```

#### 示例 2:

```
输入: "race a car"
输出: false
解释："raceacar" 不是回文串
```

## 解题

```typescript
/**
 * 双指针
 * @desc 时间复杂度 O(N)  空间复杂度 O(1)
 * @param s
 */
export function isPalindrome(s: string): boolean {
  let left = 0;
  let right = s.length - 1;
  const isValid = (s: string): boolean =>
    (s >= 'a' && s <= 'z') || (s >= 'A' && s <= 'Z') || (s >= '0' && s <= '9');

  while (left < right) {
    while (!isValid(s[left]) && left < right) left++;
    while (!isValid(s[right]) && left < right) right--;

    if (s[left].toLowerCase() !== s[right].toLowerCase()) return false;

    left++;
    right--;
  }

  return true;
}
```
