import { expect, it } from 'vitest'
import { StockSpanner } from '.'

it('股票价格跨度', () => {
  const s = new StockSpanner()
  expect(s.next(100)).toBe(1)
  expect(s.next(80)).toBe(1)
  expect(s.next(60)).toBe(1)
  expect(s.next(70)).toBe(2)
  expect(s.next(60)).toBe(1)
  expect(s.next(75)).toBe(4)
  expect(s.next(85)).toBe(6)
})
