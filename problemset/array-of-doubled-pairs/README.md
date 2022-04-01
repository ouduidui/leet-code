# 二倍数对数组

> 难度：中等
>
> https://leetcode-cn.com/problems/array-of-doubled-pairs/

## 题目


给定一个长度为偶数的整数数组 `arr`，只有对 `arr` 进行重组后可以满足 “对于每个 `0 <= i < len(arr) / 2`，都有 `arr[2 * i + 1] = 2 * arr[2 * i]`” 时，返回 `true`；否则，返回 `false`。

 
### 示例

#### 示例 1：

```
输入：arr = [3,1,3,6]
输出：false
```

#### 示例 2：

```
输入：arr = [2,1,2,6]
输出：false
```

#### 示例 3：

```
输入：arr = [4,-2,2,-4]
输出：true
解释：可以用 [-2,-4] 和 [2,4] 这两组组成 [-2,-4,2,4] 或是 [2,4,-2,-4]
```

## 解题

```ts
/**
 * 排序 + 哈希表
 * @desc 时间复杂度 O(NlogN)  空间复杂度 O(N)
 * @param arr
 * @returns
 */
export function canReorderDoubled(arr: number[]): boolean {
  const count = new Map<number, number>()
  for (const x of arr)
    count.set(x, (count.get(x) || 0) + 1)

  // 因为 0 只能跟本身进行匹配，因此需要保证 0 的数量是偶数
  if ((count.get(0) || 0) % 2 !== 0) return false

  const vals = [...count.keys()].sort((a, b) => Math.abs(a) - Math.abs(b))

  for (const x of vals) {
    if ((count.get(2 * x) || 0) < count.get(x)!)
      return false
    count.set(2 * x, (count.get(2 * x) || 0) - count.get(x)!)
  }

  return true
}
```