import { expect, it } from 'vitest'
import { MovingAverage } from '.'

it('滑动窗口的平均值', () => {
  const movingAverage = new MovingAverage(3)
  expect(movingAverage.next(1)).toBe(1) // 返回 1.0 = 1 / 1
  expect(movingAverage.next(10)).toBe(5.5) // 返回 5.5 = (1 + 10) / 2
  expect(movingAverage.next(3)).toBe(14 / 3) // 返回 4.66667 = (1 + 10 + 3) / 3
  expect(movingAverage.next(5)).toBe(6) // 返回 6.0 = (10 + 3 + 5) / 3
})
