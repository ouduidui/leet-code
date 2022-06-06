import { expect, it } from 'vitest'
import { MyCalendarThree } from '.'

it('我的日程安排表 III', () => {
  const myCalendarThree = new MyCalendarThree()
  expect(myCalendarThree.book(10, 20)).toBe(1) // 返回 1 ，第一个日程安排可以预订并且不存在相交，所以最大 k 次预订是 1 次预订。
  expect(myCalendarThree.book(50, 60)).toBe(1) // 返回 1 ，第二个日程安排可以预订并且不存在相交，所以最大 k 次预订是 1 次预订。
  expect(myCalendarThree.book(10, 40)).toBe(2) // 返回 2 ，第三个日程安排 [10, 40) 与第一个日程安排相交，所以最大 k 次预订是 2 次预订。
  expect(myCalendarThree.book(5, 15)).toBe(3) // 返回 3 ，剩下的日程安排的最大 k 次预订是 3 次预订。
  expect(myCalendarThree.book(5, 10)).toBe(3) // 返回 3
  expect(myCalendarThree.book(25, 55)).toBe(3) // 返回 3
})
