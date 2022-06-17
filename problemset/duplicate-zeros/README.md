# 复写零

> 难度：简单
>
> https://leetcode.cn/problems/duplicate-zeros/

## 题目

给你一个长度固定的整数数组 `arr`，请你将该数组中出现的每个零都复写一遍，并将其余的元素向右平移。

注意：请不要在超过该数组长度的位置写入元素。

要求：请对输入的数组 **就地** 进行上述修改，不要从函数返回任何东西。

### 示例

#### 示例 1：

```
输入：[1,0,2,3,0,4,5,0]
输出：null
解释：调用函数后，输入的数组将被修改为：[1,0,0,2,3,0,0,4]
```

#### 示例 2：

```
输入：[1,2,3]
输出：null
解释：调用函数后，输入的数组将被修改为：[1,2,3]
```

## 解题

```ts 
/**
 * 遍历
 * @desc 时间复杂度 O(N)  空间复杂度 O(1)
 * @param arr
 */
export function duplicateZeros(arr: number[]): void {
  const len = arr.length
  let i = 0
  while (i < len) {
    if (arr[i] === 0) {
      arr.pop()
      arr.splice(i, 0, 0)
      i++
    }
    i++
  }
}
```