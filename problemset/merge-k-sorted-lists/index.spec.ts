import { ListNode, createListNode } from '~/utils/listNode';
import { mergeKLists, mergeKLists2 } from '.';
import { describe, it, expect } from 'vitest';

describe('合并K个升序链表', () => {
  describe('优先队列', () => {
    testCase(mergeKLists);
  });

  describe('分治合并', () => {
    testCase(mergeKLists2);
  });
});

function testCase(fn: (lists: Array<ListNode | null>) => ListNode | null) {
  it.each([
    [
      [
        [1, 4, 5],
        [1, 3, 4],
        [2, 6]
      ],
      [1, 1, 2, 3, 4, 4, 5, 6]
    ],
    [[], []],
    [[[]], []]
  ])('示例%#', (arr, expected) => {
    const lists = arr.map((i) => createListNode(i));
    expect(fn(lists)).toEqual(createListNode(expected));
  });
}
