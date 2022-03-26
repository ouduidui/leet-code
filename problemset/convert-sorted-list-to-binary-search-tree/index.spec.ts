import { sortedListToBST, sortedListToBST2 } from '.';
import { ListNode, createListNode } from '~/utils/listNode';
import { TreeNode, createTreeNode } from '~/utils/treeNode';
import { describe, it, expect } from 'vitest';

describe('有序链表转换二叉搜索树', () => {
  describe('分治', () => {
    testCase(sortedListToBST);
  });

  describe('分治 + 中序遍历优化', () => {
    testCase(sortedListToBST2);
  });
});

function testCase(fn: (head: ListNode | null) => TreeNode | null) {
  it.each([
    [
      [-10, -3, 0, 5, 9],
      [0, -3, 9, -10, null, 5]
    ]
  ])('示例%#', (head, expected) => {
    expect(fn(createListNode(head))).toStrictEqual(createTreeNode(expected));
  });
}
