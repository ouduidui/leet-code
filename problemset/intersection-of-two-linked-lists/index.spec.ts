import { ListNode, createIntersectionListNode } from '../../utils/listNode';
import { getIntersectionNode, getIntersectionNode2 } from './index';

describe('相交链表', () => {
  testCase(getIntersectionNode);
  testCase(getIntersectionNode2);
});

function testCase(
  fn: (headA: ListNode | null, headB: ListNode | null) => ListNode | null
) {
  it('示例一', () => {
    const [headA, headB, intersectionNode] = createIntersectionListNode(
      8,
      [4, 1, 8, 4, 5],
      [5, 6, 1, 8, 4, 5],
      2,
      3
    );
    expect(fn(headA, headB)).toBe(intersectionNode);
  });

  it('示例二', () => {
    const [headA, headB, intersectionNode] = createIntersectionListNode(
      2,
      [1, 9, 1, 2, 4],
      [3, 2, 4],
      3,
      1
    );
    expect(fn(headA, headB)).toBe(intersectionNode);
  });

  it('示例三', () => {
    const [headA, headB, intersectionNode] = createIntersectionListNode(
      0,
      [2, 6, 4],
      [1, 5],
      3,
      2
    );
    expect(fn(headA, headB)).toBe(intersectionNode);
  });
}
