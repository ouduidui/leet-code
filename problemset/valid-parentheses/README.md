# 有效的括号

> 难度：简单
>
> https://leetcode-cn.com/problems/valid-parentheses/

## 题目

给定一个只包括 '`(`'，'`)`'，'`{`'，'`}`'，'`[`'，'`]`'的字符串 `s` ，判断字符串
是否有效。

有效字符串需满足：

- 左括号必须用相同类型的右括号闭合。
- 左括号必须以正确的顺序闭合。

### 示例

#### 示例 1：

```
输入：s = "()"
输出：true
```

#### 示例 2：

```
输入：s = "()[]{}"
输出：true
```

#### 示例 3：

```
输入：s = "(]"
输出：false
```

#### 示例 4：

```
输入：s = "([)]"
输出：false
```

#### 示例 5：

```
输入：s = "{[]}"
输出：true
```

## 解法

```typescript
/**
 * 栈
 * @desc 时间复杂度 O(N) 空间复杂度 O(N)
 * @param s
 */
export function isValid(s: string): boolean {
  if (s.length % 2 === 1) return false;

  const stack: string[] = [];
  const pairs: Map<string, string> = new Map([
    ['(', ')'],
    ['[', ']'],
    ['{', '}']
  ]);

  for (let i: number = 0; i < s.length; i++) {
    if (pairs.get(stack[stack.length - 1]) === s[i]) {
      stack.pop();
    } else {
      stack.push(s[i]);
    }
  }

  return !stack.length;
}
```
