# 找到 K 个最接近的元素

> 难度：中等
>
> https://leetcode.cn/problems/find-k-closest-elements/

## 题目

给定一个 排序好 的数组 `arr` ，两个整数 `k` 和 `x` ，从数组中找到最靠近 `x`（两数之差最小）的 `k` 个数。返回的结果必须要是按升序排好的。

整数 a 比整数 b 更接近 x 需要满足：

- `|a - x| < |b - x|` 或者
- `|a - x| == |b - x|` 且 `a < b`
 
### 示例

#### 示例 1：

```
输入：arr = [1,2,3,4,5], k = 4, x = 3
输出：[1,2,3,4]
```

#### 示例 2：

```
输入：arr = [1,2,3,4,5], k = 4, x = -1
输出：[1,2,3,4]
```

## 解题

### 排序

```ts 
/**
 * 排序
 * @desc 时间复杂度 O(NlogN)  空间复杂度 O(logN)
 * @param arr
 * @param k
 * @param x
 * @returns
 */
export function findClosestElements(arr: number[], k: number, x: number): number[] {
  return [...arr]
    .sort((a, b) => Math.abs(a - x) !== Math.abs(b - x) ? Math.abs(a - x) - Math.abs(b - x) : a - b)
    .slice(0, k)
    .sort((a, b) => a - b)
}
```

### 二分查找 + 双指针

```ts 
/**
 * 二分查找 + 双指针
 * @desc 时间复杂度 O(logN+K)  空间复杂度 O(1)
 * @param arr
 * @param k
 * @param x
 * @returns
 */
export function findClosestElements2(arr: number[], k: number, x: number): number[] {
  let right = binarySearch(arr, x)
  let left = right - 1
  while (k-- > 0) {
    if (left < 0)
      right++
    else if (right >= arr.length)
      left--
    else if (x - arr[left] <= arr[right] - x)
      left--
    else
      right++
  }
  const ans = []
  for (let i = left + 1; i < right; i++)
    ans.push(arr[i])

  return ans

  function binarySearch(arr: number[], x: number) {
    let low = 0; let high = arr.length - 1
    while (low < high) {
      const mid = low + Math.floor((high - low) / 2)
      if (arr[mid] >= x)
        high = mid

      else
        low = mid + 1
    }
    return low
  }
}
```