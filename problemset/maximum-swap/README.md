# 最大交换

> 难度：中等
>
> https://leetcode.cn/problems/maximum-swap/

## 题目

给定一个非负整数，你至多可以交换一次数字中的任意两位。返回你能得到的最大值。

#### 示例 1 :

```
输入: 2736
输出: 7236
解释: 交换数字2和数字7。
```

#### 示例 2 :

```
输入: 9973
输出: 9973
解释: 不需要交换。
```

## 解题

### 直接遍历

```ts 
/**
 * 直接遍历
 * @desc 时间复杂度 O(log²N)  空间复杂度 O(logN)
 * @param num
 * @returns
 */
export function maximumSwap(num: number): number {
  const charArray = [...`${num}`]
  const len = charArray.length
  let maxNum = num

  const swap = (i: number, j: number) => ([charArray[i], charArray[j]] = [charArray[j], charArray[i]])

  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      swap(i, j)
      maxNum = Math.max(maxNum, parseInt(charArray.join('')))
      swap(i, j)
    }
  }

  return maxNum
}
```

### 贪心

```ts 
/**
 * 贪心
 * @desc 时间复杂度 O(log²N)  空间复杂度 O(logN)
 * @param num
 * @returns
 */
export function maximumSwap2(num: number): number {
  const charArray = [...`${num}`]
  const n = charArray.length
  let maxIdx = n - 1
  let idx1 = -1
  let idx2 = -1

  const swap = (i: number, j: number) => ([charArray[i], charArray[j]] = [charArray[j], charArray[i]])

  for (let i = n - 1; i >= 0; i--) {
    if (charArray[i] > charArray[maxIdx]) {
      maxIdx = i
    }
    else if (charArray[i] < charArray[maxIdx]) {
      idx1 = i
      idx2 = maxIdx
    }
  }
  if (idx1 >= 0) {
    swap(idx1, idx2)
    return parseInt(charArray.join(''))
  }
  else {
    return num
  }
}
```