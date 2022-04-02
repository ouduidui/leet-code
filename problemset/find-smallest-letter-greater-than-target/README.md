# 寻找比目标字母大的最小字母

> 难度：简单
>
> https://leetcode-cn.com/problems/find-smallest-letter-greater-than-target/

## 题目

给你一个排序后的字符列表 `letters` ，列表中只包含小写英文字母。另给出一个目标字母 `target`，请你寻找在这一有序列表里比目标字母大的最小字母。

在比较时，字母是依序循环出现的。举个例子：

如果目标字母 `target = 'z'` 并且字符列表为 `letters = ['a', 'b']`，则答案返回 `'a'`
 
### 示例

#### 示例 1：

```
输入: letters = ["c", "f", "j"]，target = "a"
输出: "c"
```

#### 示例 2:

```
输入: letters = ["c","f","j"], target = "c"
输出: "f"
```

#### 示例 3:

```
输入: letters = ["c","f","j"], target = "d"
输出: "f"
```

## 解题

### 线性查找

```ts
/**
 * 线性查找
 * @desc 时间复杂度 O(N)  空间复杂度 O(1)
 * @param letters
 * @param target
 * @returns
 */
export function nextGreatestLetter(letters: string[], target: string): string {
  const len = letters.length
  let next = letters[0]

  for (let i = 0; i < len; i++) {
    if (letters[i] > target) {
      next = letters[i]
      break
    }
  }

  return next
}
```

### 二分法

```ts
/**
 * 二分法
 * @desc 时间复杂度 O(logN)  空间复杂度 O(1)
 * @param letters
 * @param target
 * @returns
 */
export function nextGreatestLetter2(letters: string[], target: string): string {
  if (target >= letters[letters.length - 1]) return letters[0]

  let left = 0
  let right = letters.length - 1
  while (left < right) {
    const mid = (left + right) >> 1
    if (letters[mid] <= target)
      left = mid + 1
    else
      right = mid
  }

  return letters[left]
}
```