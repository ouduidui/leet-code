# 在LR字符串中交换相邻字符

> 难度：中等
>
> https://leetcode.cn/problems/swap-adjacent-in-lr-string/

## 题目

在一个由 'L' , 'R' 和 'X' 三个字符组成的字符串（例如"RXXLRXRXL"）中进行移动操作。一次移动操作指用一个"LX"替换一个"XL"，或者用一个"XR"替换一个"RX"。现给定起始字符串start和结束字符串end，请编写代码，当且仅当存在一系列移动操作使得start可以转换成end时， 返回`True`。

### 示例 :

```
输入: start = "RXXLRXRXL", end = "XRLXXRRLX"
输出: True
解释:
我们可以通过以下几步将start转换成end:
RXXLRXRXL ->
XRXLRXRXL ->
XRLXRXRXL ->
XRLXXRRXL ->
XRLXXRRLX
```

## 解题

```ts 
/**
 * 双指针
 * @desc 时间复杂度 O(N) 空间复杂度 O(1)
 * @param start
 * @param end
 * @returns
 */
export function canTransform(start: string, end: string): boolean {
  const n = start.length
  let i = 0; let j = 0
  while (i < n && j < n) {
    while (i < n && start[i] === 'X') i++

    while (j < n && end[j] === 'X') j++

    if (i < n && j < n) {
      if (start[i] !== end[j]) return false

      const c = start[i]
      if ((c === 'L' && i < j) || (c === 'R' && i > j)) return false

      i++
      j++
    }
  }
  while (i < n) {
    if (start[i] !== 'X') return false
    i++
  }
  while (j < n) {
    if (end[j] !== 'X') return false
    j++
  }
  return true
}
```