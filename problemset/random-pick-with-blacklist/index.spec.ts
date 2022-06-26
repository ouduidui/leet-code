import { expect, it } from 'vitest'
import { Solution } from '.'

it('黑名单中的随机数', () => {
  const solution = new Solution(7, [2, 3, 5])
  expect([0, 1, 4, 6]).toContain(solution.pick())
  expect([0, 1, 4, 6]).toContain(solution.pick())
  expect([0, 1, 4, 6]).toContain(solution.pick())
  expect([0, 1, 4, 6]).toContain(solution.pick())
  expect([0, 1, 4, 6]).toContain(solution.pick())
  expect([0, 1, 4, 6]).toContain(solution.pick())
})
