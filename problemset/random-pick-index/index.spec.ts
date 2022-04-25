import { expect, it } from 'vitest'
import { Solution, Solution2 } from '.'

it.each([
  ['哈希表', Solution],
  ['水塘抽样', Solution2],
])('随机数索引：%s', (_, Ctor) => {
  const solution = new Ctor([1, 2, 3, 3, 3])
  expect(solution.pick(3)).toMatch(/2|3|4/)
  expect(solution.pick(1)).toBe(0)
})
