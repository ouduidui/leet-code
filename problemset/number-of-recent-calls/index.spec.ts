import { expect, it } from 'vitest'
import { RecentCounter } from '.'

it('最近的请求次数', () => {
  const recentCounter = new RecentCounter()
  expect(recentCounter.ping(1)).toBe(1) // requests = [1]，范围是 [-2999,1]，返回 1
  expect(recentCounter.ping(100)).toBe(2) // requests = [1, 100]，范围是 [-2900,100]，返回 2
  expect(recentCounter.ping(3001)).toBe(3) // requests = [1, 100, 3001]，范围是 [1,3001]，返回 3
  expect(recentCounter.ping(3002)).toBe(3) // requests = [1, 100, 3001, 3002]，范围是 [2,3002]，返回 3
})
