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
