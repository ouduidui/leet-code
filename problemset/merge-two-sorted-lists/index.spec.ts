import { mergeTwoLists, mergeTwoLists2 } from '.';
import { ListNode, createListNode } from '~/utils/listNode';
import { describe, it, expect } from 'vitest';

describe('合并两个有序链表', () => {
  describe('递归', () => {
    testCase(mergeTwoLists);
  });

  describe('迭代', () => {
    testCase(mergeTwoLists2);
  });
});

function testCase(
  fn: (l1: ListNode | null, l2: ListNode | null) => ListNode | null
) {
  it.each([
    [
      [1, 2, 4],
      [1, 3, 4],
      [1, 1, 2, 3, 4, 4]
    ],
    [[], [], []],
    [[], [0], [0]]
  ])('示例%#', (l1, l2, expected) => {
    expect(fn(createListNode(l1), createListNode(l2))).toEqual(
      createListNode(expected)
    );
  });
}
