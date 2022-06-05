# 在圆内随机生成点

> 难度：中等
>
> https://leetcode.cn/problems/generate-random-point-in-a-circle/

## 题目

给定圆的半径和圆心的位置，实现函数 `randPoint` ，在圆中产生均匀随机点。

实现 Solution 类:

- `Solution(double radius, double x_center, double y_center)` 用圆的半径 `radius` 和圆心的位置 `(x_center, y_center)` 初始化对象
- `randPoint()` 返回圆内的一个随机点。圆周上的一点被认为在圆内。答案作为数组返回 `[x, y]` 。
 

### 示例 1：

```
输入: 
["Solution","randPoint","randPoint","randPoint"]
[[1.0, 0.0, 0.0], [], [], []]
输出: [null, [-0.02493, -0.38077], [0.82314, 0.38945], [0.36572, 0.17248]]
解释:
Solution solution = new Solution(1.0, 0.0, 0.0);
solution.randPoint ();//返回[-0.02493，-0.38077]
solution.randPoint ();//返回[0.82314,0.38945]
solution.randPoint ();//返回[0.36572,0.17248]
```

## 解题

### 拒绝采样

```ts 
/**
 * 拒绝采样
 * @desc 时间复杂度 O(1)  空间复杂度 O(1)
 */
export class Solution {
  constructor(
    private radius: number,
    private x_center: number,
    private y_center: number,
  ) {}

  randPoint(): number[] {
    while (true) {
      const x = this.getRandom()
      const y = this.getRandom()
      if (x ** 2 + y ** 2 <= this.radius ** 2)
        return [this.x_center + x, this.y_center + y]
    }
  }

  private getRandom(): number {
    return Math.random() * (2 * this.radius) - this.radius
  }
}
```

### 计算分布函数

```ts 
/**
 * 计算分布函数
 * @desc 时间复杂度 O(1)  空间复杂度 O(1)
 */
export class Solution2 {
  constructor(
    private radius: number,
    private x_center: number,
    private y_center: number,
  ) {}

  randPoint(): number[] {
    const u = Math.random()
    const theta = Math.random() * 2 * Math.PI
    const r = Math.sqrt(u)
    return [
      this.x_center + r * Math.cos(theta) * this.radius,
      this.y_center + r * Math.sin(theta) * this.radius,
    ]
  }
}
```