import { buildTree, buildTree2 } from './index';
import { TreeNode, createTreeNode } from '~/utils/treeNode';

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
  it('示例一', () => {
    const preorder = [3, 9, 20, 15, 7];
    const inorder = [9, 3, 15, 20, 7];
    const expected = createTreeNode([3, 9, 20, null, null, 15, 7]);

    expect(fn(preorder, inorder)).toStrictEqual(expected);
  });

  it('示例二', () => {
    const preorder = [-1];
    const inorder = [-1];
    const expected = createTreeNode([-1]);

    expect(fn(preorder, inorder)).toStrictEqual(expected);
  });
}
