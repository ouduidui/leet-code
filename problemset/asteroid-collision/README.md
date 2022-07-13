# 行星碰撞

> 难度：中等
>
> https://leetcode.cn/problems/asteroid-collision/

## 题目

给定一个整数数组 `asteroids`，表示在同一行的行星。

对于数组中的每一个元素，其绝对值表示行星的大小，正负表示行星的移动方向（正表示向右移动，负表示向左移动）。每一颗行星以相同的速度移动。

找出碰撞后剩下的所有行星。碰撞规则：两个行星相互碰撞，较小的行星会爆炸。如果两颗行星大小相同，则两颗行星都会爆炸。两颗移动方向相同的行星，永远不会发生碰撞。

### 示例

#### 示例 1：

```
输入：asteroids = [5,10,-5]
输出：[5,10]
解释：10 和 -5 碰撞后只剩下 10 。 5 和 10 永远不会发生碰撞。
```

#### 示例 2：

```
输入：asteroids = [8,-8]
输出：[]
解释：8 和 -8 碰撞后，两者都发生爆炸。
```

#### 示例 3：

```
输入：asteroids = [10,2,-5]
输出：[10]
解释：2 和 -5 发生碰撞后剩下 -5 。10 和 -5 发生碰撞后剩下 10 。
```

## 解题

```ts 
/**
 * 栈模拟
 * @desc 时间复杂度 O(N)  空间复杂度 O(1)
 * @param asteroids
 * @returns
 */
export function asteroidCollision(asteroids: number[]): number[] {
  const stack: number[] = []

  for (const aster of asteroids) {
    let alive = true
    while (alive && aster < 0 && stack.length && stack[stack.length - 1] > 0) {
      // aster 是否存在
      alive = stack[stack.length - 1] < -aster
      // 栈顶行星爆炸
      if (stack[stack.length - 1] <= -aster)
        stack.pop()
    }

    if (alive)
      stack.push(aster)
  }

  return stack
}
```