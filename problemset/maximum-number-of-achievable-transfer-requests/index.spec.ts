import { describe, expect, it } from 'vitest'
import { maximumRequests, maximumRequests2 } from '.'
// need refactor
describe('最多可达成的换楼请求数目', () => {
  describe('回溯 + 枚举', () => {
    testCase(maximumRequests)
  })

  describe('二进制枚举', () => {
    testCase(maximumRequests2)
  })
})

function testCase(fn: (n: number, requests: number[][]) => number) {
  it('示例一', () => {
    const n = 5
    const requests = [
      [0, 1],
      [1, 0],
      [0, 1],
      [1, 2],
      [2, 0],
      [3, 4],
    ]
    const expected = 5
    expect(fn(n, requests)).toBe(expected)
  })

  it('示例二', () => {
    const n = 3
    const requests = [
      [0, 0],
      [1, 2],
      [2, 1],
    ]
    const expected = 3
    expect(fn(n, requests)).toBe(expected)
  })

  it('示例三', () => {
    const n = 4
    const requests = [
      [0, 3],
      [3, 1],
      [1, 2],
      [2, 0],
    ]
    const expected = 4
    expect(fn(n, requests)).toBe(expected)
  })
}
