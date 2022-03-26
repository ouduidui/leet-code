import { ListNode, createListNode } from '~/utils/listNode';
import { partition } from '.';
// need refactor
import { describe, it, expect } from 'vitest';
describe('分隔链表', () => {
  testCase(partition);
});

function testCase(fn: (head: ListNode | null, x: number) => ListNode | null) {
  it('示例一', () => {
    const head = createListNode([1, 4, 3, 2, 5, 2]);
    const x = 3;
    const expected = createListNode([1, 2, 2, 4, 3, 5]);

    expect(fn(head, x)).toStrictEqual(expected);
  });

  it('示例二', () => {
    const head = createListNode([2, 1]);
    const x = 2;
    const expected = createListNode([1, 2]);

    expect(fn(head, x)).toStrictEqual(expected);
  });
}
