import { sortedListToBST, sortedListToBST2 } from './index';
import { ListNode, createListNode } from '~/utils/listNode';
import { TreeNode, createTreeNode } from '~/utils/treeNode';

describe('有序链表转换二叉搜索树', () => {
  describe('分治', () => {
    testCase(sortedListToBST);
  });

  describe('分治 + 中序遍历优化', () => {
    testCase(sortedListToBST2);
  });
});

function testCase(fn: (head: ListNode | null) => TreeNode | null) {
  it('示例', () => {
    const head = createListNode([-10, -3, 0, 5, 9]);
    const expected = createTreeNode([0, -3, 9, -10, null, 5]);
    expect(fn(head)).toStrictEqual(expected);
  });
}
