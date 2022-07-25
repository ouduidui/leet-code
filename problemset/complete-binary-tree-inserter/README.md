# 完全二叉树插入器

> 难度：中等
>
> https://leetcode.cn/problems/complete-binary-tree-inserter/

## 题目

**完全二叉树** 是每一层（除最后一层外）都是完全填充（即，节点数达到最大）的，并且所有的节点都尽可能地集中在左侧。

设计一种算法，将一个新节点插入到一个完整的二叉树中，并在插入后保持其完整。

实现 `CBTInserter` 类:

- `CBTInserter(TreeNode root)` 使用头节点为 `root` 的给定树初始化该数据结构；
- `CBTInserter.insert(int v)`  向树中插入一个值为 `Node.val == val`的新节点 `TreeNode`。使树保持完全二叉树的状态，并返回插入节点 `TreeNode` 的父节点的值；
- `CBTInserter.get_root()` 将返回树的头节点。
 
### 示例：

![image](https://user-images.githubusercontent.com/54696834/180680516-8c1529bb-c736-4e7f-960c-dbf044400543.png)

```
输入
["CBTInserter", "insert", "insert", "get_root"]
[[[1, 2]], [3], [4], []]
输出
[null, 1, 2, [1, 2, 3, 4]]

解释
CBTInserter cBTInserter = new CBTInserter([1, 2]);
cBTInserter.insert(3);  // 返回 1
cBTInserter.insert(4);  // 返回 2
cBTInserter.get_root(); // 返回 [1, 2, 3, 4]
```

## 解题

### 队列

```ts
/**
 * 队列
 */
export class CBTInserter {
  private candidate: TreeNode[] = []

  /**
   * @desc 时间复杂度 O(N)  空间复杂度 O(N+Q)
   * @param root
   * @returns
   */
  constructor(private root: TreeNode | null) {
    if (!root) return

    const queue = [root]

    while (queue.length) {
      const node = queue.shift()!
      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
      if (!(node.left && node.right)) this.candidate.push(node)
    }
  }

  /**
   * @desc 时间复杂度 O(1)
   */
  insert(val: number): number {
    const child = new TreeNode(val)
    const node = this.candidate[0]
    const ret = node.val

    if (!node.left) {
      node.left = child
    }
    else {
      node.right = child
      this.candidate.shift()
    }
    this.candidate.push(child)
    return ret
  }

  /**
 * @desc 时间复杂度 O(1)
 */
  get_root(): TreeNode | null {
    return this.root
  }
}
```

### 二进制

```ts
/**
 * 二进制
 */
export class CBTInserter2 {
  private cnt = 0

  /**
   * @desc 时间复杂度 O(N)  空间复杂度 O(N)
   * @param root
   * @returns
   */
  constructor(private root: TreeNode | null) {
    if (!root) return

    const queue = [root]

    while (queue.length) {
      this.cnt++
      const node = queue.shift()!
      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }
  }

  /**
     * @desc 时间复杂度 O(1)
     */
  insert(val: number): number {
    this.cnt++
    const child = new TreeNode(val)
    let node: TreeNode = this.root as TreeNode
    const highbit = this.cnt.toString(2).length - 1
    for (let i = highbit - 1; i >= 1; i--) {
      if ((this.cnt & (1 << i)) !== 0)
        node = node.right!
      else
        node = node.left!
    }

    if ((this.cnt & 1) !== 0)
      node.right = child
    else
      node.left = child

    return node.val
  }

  /**
   * @desc 时间复杂度 O(1)
   */
  get_root(): TreeNode | null {
    return this.root
  }
}
```