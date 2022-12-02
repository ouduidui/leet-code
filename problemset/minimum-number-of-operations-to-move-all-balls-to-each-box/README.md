# 移动所有球到每个盒子所需的最小操作数

> 难度：中等
>
> https://leetcode.cn/problems/minimum-number-of-operations-to-move-all-balls-to-each-box/

## 题目

有 `n` 个盒子。给你一个长度为 `n` 的二进制字符串 `boxes` ，其中 `boxes[i]` 的值为 `'0'` 表示第 `i` 个盒子是 **空** 的，而 `boxes[i]` 的值为 '1' 表示盒子里有 **一个** 小球。

在一步操作中，你可以将 **一个** 小球从某个盒子移动到一个与之相邻的盒子中。第 `i` 个盒子和第 `j` 个盒子相邻需满足 `abs(i - j) == 1` 。注意，操作执行后，某些盒子中可能会存在不止一个小球。

返回一个长度为 n 的数组 answer ，其中 answer[i] 是将所有小球移动到第 i 个盒子所需的 最小 操作数。

每个 answer[i] 都需要根据盒子的 初始状态 进行计算。

### 示例

#### 示例 1：

```
输入：boxes = "110"
输出：[1,1,3]
解释：每个盒子对应的最小操作数如下：
1) 第 1 个盒子：将一个小球从第 2 个盒子移动到第 1 个盒子，需要 1 步操作。
2) 第 2 个盒子：将一个小球从第 1 个盒子移动到第 2 个盒子，需要 1 步操作。
3) 第 3 个盒子：将一个小球从第 1 个盒子移动到第 3 个盒子，需要 2 步操作。将一个小球从第 2 个盒子移动到第 3 个盒子，需要 1 步操作。共计 3 步操作。
```

#### 示例 2：

```
输入：boxes = "001011"
输出：[11,8,5,4,3,4]
```

## 解题

```ts 
/**
 * 模拟
 * @desc 时间复杂度 O(N) 空间复杂度 O(1)
 * @param boxes
 * @returns
 */
export function minOperations(boxes: string): number[] {
  let left = boxes[0].charCodeAt(0) - '0'.charCodeAt(0)
  let right = 0
  let operations = 0
  const n = boxes.length
  for (let i = 1; i < n; i++) {
    if (boxes[i] === '1') {
      right++
      operations += i
    }
  }
  const res: number[] = new Array(n).fill(0)
  res[0] = operations
  for (let i = 1; i < n; i++) {
    operations += left - right
    if (boxes[i] === '1') {
      left++
      right--
    }
    res[i] = operations
  }
  return res
}
```