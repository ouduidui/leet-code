import { describe, expect, it } from 'vitest'
import { findItinerary, findItinerary2 } from '.'

describe('重新安排行程', () => {
  describe('回溯', () => {
    testCase(findItinerary)
  })

  describe('欧拉路径', () => {
    testCase(findItinerary2)
  })
})

function testCase(fn: (tickets: string[][]) => string[]) {
  it.each([
    [
      [['MUC', 'LHR'], ['JFK', 'MUC'], ['SFO', 'SJC'], ['LHR', 'SFO']],
      ['JFK', 'MUC', 'LHR', 'SFO', 'SJC'],
    ],
    [
      [['JFK', 'SFO'], ['JFK', 'ATL'], ['SFO', 'ATL'], ['ATL', 'JFK'], ['ATL', 'SFO']],
      ['JFK', 'ATL', 'JFK', 'SFO', 'ATL', 'SFO'],
    ],
  ])('示例%#', (tickets, expected) => {
    expect(fn(tickets)).toStrictEqual(expected)
  })
}
