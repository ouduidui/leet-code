# 最小绝对差

> 难度：简单
>
> https://leetcode.cn/problems/minimum-absolute-difference/

## 题目

给你个整数数组 `arr`，其中每个元素都 **不相同**。

请你找到所有具有最小绝对差的元素对，并且按升序的顺序返回。

### 示例

#### 示例 1：

```
输入：arr = [4,2,1,3]
输出：[[1,2],[2,3],[3,4]]
```

#### 示例 2：

```
输入：arr = [1,3,6,10,15]
输出：[[1,3]]
```

#### 示例 3：

```
输入：arr = [3,8,-10,23,19,-4,-14,27]
输出：[[-14,-10],[19,23],[23,27]]
```

## 解题

```ts
/**
 * 排序
 * @desc 时间复杂度 O(logN) 空间复杂度 O(logN)
 * @param arr
 * @returns
 */
export function minimumAbsDifference(arr: number[]): number[][] {
  arr.sort((a, b) => a - b)
  let minDiff = Number.MAX_VALUE
  const ans: number[][] = []

  const len = arr.length
  for (let i = 0; i < len - 1; i++) {
    const diff = arr[i + 1] - arr[i]
    if (diff > minDiff) continue

    if (diff < minDiff) {
      ans.length = 0
      minDiff = diff
    }
    ans.push([arr[i], arr[i + 1]])
  }

  return ans
}
```