# 有效数字

> 难度：困难
>
> https://leetcode-cn.com/problems/valid-number/

## 题目

**有效数字**（按顺序）可以分成以下几个部分：

1. 一个 **小数** 或者 **整数**
2. （可选）一个 'e' 或 'E' ，后面跟着一个 **整数**

**小数**（按顺序）可以分成以下几个部分：

1. （可选）一个符号字符（'+' 或 '-'）
2. 下述格式之一：
   1. 至少一位数字，后面跟着一个点 '.'
   2. 至少一位数字，后面跟着一个点 '.' ，后面再跟着至少一位数字
   3. 一个点 '.' ，后面跟着至少一位数字

**整数**（按顺序）可以分成以下几个部分：

1. （可选）一个符号字符（'+' 或 '-'）
2. 至少一位数字

部分有效数字列举如下：

- `["2", "0089", "-0.1", "+3.14", "4.", "-.9", "2e10", "-90E3", "3e+7", "+6e-1", "53.5e93", "-123.456e789"]`

部分无效数字列举如下：

- `["abc", "1a", "1e", "e3", "99e2.5", "--6", "-+3", "95a54e53"]`

给你一个字符串 s ，如果 s 是一个 有效数字 ，请返回 true 。

### 示例

#### 示例 1

```
输入：s = "0"
输出：true
```

#### 示例 2

```
输入：s = "e"
输出：false
```

#### 示例 3

```
输入：s = "."
输出：false
```

#### 示例 4

```
输入：s = ".1"
输出：true
```

## 解法

### 正则表达式

> https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Regular_Expressions

- 首先先判断符号：`/^[\+\-]?/`
  - `^` 代表匹配输入的开始
  - `[xyz]` 代表匹配方括号中的任意字符
  - `?` 代表前面一个表达式出现 0 次或 1 次
- 然后判断整数和小数： `/((\d+(\.\d*)?)|\.\d+)/`
  - `\d` 匹配一个数字，等价于`[0-9]`
  - `+` 匹配前面一个表达式 1 次或者多次
  - `*` 匹配前一个表达式 0 次或多次
- 最后匹配`e`： `/([eE][-+]?\d+)?$/`
  - `$` 匹配输入的结束
- 综上合并：`/^[\+\-]?((\d+(\.\d*)?)|\.\d+)([eE][-+]?\d+)?$/`

```typescript
/**
 * 正则
 * @desc 时间复杂度 O(N)   空间复杂度 O(1)
 * @param s {string}
 * @return {boolean}
 */
export function isNumber(s: string): boolean {
  const regExp = /^[\+\-]?((\d+(\.\d*)?)|\.\d+)([eE][-+]?\d+)?$/;
  return regExp.test(s);
}
```

### 确定有限状态自动机

#### 预备知识

确定有限状态自动机（以下简称「自动机」）是一类计算模型。它包含一系列状态，这些状
态中：

- 有一个特殊的状态，被称作「初始状态」。
- 还有一系列状态被称为「接受状态」，它们组成了一个特殊的集合。其中，一个状态可能
  既是「初始状态」，也是「接受状态」。

起初，这个自动机处于「初始状态」。随后，它顺序地读取字符串中的每一个字符，并根据
当前状态和读入的字符，按照某个事先约定好的「转移规则」，从当前状态转移到下一个状
态；当状态转移完成后，它就读取下一个字符。当字符串全部读取完毕后，如果自动机处于
某个「接受状态」，则判定该字符串「被接受」；否则，判定该字符串「被拒绝」。

> 注意：如果输入的过程中某一步转移失败了，即不存在对应的「转移规则」，此时计算将
> 提前中止。在这种情况下我们也判定该字符串「被拒绝」。

一个自动机，总能够回答某种形式的「对于给定的输入字符串 S，判断其是否满足条件 P」
的问题。在本题中，条件 P 即为「构成合法的表示数值的字符串」。

自动机驱动的编程，可以被看做一种暴力枚举方法的延伸：它穷尽了在任何一种情况下，对
应任何的输入，需要做的事情。

#### 思路与算法

定义自动机的「状态集合」:

0. 初始状态
1. 符号位
2. 整数部分
3. 左侧有整数的小数点
4. 左侧无整数的小数点
5. 小数部分
6. 字符 `e`
7. 指数部分的符号位
8. 指数部分的整数部分

下一步是找出「初始状态」和「接受状态」的集合。根据题意，「初始状态」应当为状态
0，而「接受状态」的集合则为状态 2、状态 3、状态 5 以及状态 8。换言之，字符串的末
尾要么是空格，要么是数字，要么是小数点，但前提是小数点的前面有数字。

最后，需要定义「转移规则」。结合数值字符串应当具备的格式，将自动机转移的过程以图
解的方式表示出来：

