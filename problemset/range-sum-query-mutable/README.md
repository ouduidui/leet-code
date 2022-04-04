#  区域和检索 - 数组可修改

> 难度：中等
>
> https://leetcode-cn.com/problems/range-sum-query-mutable/

## 题目

给你一个数组 `nums` ，请你完成两类查询 。

1. 其中一类查询要求 **更新** 数组 `nums` 下标对应的值
2. 另一类查询要求返回数组 `nums` 中索引 `left` 和索引 `right` 之间（ 包含 ）的nums元素的 **和** ，其中 `left <= right`

实现 `NumArray` 类：

- `NumArray(int[] nums)` 用整数数组 `nums` 初始化对象
- `void update(int index, int val)` 将 `nums[index]` 的值 **更新** 为 `val`
- `int sumRange(int left, int right)` 返回数组 `nums` 中索引 `left` 和索引 `right` 之间（ **包含** ）的`nums`元素的 **和 **（即，`nums[left] + nums[left + 1]`, ..., `nums[right]`）
 

### 示例：

```
输入：
["NumArray", "sumRange", "update", "sumRange"]
[[[1, 3, 5]], [0, 2], [1, 2], [0, 2]]
输出：
[null, 9, null, 8]

解释：
NumArray numArray = new NumArray([1, 3, 5]);
numArray.sumRange(0, 2); // 返回 1 + 3 + 5 = 9
numArray.update(1, 2);   // nums = [1,2,5]
numArray.sumRange(0, 2); // 返回 1 + 2 + 5 = 8
```

## 解题

### 暴力解法

```ts
/**
 * 暴力解法
 */
export class NumArray {
  /**
   * @desc 时间复杂度 O(1)  空间复杂度 O(1)
   * @param nums
   */
  constructor(public nums: number[]) {}

  /**
   * @desc 时间复杂度 O(1)  空间复杂度 O(1)
   * @param index
   * @param val
   */
  update(index: number, val: number): void {
    this.nums[index] = val
  }

  /**
   * @desc 时间复杂度 O(N) 空间复杂度 O(1)
   * @param left
   * @param right
   * @returns
   */
  sumRange(left: number, right: number): number {
    const len = this.nums.length
    if (left >= len) return 0

    right = Math.min(len - 1, right)

    let res = 0
    for (let i = left; i <= right; i++) res += this.nums[i]

    return res
  }
}
```

### 分块处理

```ts
/**
 * 分块处理
 */
export class NumArray2 {
  size: number // 块的大小
  sums: number[] // 每个块的和

  /**
   * @desc 时间复杂度 O(N)  空间复杂度 O(√N)
   * @param nums
   */
  constructor(public nums: number[]) {
    const len = nums.length
    this.size = Math.sqrt(len) >> 0
    this.sums = new Array<number>(
      ((len + this.size - 1) / this.size) >> 0,
    ).fill(0)
    for (let i = 0; i < len; i++)
      this.sums[this._getIndex(i)] += nums[i]
  }

  /**
   * @desc 时间复杂度 O(1)  空间复杂度 O(1)
   * @param index
   * @param val
   */
  update(index: number, val: number): void {
    // 更新该块的累计
    this.sums[this._getIndex(index)] += val - this.nums[index]
    this.nums[index] = val
  }

  /**
   * @desc 时间复杂度 O(√N) 空间复杂度 O(1)
   * @param left
   * @param right
   * @returns
   */
  sumRange(left: number, right: number): number {
    const b1 = this._getIndex(left)
    const i1 = left % this.size
    const b2 = this._getIndex(right)
    const i2 = right % this.size

    // 如果区间 [left, right] 在同一块中
    if (b1 === b2) {
      let sum = 0
      for (let j = i1; j < i2; j++) sum += this.nums[b1 * this.size + j]
      return sum
    }

    let sum1 = 0
    for (let j = i1; j < this.size; j++)
      sum1 += this.nums[b1 * this.size + j]

    let sum2 = 0
    for (let j = 0; j <= i2; j++)
      sum2 += this.nums[b2 * this.size + j]

    let sum3 = 0
    for (let j = b1 + 1; j < b2; j++)
      sum3 += this.sums[j]

    return sum1 + sum2 + sum3
  }

  private _getIndex(i: number) {
    return (i / this.size) >> 0
  }
}
```

### 线段树

