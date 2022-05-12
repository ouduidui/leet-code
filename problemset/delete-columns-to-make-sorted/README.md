# 删列造序

> 难度：简单
>
> https://leetcode.cn/problems/delete-columns-to-make-sorted/

## 题目

给你由 `n` 个小写字母字符串组成的数组 `strs`，其中每个字符串长度相等。

这些字符串可以每个一行，排成一个网格。例如，`strs = ["abc", "bce", "cae"]` 可以排列为：

```
abc
bce
cae
```

你需要找出并删除 **不是按字典序升序排列的** 列。在上面的例子（下标从 0 开始）中，列 0`（'a', 'b', 'c'）`和列 2`（'c', 'e', 'e'）`都是按升序排列的，而列 1`（'b', 'c', 'a'）`不是，所以要删除列 1 。

返回你需要删除的列数。

### 示例

#### 示例 1：

```
输入：strs = ["cba","daf","ghi"]
输出：1
解释：网格示意如下：
  cba
  daf
  ghi
列 0 和列 2 按升序排列，但列 1 不是，所以只需要删除列 1 。
```

#### 示例 2：

```
输入：strs = ["a","b"]
输出：0
解释：网格示意如下：
  a
  b
只有列 0 这一列，且已经按升序排列，所以不用删除任何列。
```

#### 示例 3：

```
输入：strs = ["zyx","wvu","tsr"]
输出：3
解释：网格示意如下：
  zyx
  wvu
  tsr
所有 3 列都是非升序排列的，所以都要删除。
```

## 解题

```ts 
/**
 * 直接遍历
 * @desc 时间复杂度 O(MN)  空间复杂度 O(1)
 * @param strs
 * @returns
 */
export function minDeletionSize(strs: string[]): number {
  const m = strs.length
  const n = strs[0].length
  let ans = 0
  for (let i = 0; i < n; i++) {
    for (let j = 1; j < m; j++) {
      const prev = strs[j - 1][i]
      const curr = strs[j][i]
      if (prev.charCodeAt(0) > curr.charCodeAt(0)) {
        ans++
        break
      }
    }
  }

  return ans
}
```