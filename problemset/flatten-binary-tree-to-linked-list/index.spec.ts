import { flatten, flatten2, flatten3 } from './index';
import { TreeNode, createTreeNode } from '../../utils/treeNode';

describe('二叉树展开为链表', () => {
  describe('前序遍历', () => {
    testCase(flatten);
  });

  describe('前序遍历和展开同步进行', () => {
    testCase(flatten2);
  });

  describe('寻找前驱节点', () => {
    testCase(flatten3);
  });
});

function testCase(fn: (root: TreeNode | null) => void) {
  it('示例一', () => {
    const root = createTreeNode([1, 2, 5, 3, 4, null, 6]);
    const expected = createTreeNode([
      1,
      null,
      2,
      null,
      3,
      null,
      4,
      null,
      5,
      null,
      6
    ]);

    fn(root);
    expect(root).toStrictEqual(expected);
  });

  it('示例二', () => {
    const root = createTreeNode([]);
    const expected = createTreeNode([]);

    fn(root);
    expect(root).toStrictEqual(expected);
  });

  it('示例三', () => {
    const root = createTreeNode([0]);
    const expected = createTreeNode([0]);

    fn(root);
    expect(root).toStrictEqual(expected);
  });
}
