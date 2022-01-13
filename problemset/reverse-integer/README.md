# 整数反转

> 难度：中等
>
> https://leetcode-cn.com/problems/reverse-integer/

## 题目

给你一个 32 位的有符号整数 x ，返回将 x 中的数字部分反转后的结果。

如果反转后整数超过 32 位的有符号整数的范围`[−2^31, 2^31− 1]`，就返回 `0`。

假设环境不允许存储 64 位整数（有符号或无符号）。

### 示例

#### 示例 1：

```
输入：x = 123
输出：321
```

#### 示例 2：

```
输入：x = -123
输出：-321
```

#### 示例 3：

```
输入：x = 120
输出：21
```

#### 示例 4：

```
输入：x = 0
输出：0
```

## 解法

```typescript
/**
 * 时间复杂度 => O(log∣x∣)    空间复杂度 => O(1)
 * @param x {number}
 * @return {number}
 */
export function reverse(x: number): number {
  let res: number = 0;

  while (x !== 0) {
    // 余数
    const digit: number = x % 10;
    // 去掉最后一位
    x = ~~(x / 10);
    res = res * 10 + digit;
    if (res < Math.pow(-2, 31) || res > Math.pow(2, 31) - 1) {
      return 0;
    }
  }

  return res;
}
```
