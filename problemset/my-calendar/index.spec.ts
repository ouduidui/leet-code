import { expect, it } from 'vitest'
import { MyCalendar } from '.'

it('我的日程安排表', () => {
  const myCalendar = new MyCalendar()
  expect(myCalendar.book(10, 20)).toBe(true) // return True
  expect(myCalendar.book(15, 25)).toBe(false) // return False ，这个日程安排不能添加到日历中，因为时间 15 已经被另一个日程安排预订了。
  expect(myCalendar.book(20, 30)).toBe(true) // return True ，这个日程安排可以添加到日历中，因为第一个日程安排预订的每个时间都小于 20 ，且不包含时间 20 。
})
