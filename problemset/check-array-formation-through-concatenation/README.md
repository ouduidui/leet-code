# 能否连接形成数组

> 难度：简单
>
> https://leetcode.cn/problems/check-array-formation-through-concatenation/

## 题目

给你一个整数数组 `arr` ，数组中的每个整数 **互不相同** 。另有一个由整数数组构成的数组 `pieces`，其中的整数也 **互不相同** 。请你以 **任意顺序** 连接 `pieces` 中的数组以形成 `arr` 。但是，**不允许** 对每个数组 `pieces[i]` 中的整数重新排序。

如果可以连接 `pieces` 中的数组形成 `arr` ，返回 `true` ；否则，返回 `false` 。

### 示例

#### 示例 1：

```
输入：arr = [15,88], pieces = [[88],[15]]
输出：true
解释：依次连接 [15] 和 [88]
```

#### 示例 2：

```
输入：arr = [49,18,16], pieces = [[16,18,49]]
输出：false
解释：即便数字相符，也不能重新排列 pieces[0]
```

#### 示例 3：

```
输入：arr = [91,4,64,78], pieces = [[78],[4,64],[91]]
输出：true
解释：依次连接 [91]、[4,64] 和 [78]
```

## 解题

```ts 
/**
 * 哈希表
 * @desc 时间复杂度 O(N)  空间复杂度 O(N)
 * @param arr
 * @param pieces
 * @returns
 */
export function canFormArray(arr: number[], pieces: number[][]): boolean {
  const n = arr.length
  const m = pieces.length
  const index = new Map<number, number>()
  for (let i = 0; i < m; i++)
    index.set(pieces[i][0], i)

  for (let i = 0; i < n;) {
    if (!index.has(arr[i]))
      return false

    const j = index.get(arr[i])!
    const len = pieces[j].length

    for (let k = 0; k < len; k++) {
      if (arr[i + k] !== pieces[j][k])
        return false
    }
    i = i + len
  }
  return true
}
```