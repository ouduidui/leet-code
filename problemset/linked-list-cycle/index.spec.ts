import { hasCycle, hasCycle2 } from './index';
import { ListNode, createCycleListNode } from '~/utils/listNode';

describe('环形链表', () => {
  describe('哈希表', () => {
    testCase(hasCycle);
  });

  describe('快慢指针', () => {
    testCase(hasCycle2);
  });
});

function testCase(fn: (head: ListNode | null) => boolean) {
  it('示例一', () => {
    const head = createCycleListNode([3, 2, 0, -4], 1);
    const expected = true;
    expect(fn(head)).toBe(expected);
  });

  it('示例二', () => {
    const head = createCycleListNode([1, 2], 0);
    const expected = true;
    expect(fn(head)).toBe(expected);
  });

  it('示例三', () => {
    const head = createCycleListNode([1], -1);
    const expected = false;
    expect(fn(head)).toBe(expected);
  });
}
