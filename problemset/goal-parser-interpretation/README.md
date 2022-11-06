# 设计 Goal 解析器

> 难度：简单
>
> https://leetcode.cn/problems/goal-parser-interpretation/

## 题目

请你设计一个可以解释字符串 `command` 的 `Goal` 解析器 。· 由 `"G"`、`"()"` 和/或 "(al)" 按某种顺序组成。`Goal` 解析器会将 "G" 解释为字符串 "G"、"()" 解释为字符串 "o" ，"(al)" 解释为字符串 `"al"` 。然后，按原顺序将经解释得到的字符串连接成一个字符串。

给你字符串 `command` ，返回 `Goal` 解析器 对 `command` 的解释结果。

### 示例

#### 示例 1：

```
输入：command = "G()(al)"
输出："Goal"
解释：Goal 解析器解释命令的步骤如下所示：
G -> G
() -> o
(al) -> al
最后连接得到的结果是 "Goal"
```

#### 示例 2：

```
输入：command = "G()()()()(al)"
输出："Gooooal"
```

#### 示例 3：

```
输入：command = "(al)G(al)()()G"
输出："alGalooG"
```

## 解题

```ts 
/**
 * 直接遍历
 * @desc 时间复杂度 O(N) 空间复杂度 O(1)
 * @param command
 * @returns
 */
export function interpret(command: string): string {
  let res = ''
  for (let i = 0; i < command.length; i++) {
    if (command[i] === 'G') {
      res += 'G'
    }
    else if (command[i] === '(') {
      if (command[i + 1] === ')')
        res += 'o'

      else
        res += 'al'
    }
  }
  return res
}
```