# Sqrt(x)

> 难度：简单
>
> https://leetcode-cn.com/problems/sqrtx/

## 题目

给你一个非负整数 `x` ，计算并返回 `x` 的 算术平方根 。

由于返回类型是整数，结果只保留 **整数部分** ，小数部分将被 **舍去** 。

注意：不允许使用任何内置指数函数和算符，例如 `pow(x, 0.5)` 或者 `x ** 0.5` 。

### 示例

#### 示例 1：

```
输入：x = 4
输出：2
```

#### 示例 2：

```
输入：x = 8
输出：2
解释：8 的算术平方根是 2.82842..., 由于返回类型是整数，小数部分将被舍去。
```

## 解法

### 二分法

```typescript
/**
 * 二分法
 * @desc 时间复杂度 O(logN)   空间复杂度 O(1)
 * @param x {number}
 * @return {number}
 */
export function mySqrt(x: number): number {
  let left = 0;
  let right = x;
  let ans = -1;

  while (left <= right) {
    const mid = (right + left) >> 1;
    if (mid * mid <= x) {
      ans = mid;
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return ans;
}
```

### 牛顿迭代

[牛顿迭代法](https://zh.wikipedia.org/wiki/%E7%89%9B%E9%A1%BF%E6%B3%95) 是一种可
以用来快熟求解函数零点的方法。

为了叙述方便，我们用`C`表示待求出平方根的那个整数。显然`C`的平方根就是函
数`y=f(x)=x^2-C`的零点。

牛顿迭代法的本质是借助泰勒级数，从初始值开始快熟向零点逼近。我们任取一个`x0`作为
初始值，在每一步的迭代中，我们找到函数图像上的点`(xi,f(xi))`，过该点做一条斜率为
该点导数`f'(xi)`的直线，与横轴的交点记为`xi+1`。`xi+1`相较于`xi`而言距离零点更近
。在经过多次迭代后，我们就可以得到一个距离零点非常接近的交点。下图给出了从`x0`开
始迭代两次，得到`x1`和`x2`的过程。

![sqrtx](https://user-images.githubusercontent.com/54696834/159102061-2d19217c-106f-4d9c-8366-76471a372988.png)

接下来，我们可以来研究`xi`和`xi-1`的关系。当我们已知了`x0`的时候，此时
的`y=f(x)=x^2-C`的坐标点为`(x0, x0^2 - C)`，然后`f'(x)=2x`，因此该点的导数
为`2x0`，因此直线的函数为`y = 2x0 · x + b`。

然后我们就需要求`b`值，将`(x0, x0^2 - C)`坐标点代入
得`b = (x0^2 - C) - 2x0^2 = -C - x0^2`，因此我们可以求出直线函数
为`y = 2x0 · x - C - x0^2`。

然后我们想求`x1`的时候，即`y=0`，代入求
出`x1 = (C + x0^2) / 2x0 = 0.5 * (x0 + C/x0)`。

因此我们可以得知，当我们用变量`t`作为初始值，则`t = 0.5 * (t + x / t)`，然而
当`t^2 - x`的差距小于 1 时就可以返回结果了。

```typescript
/**
 * 牛顿迭代
 * @desc 时间复杂度 O(logN)   空间复杂度 O(1)
 * @param x {number}
 * @return {number}
 */
export function mySqrt2(x: number): number {
  if (x === 0) return 0;

  let t = x;
  while (t * t - x >= 1) {
    // k = 2t
    // y = 2tx + b
    // b = (t^2 - C) - 2t^2 = - C - t^2
    // y = 2tx - C - t^2
    // x = (C + t^2) / 2t = 0.5 * (t + C/t)
    t = 0.5 * (t + x / t);
  }

  return Math.floor(t);
}
```
