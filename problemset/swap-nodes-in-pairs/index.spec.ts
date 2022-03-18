import { swapPairs, swapPairs2 } from './index';
import { ListNode, createListNode } from '~/utils/listNode';

describe('两两交换链表中的节点', () => {
  describe('迭代', () => {
    testCase(swapPairs);
  });

  describe('递归', () => {
    testCase(swapPairs2);
  });
});

function testCase(fn: (head: ListNode | null) => ListNode | null) {
  test('示例一', () => {
    const head: ListNode = createListNode([1, 2, 3, 4]) as ListNode;
    const expected: ListNode = createListNode([2, 1, 4, 3]) as ListNode;

    expect(fn(head)).toEqual(expected);
  });

  test('示例二', () => {
    const head: null = createListNode([]) as null;
    const expected: null = createListNode([]) as null;

    expect(fn(head)).toEqual(expected);
  });

  test('示例三', () => {
    const head: ListNode = createListNode([1]) as ListNode;
    const expected: ListNode = createListNode([1]) as ListNode;

    expect(fn(head)).toEqual(expected);
  });
}
