import { ListNode, createListNode } from '~/utils/listNode';
import { deleteDuplicates } from './index';

describe('删除排序链表的重复元素 II', () => {
  testCase(deleteDuplicates);
});

function testCase(fn: (head: ListNode | null) => ListNode | null) {
  it('示例一', () => {
    const head = createListNode([1, 2, 3, 3, 4, 4, 5]);
    const expected = createListNode([1, 2, 5]);
    expect(fn(head)).toStrictEqual(expected);
  });

  it('示例二', () => {
    const head = createListNode([1, 1, 1, 2, 3]);
    const expected = createListNode([2, 3]);
    expect(fn(head)).toStrictEqual(expected);
  });
}
