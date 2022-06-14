# 对角线遍历

> 难度：中等
>
> https://leetcode.cn/problems/diagonal-traverse/

## 题目

给你一个大小为 `m x n` 的矩阵 `mat` ，请以对角线遍历的顺序，用一个数组返回这个矩阵中的所有元素。

### 示例

#### 示例 1：

![image](https://user-images.githubusercontent.com/54696834/173481348-bd73af3b-d855-4312-9b5b-aaacdd62eb6e.png)

```
输入：mat = [[1,2,3],[4,5,6],[7,8,9]]
输出：[1,2,4,7,5,3,6,8,9]
```

#### 示例 2：

```
输入：mat = [[1,2],[3,4]]
输出：[1,2,3,4]
```

## 解题

```ts 
/**
 * 直接模拟
 * @desc 时间复杂度  O(MN)  空间复杂度 O(1)
 * @param mat
 * @returns
 */
export function findDiagonalOrder(mat: number[][]): number[] {
  const ans: number[] = []
  const m = mat.length
  const n = mat[0].length
  let pos = 0

  for (let i = 0; i < m + n - 1; i++) {
    // 当 i 为奇数时，则第 i 条对角线的走向是从上往下遍历
    if (i % 2 === 1) {
      let x = i < n ? 0 : i - n + 1
      let y = i < n ? i : n - 1
      while (x < m && y >= 0) {
        ans[pos] = mat[x][y]
        pos++
        x++
        y--
      }
    }
    // 当 i 为偶数时，则第 i 条对角线的走向是从下往上遍历
    else {
      let x = i < m ? i : m - 1
      let y = i < m ? 0 : i - m + 1
      while (x >= 0 && y < n) {
        ans[pos] = mat[x][y]
        pos++
        x--
        y++
      }
    }
  }

  return ans
}
```