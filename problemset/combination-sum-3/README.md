# 组合总和 III

> 难度：中等
>
> https://leetcode-cn.com/problems/combination-sum-iii/

## 题目

找出所有相加之和为 `n` 的 `k` 个数的组合，且满足下列条件：

- 只使用数字1到9
- 每个数字 **最多使用一次**

返回 **所有可能的有效组合的列表** 。该列表不能包含相同的组合两次，组合可以以任何顺序返回。

### 示例

#### 示例 1:

```
输入: k = 3, n = 7
输出: [[1,2,4]]
解释:
1 + 2 + 4 = 7
没有其他符合的组合了。
```

#### 示例 2:

```
输入: k = 3, n = 9
输出: [[1,2,6], [1,3,5], [2,3,4]]
解释:
1 + 2 + 6 = 9
1 + 3 + 5 = 9
2 + 3 + 4 = 9
没有其他符合的组合了。
```

#### 示例 3:

```
输入: k = 4, n = 1
输出: []
解释: 不存在有效的组合。
在[1,9]范围内使用4个不同的数字，我们可以得到的最小和是1+2+3+4 = 10，因为10 > 1，没有有效的组合。
```

## 回溯

```ts
/**
 * 回溯
 * @desc 时间复杂度 O(NlogN)  空间复杂度 O(N)
 * @param k
 * @param n
 * @returns
 */
export function combinationSum3(k: number, n: number): number[][] {
  const result: number[][] = []
  backtrack(1, k, n, [], 0)
  return result

  function backtrack(startNums: number, k: number, n: number, temp: number[], sum: number) {
    if (temp.length === k) {
      if (sum === n)
        result.push(temp)
      return
    }

    for (let i = startNums; i < 10; i++)
      backtrack(i + 1, k, n, [...temp, i], sum + i)
  }
}
```