```ts
/**
 * 线段树
 */
export class NumArray3 {
  len: number
  // 线段树
  private _segmentTree: number[]

  /**
   * @desc 时间复杂度 O(N)  空间复杂度 O(N)
   * @param nums
   */
  constructor(nums: number[]) {
    this.len = nums.length
    // 初始化线段树
    // segmentTree 的大小不超过 2 ^ (logN + 1) - 1 < 4N
    this._segmentTree = new Array(this.len * 4).fill(0)
    // 构建线段树
    this._build(0, 0, this.len - 1, nums)
  }

  /**
   * @desc 时间复杂度 O(logN)  空间复杂度 O(1)
   * @param index
   * @param val
   */
  update(index: number, val: number): void {
    this._change(index, val, 0, 0, this.len)
  }

  /**
   * @desc 时间复杂度 O(logN) 空间复杂度 O(1)
   * @param left
   * @param right
   * @returns
   */
  sumRange(left: number, right: number): number {
    return this._range(left, right, 0, 0, this.len - 1)
  }

  /**
   * 构建线段树
   * @param node 当前节点
   * @param start 开始下标
   * @param end 结束下标
   * @param nums 数值数值
   * @returns
   */
  private _build(
    node: number,
    start: number,
    end: number,
    nums: number[],
  ) {
    if (start === end) {
      this._segmentTree[node] = nums[start]
      return
    }

    const mid = (start + end) >> 1
    // 左子节点
    const leftnode = node * 2 + 1
    // 右子节点
    const rightnode = node * 2 + 2
    // 递归构建
    this._build(leftnode, start, mid, nums)
    this._build(rightnode, mid + 1, end, nums)
    // 节点值为左右子节点的和
    this._segmentTree[node] = this._segmentTree[leftnode] + this._segmentTree[rightnode]
  }

  /**
   * 更新线段树
   * @param index
   * @param val
   * @param node
   * @param start
   * @param end
   * @returns
   */
  private _change(
    index: number,
    val: number,
    node: number,
    start: number,
    end: number,
  ) {
    if (start === end) {
      this._segmentTree[node] = val
      return
    }

    const mid = (start + end) >> 1
    const leftnode = node * 2 + 1
    const rightnode = node * 2 + 2
    if (index <= mid)
      this._change(index, val, leftnode, start, mid)
    else
      this._change(index, val, rightnode, mid + 1, end)

    this._segmentTree[node] = this._segmentTree[leftnode] + this._segmentTree[rightnode]
  }

  /**
   * 遍历找到对应区间的总和
   * @param left
   * @param right
   * @param node
   * @param start
   * @param end
   * @returns
   */
  private _range(
    left: number,
    right: number,
    node: number,
    start: number,
    end: number,
  ): number {
    if (left === start && right === end)
      return this._segmentTree[node]

    const mid = (start + end) >> 1
    const leftnode = node * 2 + 1
    const rightnode = node * 2 + 2
    if (right <= mid)
      return this._range(left, right, leftnode, start, mid)

    if (left > mid)
      return this._range(left, right, rightnode, mid + 1, end)

    return this._range(left, mid, leftnode, start, mid) + this._range(mid + 1, right, rightnode, mid + 1, end)
  }
}
```

### 树状数组

```ts
/**
 * 树状数组
 */
export class NumArray4 {
  tree: number[]

  /**
   * @desc 时间复杂度 O(NlogN)  空间复杂度 O(N)
   * @param nums
   */
  constructor(public nums: number[]) {
    this.tree = new Array(nums.length + 1).fill(0)

    for (let i = 0; i < nums.length; i++)
      this._add(i + 1, nums[i])
  }

  /**
   * @desc 时间复杂度 O(logN)  空间复杂度 O(1)
   * @param index
   * @param val
   */
  update(index: number, val: number): void {
    this._add(index + 1, val - this.nums[index])
    this.nums[index] = val
  }

  /**
   * @desc 时间复杂度 O(logN) 空间复杂度 O(1)
   * @param left
   * @param right
   * @returns
   */
  sumRange(left: number, right: number): number {
    return this._prefixSum(right + 1) - this._prefixSum(left)
  }

  /**
   * 找到x的二进制数的最后一个1所表示的二进制
   * @param x
   * @returns
   */
  private _lowBit(x: number) {
    /**
     * x = 6 = 0000 0110
     * -x = 1111 1010 (补码)
     * x & -x = 0000 0010
     */
    return x & -x
  }

  /**
   * 更新树状数组
   * @param index
   * @param val
   */
  private _add(index: number, val: number) {
    while (index < this.tree.length) {
      this.tree[index] += val
      index += this._lowBit(index)
    }
  }

  /**
   * 获取前缀和
   * @param index
   * @returns
   */
  private _prefixSum(index: number) {
    let sum = 0
    while (index > 0) {
      sum += this.tree[index]
      index -= this._lowBit(index)
    }

    return sum
  }
}
```