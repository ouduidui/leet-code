import { describe, expect, it } from 'vitest'
import { MyCalendarTwo } from '.'

describe('我的日程安排表 II', () => {
  testCase(MyCalendarTwo)
})

type CtorType = new () => { book: (start: number, end: number) => boolean }

function testCase(Ctor: CtorType) {
  it('示例', () => {
    const myCalendar = new Ctor()
    expect(myCalendar.book(10, 20)).toBe(true) // returns true
    expect(myCalendar.book(50, 60)).toBe(true) // returns true
    expect(myCalendar.book(10, 40)).toBe(true) // returns true
    expect(myCalendar.book(5, 15)).toBe(false) // returns false
    expect(myCalendar.book(5, 10)).toBe(true) // returns true
    expect(myCalendar.book(25, 55)).toBe(true) // returns true
  })
}
