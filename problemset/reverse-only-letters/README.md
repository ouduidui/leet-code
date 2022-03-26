# 仅仅反转字母

> 难度：简单
>
> https://leetcode-cn.com/problems/reverse-only-letters/

## 题目

给你一个字符串 s ，根据下述规则反转字符串：

- 所有非英文字母保留在原有位置。
- 所有英文字母（小写或大写）位置反转。

返回反转后的 s 。

### 示例

#### 示例 1：

```
输入：s = "ab-cd"
输出："dc-ba"
```

#### 示例 2：

```
输入：s = "a-bC-dEf-ghIj"
输出："j-Ih-gfE-dCba"
```

#### 示例 3：

```
输入：s = "Test1ng-Leet=code-Q!"
输出："Qedo1ct-eeLg=ntse-T!"
```

## 解题

```typescript
/**
 * 双指针
 * @desc 时间复杂度 O(N)   空间复杂度 O(N)
 * @param s
 */
export function reverseOnlyLetters(s: string): string {
  const res = s.split('');

  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    while (left < right && !/^[a-zA-Z]+$/.test(res[left])) left++;
    while (left < right && !/^[a-zA-Z]+$/.test(res[right])) right--;
    if (left >= right) break;

    [res[left], res[right]] = [res[right], res[left]];
    left++;
    right--;
  }

  return res.join('');
}
```
