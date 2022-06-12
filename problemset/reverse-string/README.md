# 反转字符串

> 难度：简单
>
> https://leetcode.cn/problems/reverse-string/

## 题目

编写一个函数，其作用是将输入的字符串反转过来。输入字符串以字符数组 `s` 的形式给出。

不要给另外的数组分配额外的空间，你必须**原地修改输入数组**、使用 `O(1)` 的额外空间解决这一问题。

### 示例

#### 示例 1：

```
输入：s = ["h","e","l","l","o"]
输出：["o","l","l","e","h"]
```

#### 示例 2：

```
输入：s = ["H","a","n","n","a","h"]
输出：["h","a","n","n","a","H"]
```

## 解法

```ts 
/**
 * 双指针
 * @desc 时间复杂度 O(N) 空间复杂度 O(1)
 * @param s
 */
export function reverseString(s: string[]): void {
  let left = 0
  let right = s.length - 1

  while (left < right) {
    [s[left], s[right]] = [s[right], s[left]]
    left++
    right--
  }
}
```