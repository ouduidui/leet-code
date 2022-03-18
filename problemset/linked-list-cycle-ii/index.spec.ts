import { detectCycle, detectCycle2 } from './index';
import { createCycleListNode, ListNode } from '~/utils/listNode';

describe('环形链表 II', () => {
  describe('哈希表', () => {
    testCase(detectCycle);
  });

  describe('快慢指针', () => {
    testCase(detectCycle2);
  });
});

function testCase(fn: (head: ListNode | null) => ListNode | null) {
  it('示例一', () => {
    const head = createCycleListNode([3, 2, 0, -4], 1);
    const expected = head!.next;
    expect(fn(head)).toBe(expected);
  });

  it('示例二', () => {
    const head = createCycleListNode([1, 2], 0);
    expect(fn(head)).toBe(head);
  });

  it('示例三', () => {
    const head = createCycleListNode([1], -1);
    expect(fn(head)).toBe(null);
  });
}
