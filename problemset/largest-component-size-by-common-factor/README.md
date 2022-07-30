# 按公因数计算最大组件大小

> 难度：困难
>
> https://leetcode.cn/problems/largest-component-size-by-common-factor/

## 题目

给定一个由不同正整数的组成的非空数组 `nums` ，考虑下面的图：

- 有 `nums.length` 个节点，按从 `nums[0]` 到 `nums[nums.length - 1]` 标记；
- 只有当 `nums[i]` 和 `nums[j]` 共用一个大于 `1` 的公因数时，`nums[i]` 和 `nums[j]`之间才有一条边。

返回 **图中最大连通组件的大小** 。

### 示例

#### 示例 1：

![image](https://user-images.githubusercontent.com/54696834/181879754-0c7df86b-7acd-49a6-a156-a08b491b22e0.png)

```
输入：nums = [4,6,15,35]
输出：4
```

#### 示例 2：

![image](https://user-images.githubusercontent.com/54696834/181879756-3003dd28-8873-4142-924b-e1ae4076821e.png)

```
输入：nums = [20,50,9,63]
输出：2
```

#### 示例 3：

![image](https://user-images.githubusercontent.com/54696834/181879759-ddeaebc2-d5c1-4691-bc10-a62b0f8bd0c0.png)

```
输入：nums = [2,3,6,7,4,12,21,39]
输出：8
```

## 集合

```ts 
/**
 * 并查集
 * @param nums
 * @returns
 */
export function largestComponentSize(nums: number[]): number {
  const max = Math.max(...nums)
  const uf = new UnionFind(max + 1)
  for (const num of nums) {
    for (let i = 2; i ** 2 <= num; i++) {
      if (num % i === 0) {
        uf.union(num, i)
        uf.union(num, (num / i) >> 0)
      }
    }
  }

  const counts = new Array(max + 1).fill(0)
  let ans = 0
  for (const num of nums) {
    const root = uf.find(num)
    counts[root]++
    ans = Math.max(ans, counts[root])
  }

  return ans
}

class UnionFind {
  parent: number[]
  rank: number[]

  constructor(len: number) {
    this.parent = new Array(len).fill(0).map((_, i) => i)
    this.rank = new Array(len).fill(0)
  }

  union(x: number, y: number) {
    const xRoot = this.find(x)
    const yRoot = this.find(y)
    if (xRoot !== yRoot) {
      if (this.rank[xRoot] > this.rank[yRoot]) {
        this.parent[yRoot] = xRoot
      }
      else if (this.rank[xRoot] < this.rank[yRoot]) {
        this.parent[xRoot] = yRoot
      }
      else {
        this.parent[yRoot] = xRoot
        this.rank[xRoot]++
      }
    }
  }

  find(x: number) {
    if (this.parent[x] !== x)
      this.parent[x] = this.find(this.parent[x])

    return this.parent[x]
  }
}
```