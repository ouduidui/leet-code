# 括号生成

> 难度：中等
>
> https://leetcode-cn.com/problems/generate-parentheses/

## 题目

数字 `n` 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 **有效
的** 括号组合。

有效括号组合需满足：左括号必须以正确的顺序闭合。

### 示例

#### 示例 1

```
输入：n = 3
输出：["((()))","(()())","(())()","()(())","()()()"]
```

#### 示例 2

```
输入：n = 1
输出：["()"]
```

## 解法

```typescript
/**
 * 回溯
 * @desc 时间复杂度 O(4^N/√N)   空间复杂度 O(N)
 * @param n
 */
export function generateParenthesis(n: number): string[] {
  const ans: string[] = [];
  backtrack([], 0, 0);
  return ans;

  function backtrack(brackets: string[], left: number, right: number) {
    if (brackets.length === 2 * n) {
      ans.push(brackets.join(''));
      return;
    }
    // 如果左括号数量不大于 n ，放一个左括号
    if (left < n) {
      brackets.push('(');
      backtrack(brackets, left + 1, right);
      brackets.pop();
    }
    // 如果右括号数量小于左括号的数量，放一个右括号
    if (right < left) {
      brackets.push(')');
      backtrack(brackets, left, right + 1);
      brackets.pop();
    }
  }
}
```
