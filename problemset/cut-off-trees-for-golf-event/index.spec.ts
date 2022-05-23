import { describe, expect, it } from 'vitest'
import { cutOffTree } from '.'

describe('为高尔夫比赛砍树', () => {
  testCase(cutOffTree)
})

function testCase(fn: (forest: number[][]) => number) {
  it.each([
    [
      [[1, 2, 3], [0, 0, 4], [7, 6, 5]],
      6,
    ],
    [
      [[1, 2, 3], [0, 0, 0], [7, 6, 5]],
      -1,
    ],
    [
      [[2, 3, 4], [0, 0, 5], [8, 7, 6]],
      6,
    ],
    [
      [[54581641, 64080174, 24346381, 69107959], [86374198, 61363882, 68783324, 79706116], [668150, 92178815, 89819108, 94701471], [83920491, 22724204, 46281641, 47531096], [89078499, 18904913, 25462145, 60813308]],
      57,
    ],
  ])('示例%#', (forest, expected) => {
    expect(fn(forest)).toBe(expected)
  })
}
