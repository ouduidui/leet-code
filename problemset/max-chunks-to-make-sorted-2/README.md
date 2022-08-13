# 最多能完成排序的块 II

> 难度：困难
>
> https://leetcode.cn/problems/max-chunks-to-make-sorted-ii/

## 题目

这个问题和“最多能完成排序的块”相似，但给定数组中的元素可以重复，输入数组最大长度为`2000`，其中的元素最大为`10**8`。

`arr`是一个可能包含重复元素的整数数组，我们将这个数组分割成几个“块”，并将这些块分别进行排序。之后再连接起来，使得连接的结果和按升序排序后的原数组相同。

我们最多能将数组分成多少块？

#### 示例 1:

```
输入: arr = [5,4,3,2,1]
输出: 1
解释:
将数组分成2块或者更多块，都无法得到所需的结果。
例如，分成 [5, 4], [3, 2, 1] 的结果是 [4, 5, 1, 2, 3]，这不是有序的数组。 
```

#### 示例 2:

```
输入: arr = [2,1,3,4,4]
输出: 4
解释:
我们可以把它分成两块，例如 [2, 1], [3, 4, 4]。
然而，分成 [2, 1], [3], [4], [4] 可以得到最多的块数。 
```

## 解题

### 哈希表 + 排序

```ts 
/**
 * 哈希表+排序
 * @desc 时间复杂度 O(NlogN)  空间复杂度 O(N)
 * @param arr
 * @returns
 */
export function maxChunksToSorted(arr: number[]): number {
  const cnt = new Map<number, number>()
  let res = 0
  const sortedArr = new Array(arr.length).fill(0)
  sortedArr.splice(0, arr.length, ...arr)
  sortedArr.sort((a, b) => a - b)
  for (let i = 0; i < sortedArr.length; i++) {
    const x = arr[i]; const y = sortedArr[i]
    cnt.set(x, (cnt.get(x) || 0) + 1)
    if (cnt.get(x) === 0)
      cnt.delete(x)

    cnt.set(y, (cnt.get(y) || 0) - 1)
    if (cnt.get(y) === 0)
      cnt.delete(y)

    if (cnt.size === 0)
      res++
  }
  return res
}
```

### 单调栈

```ts 
/**
 * 单调栈
 * @desc 时间复杂度 O(N)  空间复杂度 O(N)
 * @param arr
 * @returns
 */
export function maxChunksToSorted2(arr: number[]): number {
  const stack: number[] = []
  for (const num of arr) {
    if (stack.length === 0 || num >= stack[stack.length - 1]) {
      stack.push(num)
    }
    else {
      const mx = stack.pop()!
      while (stack.length && stack[stack.length - 1] > num)
        stack.pop()

      stack.push(mx)
    }
  }
  return stack.length
}
```