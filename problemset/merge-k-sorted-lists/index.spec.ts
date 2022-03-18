import { ListNode, createListNode } from '~/utils/listNode';
import { mergeKLists, mergeKLists2 } from './index';

describe('合并K个升序链表', () => {
  describe('优先队列', () => {
    testCase(mergeKLists);
  });

  describe('分治合并', () => {
    testCase(mergeKLists2);
  });
});

function testCase(fn: (lists: Array<ListNode | null>) => ListNode | null) {
  test('示例一', () => {
    const lists: Array<ListNode | null> = [
      createListNode([1, 4, 5]),
      createListNode([1, 3, 4]),
      createListNode([2, 6])
    ];
    const expected: ListNode | null = createListNode([1, 1, 2, 3, 4, 4, 5, 6]);

    expect(fn(lists)).toEqual(expected);
  });

  test('示例二', () => {
    const lists: Array<ListNode | null> = [];
    const expected: ListNode | null = createListNode([]);

    expect(fn(lists)).toEqual(expected);
  });

  test('示例三', () => {
    const lists: Array<ListNode | null> = [createListNode([])];
    const expected: ListNode | null = createListNode([]);

    expect(fn(lists)).toEqual(expected);
  });
}
