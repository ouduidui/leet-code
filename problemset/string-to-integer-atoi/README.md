# 字符串转换整数(atoi)

> 难度：中等
>
> https://leetcode-cn.com/problems/string-to-integer-atoi/

## 题目

请你来实现一个`myAtoi(string s)`函数，使其能将字符串转换成一个 `32` 位有符号整数
（类似 `C/C++` 中的 `atoi` 函数）。

函数`myAtoi(string s) `的算法如下：

- 读入字符串并丢弃无用的前导空格
- 检查下一个字符（假设还未到字符末尾）为正还是负号，读取该字符（如果有）。 确定
  最终结果是负数还是正数。 如果两者都不存在，则假定结果为正。
- 读入下一个字符，直到到达下一个非数字字符或到达输入的结尾。字符串的其余部分将被
  忽略。
- 将前面步骤读入的这些数字转换为整数（即，"123" -> 123， "0032" -> 32）。如果没
  有读入数字，则整数为 `0` 。必要时更改符号（从步骤 2 开始）。
- 如果整数数超过 32 位有符号整数范围 `[−2^31, 2^31 − 1]` ，需要截断这个整数，使
  其保持在这个范围内。具体来说，小于 `−2^31` 的整数应该被固定为 `−2^31` ，大于
  `2^31 − 1` 的整数应该被固定为 `2^31 − 1` 。
- 返回整数作为最终结果。

注意：

- 本题中的空白字符只包括空格字符 ' ' 。
- 除前导空格或数字后的其余字符串外，请勿忽略 任何其他字符。

## 示例

### 示例 1：

```
输入：s = "42"
输出：42
解释：加粗的字符串为已经读入的字符，插入符号是当前读取的字符。
第 1 步："42"（当前没有读入字符，因为没有前导空格）
^
第 2 步："42"（当前没有读入字符，因为这里不存在 '-' 或者 '+'）
^
第 3 步："42"（读入 "42"）
^
解析得到整数 42 。
由于 "42" 在范围 [-2^31, 2^31 - 1] 内，最终结果为 42 。
```

### 示例 2：

```
输入：s = "   -42"
输出：-42
解释：
第 1 步："   -42"（读入前导空格，但忽视掉）
^
第 2 步："   -42"（读入 '-' 字符，所以结果应该是负数）
^
第 3 步："   -42"（读入 "42"）
^
解析得到整数 -42 。
由于 "-42" 在范围 [-2^31, 2^31 - 1] 内，最终结果为 -42 。
```

### 示例 3：

```
输入：s = "4193 with words"
输出：4193
解释：
第 1 步："4193 with words"（当前没有读入字符，因为没有前导空格）
^
第 2 步："4193 with words"（当前没有读入字符，因为这里不存在 '-' 或者 '+'）
^
第 3 步："4193 with words"（读入 "4193"；由于下一个字符不是一个数字，所以读入停止）
^
解析得到整数 4193 。
由于 "4193" 在范围 [-2^31, 2^31 - 1] 内，最终结果为 4193 。
```

### 示例 4：

```
输入：s = "words and 987"
输出：0
解释：
第 1 步："words and 987"（当前没有读入字符，因为没有前导空格）
^
第 2 步："words and 987"（当前没有读入字符，因为这里不存在 '-' 或者 '+'）
^
第 3 步："words and 987"（由于当前字符 'w' 不是一个数字，所以读入停止）
^
解析得到整数 0 ，因为没有读入任何数字。
由于 0 在范围 [-2^31, 2^31 - 1] 内，最终结果为 0 。
```

### 示例 5：

```
输入：s = "-91283472332"
输出：-2147483648
解释：
第 1 步："-91283472332"（当前没有读入字符，因为没有前导空格）
^
第 2 步："-91283472332"（读入 '-' 字符，所以结果应该是负数）
^
第 3 步："-91283472332"（读入 "91283472332"）
^
解析得到整数 -91283472332 。
由于 -91283472332 小于范围 [-2^31, 2^31 - 1] 的下界，最终结果被截断为 -2^31 = -2147483648 。

```

