import { reverseList } from '.';
import { ListNode, createListNode } from '~/utils/listNode';
// need refactor
import { describe, it, expect } from 'vitest';
describe('反转链表', () => {
  testCase(reverseList);
});

function testCase(fn: (head: ListNode | null) => ListNode | null) {
  it('示例一', () => {
    const head = createListNode([1, 2, 3, 4, 5]);
    const expected = createListNode([5, 4, 3, 2, 1]);
    expect(fn(head)).toStrictEqual(expected);
  });

  it('示例二', () => {
    const head = createListNode([1, 2]);
    const expected = createListNode([2, 1]);
    expect(fn(head)).toStrictEqual(expected);
  });

  it('示例三', () => {
    const head = createListNode([]);
    const expected = createListNode([]);
    expect(fn(head)).toStrictEqual(expected);
  });
}
