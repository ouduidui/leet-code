import { reorderList, reorderList2 } from './index';
import { ListNode, createListNode } from '~/utils/listNode';

describe('重排链表', () => {
  describe('线性表', () => {
    testCase(reorderList);
  });

  describe('寻找链表中点 + 链表逆序 + 合并链表', () => {
    testCase(reorderList2);
  });
});

function testCase(fn: (head: ListNode | null) => void) {
  it('示例一', () => {
    const head = createListNode([1, 2, 3, 4]);
    const expected = createListNode([1, 4, 2, 3]);
    fn(head);
    expect(head).toStrictEqual(expected);
  });

  it('示例二', () => {
    const head = createListNode([1, 2, 3, 4, 5]);
    const expected = createListNode([1, 5, 2, 4, 3]);
    fn(head);
    expect(head).toStrictEqual(expected);
  });
}
