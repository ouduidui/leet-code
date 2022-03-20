# 快乐数

> 难度：简单
>
> https://leetcode-cn.com/problems/happy-number/

## 题目

编写一个算法来判断一个数 n 是不是快乐数。

「快乐数」 定义为：

- 对于一个正整数，每一次将该数替换为它每个位置上的数字的平方和。
- 对然后重复这个过程直到这个数变为 1，也可能是 无限循环 但始终变不到 1。
- 对如果这个过程 结果为  1，那么这个数就是快乐数。

如果 n 是 快乐数 就返回 true ；不是，则返回 false 。

### 示例

#### 示例 1：

```
输入：n = 19
输出：true
解释：
1² + 9² = 82
8² + 2² = 68
6² + 8² = 100
1² + 0² + 0² = 1
```

#### 示例 2：

```
输入：n = 2
输出：false
```

## 解题

### 用哈希集合检测循环

```typescript
/**
 * 用哈希集合检测循环
 * @desc 时间复杂度 O(logN)  空间复杂度 O(logN)
 * @param n
 */
export function isHappy(n: number): boolean {
  if (n === 1) return true;

  const set = new Set<number>();

  while (!set.has(n) && set.add(n)) {
    if (n === 1) return true;
    let sum = 0;
    while (n !== 0) {
      sum += (n % 10) ** 2;
      n = (n / 10) >> 0;
    }

    n = sum;
  }

  return false;
}
```

### 快慢指针法

```typescript
/**
 * 快慢指针法
 * @desc 时间复杂度 O(logN)  空间复杂度 O(1)
 * @param n
 */
export function isHappy2(n: number): boolean {
  if (n === 1) return true;

  let slow = n;
  let fast = getNext(n);

  while (fast !== 1 && slow !== fast) {
    slow = getNext(slow);
    fast = getNext(getNext(fast));
  }

  return fast === 1;

  function getNext(n: number): number {
    let sum = 0;
    while (n !== 0) {
      sum += (n % 10) ** 2;
      n = (n / 10) >> 0;
    }

    return sum;
  }
}
```
