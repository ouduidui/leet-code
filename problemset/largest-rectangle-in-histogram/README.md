# 柱状图中最大的矩形

> 难度：困难
>
> https://leetcode-cn.com/problems/largest-rectangle-in-histogram/

## 题目

给定 n 个非负整数，用来表示柱状图中各个柱子的高度。每个柱子彼此相邻，且宽度为 1
。

求在该柱状图中，能够勾勒出来的矩形的最大面积。

### 示例 1：

![largest-rectangle-in-histogram-1](https://user-images.githubusercontent.com/88995580/159103228-e4e093bb-d453-471e-812b-401ae3e980cc.jpg)

```
输入：heights = [2,1,5,6,2,3]
输出：10
解释：最大的矩形为图中红色区域，面积为 10
```

### 示例 2：

![largest-rectangle-in-histogram-2](https://user-images.githubusercontent.com/88995580/159103263-03e36c4a-d747-4ecd-964d-11477d861658.jpg)

```
输入： heights = [2,4]
输出： 4
```

## 解题

### 暴力解法 - 遍历所有矩形

```typescript
/**
 * 暴力解法 - 遍历所有矩形
 * @desc 时间复杂度 O(N^2)  空间复杂度 O(1)
 * @param heights
 */
export function largestRectangleArea(heights: number[]): number {
  const len = heights.length;
  let res = 0;

  for (let i = 0; i < len; i++) {
    for (let j = i; j < len; j++) {
      res = Math.max(res, calculateArea(i, j));
    }
  }

  return res;

  function calculateArea(start: number, end: number) {
    const height = Math.min(...heights.slice(start, end + 1));
    return height * (end - start + 1);
  }
}
```

### 暴力解法 - 固定高度

```typescript
/**
 * 暴力解法 - 固定高度
 * @desc 时间复杂度 O(N^2)  空间复杂度 O(1)
 * @param heights
 */
export function largestRectangleArea1(heights: number[]): number {
  const len = heights.length;
  let res = 0;

  for (let i = 0; i < len; i++) {
    const height = heights[i];
    let [start, end] = [i, i];
    // 向左右扩展
    while (start > 0 && heights[start - 1] >= height) {
      start--;
    }
    while (end < len - 1 && heights[end + 1] >= height) {
      end++;
    }
    res = Math.max(res, (end - start + 1) * height);
  }

  return res;
}
```

### 单调栈

```typescript
/**
 * 单调栈
 * @desc 时间复杂度 O(N)  空间复杂度 O(N)
 * @param heights
 */
export function largestRectangleArea2(heights: number[]): number {
  const stack = [-1];
  let maxArea = 0;
  for (let i = 0; i < heights.length; i++) {
    // 当前柱子的高度小于位于栈顶的柱子的高度
    while (
      stack[stack.length - 1] !== -1 &&
      heights[stack[stack.length - 1]] >= heights[i]
    ) {
      // 以栈顶的柱子为高度计算面积
      const height = heights[stack.pop()!];
      // 宽度为区间 (stack[stack.length - 1] , i)，不包括两端
      const width = i - stack[stack.length - 1] - 1;
      maxArea = Math.max(maxArea, height * width);
    }
    // 当前柱子的高度大于位于栈顶的柱子的高度  入栈
    stack.push(i);
  }

  // 计算末尾
  while (stack[stack.length - 1] !== -1) {
    const height = heights[stack.pop()!];
    // 宽度区间为 (stack[stack.length - 1], heights尾部]
    const width = heights.length - stack[stack.length - 1] - 1;
    maxArea = Math.max(maxArea, height * width);
  }

  return maxArea;
}
```