## 解法

### 暴力解法

```typescript
/**
 * 暴力解法
 * @desc 时间复杂度 -> O(n)  空间复杂度  -> O(1)
 * @param s {string}
 * @return {number}
 */
export function myAtoi(s: string): number {
  let isStart: boolean = false; // 判断是否已经开始
  let resStr: string = '';

  // 去除首位空格
  s = s.trim();

  for (let i: number = 0; i < s.length; i++) {
    const sym = ['+', '-'];

    if (!isStart) {
      if (!isNumber(s[i]) && !sym.includes(s[i])) {
        return 0;
      }

      if (sym.includes(s[i]) || isNumber(s[i])) {
        isStart = true;
        resStr = s[i];
      }
    } else {
      if (isNumber(s[i])) {
        resStr += s[i];
      } else {
        return handleRes(resStr);
      }
    }
  }

  return handleRes(resStr);

  /**
   * 判断是否为数值
   * @param str {string}
   * @return {boolean}
   */
  function isNumber(str: string): boolean {
    if (str === ' ') return false;
    return !isNaN(Number(str));
  }

  /**
   * 处理结果，判断边缘情况
   * @param resStr {string}
   * @return {number}
   */
  function handleRes(resStr: string) {
    let res: number = Number(resStr);
    res = isNaN(res) ? 0 : res;

    if (res < Math.pow(-2, 31)) {
      return Math.pow(-2, 31);
    } else if (res > Math.pow(2, 31) - 1) {
      return Math.pow(2, 31) - 1;
    } else {
      return res;
    }
  }
}
```

### 自动机

![string-to-integer-atoi](https://user-images.githubusercontent.com/88995580/159103279-9f4245c5-4bdd-48f1-9fc8-87d60e648c89.png)

```typescript
/**
 * 自动机
 * @desc 时间复杂度 -> O(n)  空间复杂度  -> O(1)
 * @param s {string}
 * @return {number}
 */
export function myAtoi2(s: string): number {
  class Automation {
    state: string = 'start'; // 执行阶段，默认处于开始执行阶段
    sign: number = 1; // 正负符号，默认是正数
    ans: number = 0; // 结果
    /**
     * 关键点：
     * 状态和执行阶段的对应表
     * 含义如下：
     * [执行阶段, [空格, 正负, 数值, 其他]]
     */
    map: Map<string, Array<string>> = new Map([
      ['start', ['start', 'signed', 'in_number', 'end']],
      ['signed', ['end', 'end', 'in_number', 'end']],
      ['in_number', ['end', 'end', 'in_number', 'end']],
      ['end', ['end', 'end', 'end', 'end']]
    ]);

    /**
     * 获取状态的索引
     * @param str {string}
     * @return {number}
     */
    getIndex(str: string): 0 | 1 | 2 | 3 {
      if (str === ' ') {
        // 空格
        return 0;
      } else if (str === '+' || str === '-') {
        // 符号
        return 1;
      } else if (!isNaN(Number(str))) {
        // 数值
        return 2;
      } else {
        // 其他
        return 3;
      }
    }

    /**
     * 字符转换执行函数
     * @param str {string}
     */
    get(str: string) {
      // 每次传入字符时，都要变更自动机的执行阶段
      const stateArr: Array<string> | undefined = this.map.get(this.state);
      if (stateArr) this.state = stateArr[this.getIndex(str)];

      if (this.state === 'in_number') {
        this.ans = this.ans * 10 + Number(str);
        this.ans =
          this.sign === 1
            ? Math.min(this.ans, Math.pow(2, 31) - 1)
            : Math.min(this.ans, -Math.pow(-2, 31));
      } else if (this.state === 'signed') {
        this.sign = str === '+' ? 1 : -1;
      }
    }
  }

  const automaton: Automation = new Automation();

  for (let str of s) {
    automaton.get(str);
  }

  return automaton.sign * automaton.ans;
}
```
