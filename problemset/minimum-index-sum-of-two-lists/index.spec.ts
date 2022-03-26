import { describe, expect, it } from 'vitest'
import { findRestaurant } from '.'

describe('两个列表的最小索引总和', () => {
  testCase(findRestaurant)
})

function testCase(fn: (list1: string[], list2: string[]) => string[]) {
  it.each([
    [
      ['Shogun', 'Tapioca Express', 'Burger King', 'KFC'],
      [
        'Piatti',
        'The Grill at Torrey Pines',
        'Hungry Hunter Steakhouse',
        'Shogun',
      ],
      ['Shogun'],
    ],
    [
      ['Shogun', 'Tapioca Express', 'Burger King', 'KFC'],
      ['KFC', 'Shogun', 'Burger King'],
      ['Shogun'],
    ],
    [
      ['Shogun', 'Tapioca Express', 'Burger King', 'KFC'],
      ['KFC', 'Burger King', 'Tapioca Express', 'Shogun'],
      ['KFC', 'Burger King', 'Tapioca Express', 'Shogun'],
    ],
  ])('示例%#', (list1, list2, expected) => {
    expect(fn(list1, list2)).toStrictEqual(expected)
  })
}
