# 电话号码的字母组合

> 难度：中等
>
> https://leetcode-cn.com/problems/letter-combinations-of-a-phone-number/

## 题目

给定一个仅包含数字`2-9`的字符串，返回所有它能表示的字母组合。答案可以按 **任意顺
序** 返回。

给出数字到字母的映射如下（与电话按键相同）。注意 `1` 不对应任何字母。

![telephone-keypad](https://user-images.githubusercontent.com/88995580/159103307-fb639c62-4a3c-4ed0-bc59-c1d3ddc75620.png)

### 示例

#### 示例 1

```
输入：digits = "23"
输出：["ad","ae","af","bd","be","bf","cd","ce","cf"]
```

#### 示例 2

```
输入：digits = ""
输出：[]
```

#### 示例 3

```
输入：digits = "2"
输出：["a","b","c"]
```

## 解法

### 暴力解法

```typescript
/**
 * 暴力解法
 * @desc 时间复杂度 O(3^m*4^n)   空间复杂度 O(m+n)
 * @param digits
 * @return {string[]}
 */
export function letterCombinations(digits: string): string[] {
  if (digits === '') return [];

  const keyMap: Map<string, string[]> = new Map([
    ['2', ['a', 'b', 'c']],
    ['3', ['d', 'e', 'f']],
    ['4', ['g', 'h', 'i']],
    ['5', ['j', 'k', 'l']],
    ['6', ['m', 'n', 'o']],
    ['7', ['p', 'q', 'r', 's']],
    ['8', ['t', 'u', 'v']],
    ['9', ['w', 'x', 'y', 'z']]
  ]);

  let ans: string[] = [];

  for (let i: number = 0; i < digits.length; i++) {
    const map: string[] = keyMap.get(digits[i]) || [];
    if (!ans.length) {
      ans.push(...map);
    } else {
      const newAns: string[] = [];
      ans.forEach((str) => {
        map.forEach((letter) => {
          newAns.push(str + letter);
        });
      });
      ans = newAns;
    }
  }

  return ans;
}
```

### 回溯

```typescript
/**
 * 回溯
 * @desc 时间复杂度 O(3^m*4^n)   空间复杂度 O(m+n)
 * @param digits
 * @return {string[]}
 */
export function letterCombinations2(digits: string): string[] {
  if (!digits) return [];

  const keyMap: Map<string, string> = new Map([
    ['2', 'abc'],
    ['3', 'def'],
    ['4', 'ghi'],
    ['5', 'jkl'],
    ['6', 'mno'],
    ['7', 'pqrs'],
    ['8', 'tuv'],
    ['9', 'wxyz']
  ]);

  let ans: string[] = [];
  backtrack('', digits);

  return ans;

  function backtrack(str: string, digits: string) {
    if (!digits.length) {
      ans.push(str); // 如果字符串为空了，将拼接好的字符加入数组
    } else {
      // 拿到字符串第一个字符其对应的数字
      let letters: string = keyMap.get(digits[0]) || '';
      // 对可能性进行组合
      for (let i: number = 0; i < letters.length; i++) {
        str += letters[i];
        // 递归组好的 str和下一段字符串
        backtrack(str, digits.slice(1));
        // 回溯
        str = str.slice(0, -1);
      }
    }
  }
}
```
