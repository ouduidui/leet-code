import { expect, it } from 'vitest'
import { RangeModule } from '.'

it('Range模块', () => {
  const rangeModule = new RangeModule()
  rangeModule.addRange(10, 20)
  rangeModule.removeRange(14, 16)
  expect(rangeModule.queryRange(10, 14)).toBe(true)
  expect(rangeModule.queryRange(13, 15)).toBe(false)
  expect(rangeModule.queryRange(16, 17)).toBe(true)
})