![valid-number](https://user-images.githubusercontent.com/54696834/159102051-f144a84f-2805-4833-849b-b4a68fa07db0.png)

比较上图与「预备知识」一节中对自动机的描述，可以看出有一点不同：

我们没有单独地考虑每种字符，而是划分为若干类。由于全部 1010 个数字字符彼此之间都
等价，因此只需定义一种统一的「数字」类型即可。对于正负号也是同理。

在实际代码中，我们需要处理转移失败的情况。为了处理这种情况，我们可以创建一个特殊
的拒绝状态。如果当前状态下没有对应读入字符的「转移规则」，我们就转移到这个特殊的
拒绝状态。一旦自动机转移到这个特殊状态，我们就可以立即判定该字符串不「被接受」。

```typescript
/**
 * 确定有限状态自动机
 * @desc 时间复杂度 O(N)   空间复杂度 O(1)
 * @param s {string}
 * @return {boolean}
 */
export function isNumber2(s: string): boolean {
  enum State {
    STATE_INITIAL = 'STATE_INITIAL', // 初始状态
    STATE_INT_SIGN = 'STATE_INT_SIGN', // 符号位
    STATE_INTEGER = 'STATE_INTEGER', // 整数部分
    STATE_POINT = 'STATE_POINT', // 左侧有整数的小数点
    STATE_POINT_WITHOUT_INT = 'STATE_POINT_WITHOUT_INT', // 左侧无整数的小数点
    STATE_FRACTION = 'STATE_FRACTION', // 小数部分
    STATE_EXP = 'STATE_EXP', // 字符 e
    STATE_EXP_SIGN = 'STATE_EXP_SIGN', // 指数部分的符号位
    STATE_EXP_NUMBER = 'STATE_EXP_NUMBER' // 指数部分的整数部分
  }

  enum CharType {
    CHAR_NUMBER = 'CHAR_NUMBER', // 数值
    CHAR_EXP = 'CHAR_EXP', // e 指数
    CHAR_POINT = 'CHAR_POINT', // 小数点
    CHAR_SIGN = 'CHAR_SIGN', // 正负符号
    CHAR_ILLEGAL = 'CHAR_ILLEGAL' // 特殊状态
  }

  // 判断单个字符串类型
  const toCharType = (ch: string) => {
    if (!isNaN(Number(ch))) {
      return CharType.CHAR_NUMBER;
    } else if (ch.toLowerCase() === 'e') {
      return CharType.CHAR_EXP;
    } else if (ch === '.') {
      return CharType.CHAR_POINT;
    } else if (ch === '+' || ch === '-') {
      return CharType.CHAR_SIGN;
    } else {
      return CharType.CHAR_ILLEGAL;
    }
  };

  const initialMap = new Map<CharType, State>([
    [CharType.CHAR_NUMBER, State.STATE_INTEGER],
    [CharType.CHAR_POINT, State.STATE_POINT_WITHOUT_INT],
    [CharType.CHAR_SIGN, State.STATE_INT_SIGN]
  ]);
  const intSignMap = new Map<CharType, State>([
    [CharType.CHAR_NUMBER, State.STATE_INTEGER],
    [CharType.CHAR_POINT, State.STATE_POINT_WITHOUT_INT]
  ]);
  const integerMap = new Map<CharType, State>([
    [CharType.CHAR_NUMBER, State.STATE_INTEGER],
    [CharType.CHAR_EXP, State.STATE_EXP],
    [CharType.CHAR_POINT, State.STATE_POINT]
  ]);
  const pointMap = new Map<CharType, State>([
    [CharType.CHAR_NUMBER, State.STATE_FRACTION],
    [CharType.CHAR_EXP, State.STATE_EXP]
  ]);
  const pointWithoutIntMap = new Map<CharType, State>([
    [CharType.CHAR_NUMBER, State.STATE_FRACTION]
  ]);
  const fractionMap = new Map<CharType, State>([
    [CharType.CHAR_NUMBER, State.STATE_FRACTION],
    [CharType.CHAR_EXP, State.STATE_EXP]
  ]);
  const expMap = new Map<CharType, State>([
    [CharType.CHAR_NUMBER, State.STATE_EXP_NUMBER],
    [CharType.CHAR_SIGN, State.STATE_EXP_SIGN]
  ]);
  const expSignMap = new Map<CharType, State>([
    [CharType.CHAR_NUMBER, State.STATE_EXP_NUMBER]
  ]);
  const expNumberMap = new Map<CharType, State>([
    [CharType.CHAR_NUMBER, State.STATE_EXP_NUMBER]
  ]);
  const transfer = new Map<State, Map<CharType, State>>([
    [State.STATE_INITIAL, initialMap],
    [State.STATE_INT_SIGN, intSignMap],
    [State.STATE_INTEGER, integerMap],
    [State.STATE_POINT, pointMap],
    [State.STATE_POINT_WITHOUT_INT, pointWithoutIntMap],
    [State.STATE_FRACTION, fractionMap],
    [State.STATE_EXP, expMap],
    [State.STATE_EXP_SIGN, expSignMap],
    [State.STATE_EXP_NUMBER, expNumberMap]
  ]);

  const length = s.length;
  let state: State = State.STATE_INITIAL;

  for (let i = 0; i < length; i++) {
    const type = toCharType(s[i]);
    const map: Map<CharType, State> = transfer.get(state)!;
    if (map.has(type)) {
      state = map.get(type)!;
    } else {
      return false;
    }
  }

  return [
    State.STATE_INTEGER,
    State.STATE_POINT,
    State.STATE_FRACTION,
    State.STATE_EXP_NUMBER
  ].includes(state);
}
```
