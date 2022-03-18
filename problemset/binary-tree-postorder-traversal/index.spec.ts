import { createTreeNode, TreeNode } from '~/utils/treeNode';
import {
  postorderTraversal,
  postorderTraversal2,
  postorderTraversal3
} from './index';

describe('二叉树的后序遍历', () => {
  describe('递归', () => {
    testCase(postorderTraversal);
  });

  describe('迭代', () => {
    testCase(postorderTraversal2);
  });

  describe('Morris 遍历', () => {
    testCase(postorderTraversal3);
  });
});

function testCase(fn: (root: TreeNode | null) => number[]) {
  it('示例一', () => {
    const root = createTreeNode([1, null, 2, 3]);
    const expected = [3, 2, 1];
    expect(fn(root)).toStrictEqual(expected);
  });

  it('示例二', () => {
    const root = createTreeNode([]);
    const expected: number[] = [];
    expect(fn(root)).toStrictEqual(expected);
  });

  it('示例三', () => {
    const root = createTreeNode([1]);
    const expected = [1];
    expect(fn(root)).toStrictEqual(expected);
  });
}
