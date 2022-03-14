import { findRestaurant } from '.';

describe('两个列表的最小索引总和', () => {
  testCase(findRestaurant);
});

function testCase(fn: (list1: string[], list2: string[]) => string[]) {
  it('示例一', () => {
    const list1 = ['Shogun', 'Tapioca Express', 'Burger King', 'KFC'];
    const list2 = [
      'Piatti',
      'The Grill at Torrey Pines',
      'Hungry Hunter Steakhouse',
      'Shogun'
    ];
    const expected = ['Shogun'];
    expect(fn(list1, list2)).toStrictEqual(expected);
  });

  it('示例二', () => {
    const list1 = ['Shogun', 'Tapioca Express', 'Burger King', 'KFC'];
    const list2 = ['KFC', 'Shogun', 'Burger King'];
    const expected = ['Shogun'];
    expect(fn(list1, list2)).toStrictEqual(expected);
  });

  it('示例三', () => {
    const list1 = ['Shogun', 'Tapioca Express', 'Burger King', 'KFC'];
    const list2 = ['KFC', 'Burger King', 'Tapioca Express', 'Shogun'];
    const expected = ['KFC', 'Burger King', 'Tapioca Express', 'Shogun'];
    expect(fn(list1, list2)).toStrictEqual(expected);
  });
}
