import { buildTree, buildTree2 } from './index';
import { TreeNode, createTreeNode } from '../../utils/treeNode';

describe('从中序与后序遍历序列构造二叉树', () => {
  describe('递归', () => {
    testCase(buildTree);
  });

  describe('迭代', () => {
    testCase(buildTree2);
  });
});

function testCase(
  fn: (inorder: number[], postorder: number[]) => TreeNode | null
) {
  it('示例一', () => {
    const inorder = [9, 3, 15, 20, 7];
    const postorder = [9, 15, 7, 20, 3];
    const expected = createTreeNode([3, 9, 20, null, null, 15, 7]);

    expect(fn(inorder, postorder)).toStrictEqual(expected);
  });

  it('示例二', () => {
    const inorder = [-1];
    const postorder = [-1];
    const expected = createTreeNode([-1]);

    expect(fn(inorder, postorder)).toStrictEqual(expected);
  });
}
