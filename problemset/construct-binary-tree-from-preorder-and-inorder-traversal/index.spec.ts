import { buildTree, buildTree2 } from '.';
import { TreeNode, createTreeNode } from '~/utils/treeNode';
import { describe, it, expect } from 'vitest';

describe('从前序与中序遍历序列构造二叉树', () => {
  describe('递归', () => {
    testCase(buildTree);
  });

  describe('迭代', () => {
    testCase(buildTree2);
  });
});

function testCase(
  fn: (preorder: number[], inorder: number[]) => TreeNode | null
) {
  it.each([
    [
      [3, 9, 20, 15, 7],
      [9, 3, 15, 20, 7],
      [3, 9, 20, null, null, 15, 7]
    ],
    [[-1], [-1], [-1]]
  ])('示例%#', (preorder, inorder, expected) => {
    expect(fn(preorder, inorder)).toStrictEqual(createTreeNode(expected));
  });
}
