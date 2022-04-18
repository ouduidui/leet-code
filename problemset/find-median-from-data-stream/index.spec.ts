import { expect, it } from 'vitest'
import { MedianFinder } from '.'

it('数据流的中位数', () => {
  const medianFinder = new MedianFinder()
  medianFinder.addNum(1)
  medianFinder.addNum(2)
  expect(medianFinder.findMedian()).toBe(1.5)
  medianFinder.addNum(3)
  expect(medianFinder.findMedian()).toBe(2)
})
