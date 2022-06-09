# 非重叠矩形中的随机点

> 难度：中等
>
> https://leetcode.cn/problems/random-point-in-non-overlapping-rectangles/

## 题目

给定一个由非重叠的轴对齐矩形的数组 `rects` ，其中 `rects[i] = [ai, bi, xi, yi]` 表示 `(ai, bi)` 是第 `i` 个矩形的左下角点，`(xi, yi)` 是第 `i` 个矩形的右上角点。设计一个算法来随机挑选一个被某一矩形覆盖的整数点。矩形周长上的点也算做是被矩形覆盖。所有满足要求的点必须等概率被返回。

在给定的矩形覆盖的空间内的任何整数点都有可能被返回。

请注意 ，整数点是具有整数坐标的点。

实现 `Solution` 类:

- `Solution(int[][] rects)` 用给定的矩形数组 `rects` 初始化对象。
- `int[] pick()` 返回一个随机的整数点 `[u, v]` 在给定的矩形所覆盖的空间内。

### 示例

![image](https://user-images.githubusercontent.com/54696834/172752585-01f31b30-1fbb-481d-bb7f-0d9a2134e009.png)

```
输入: 
["Solution", "pick", "pick", "pick", "pick", "pick"]
[[[[-2, -2, 1, 1], [2, 2, 4, 6]]], [], [], [], [], []]
输出: 
[null, [1, -2], [1, -1], [-1, -2], [-2, -2], [0, 0]]

解释：
Solution solution = new Solution([[-2, -2, 1, 1], [2, 2, 4, 6]]);
solution.pick(); // 返回 [1, -2]
solution.pick(); // 返回 [1, -1]
solution.pick(); // 返回 [-1, -2]
solution.pick(); // 返回 [-2, -2]
solution.pick(); // 返回 [0, 0]
```

## 解题

```ts 
/**
 * 前缀和 + 二分查找
 */
export class Solution {
  arr = [0]

  /**
   * @desc 时间复杂度 O(N)  空间复杂度 O(N)
   * @param rects
   */
  constructor(public rects: number[][]) {
    for (const [a, b, x, y] of rects)
      this.arr.push(this.arr[this.arr.length - 1] + (x - a + 1) * (y - b + 1))
  }

  /**
   * 时间复杂度 O(logN)  空间复杂度 O(1)
   * @returns
   */
  pick(): number[] {
    let k = (Math.random() * this.arr[this.arr.length - 1]) >> 0
    const rectIndex = this.binarySearch(k + 1) - 1
    k -= this.arr[rectIndex]
    const [a, b, _, y] = this.rects[rectIndex]
    const col = y - b + 1
    const da = (k / col) >> 0
    const db = k - col * da
    return [a + da, b + db]
  }

  private binarySearch(target: number) {
    let low = 0
    let high = this.arr.length - 1
    while (low <= high) {
      const mid = Math.floor((high - low) / 2) + low
      const num = this.arr[mid]
      if (num === target)
        return mid
      else if (num > target)
        high = mid - 1
      else
        low = mid + 1
    }

    return low
  }
}
```