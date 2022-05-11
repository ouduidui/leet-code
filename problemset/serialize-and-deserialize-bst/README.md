# 序列化和反序列化二叉搜索树

> 难度：中等
>
> https://leetcode.cn/problems/serialize-and-deserialize-bst/

## 题目

序列化是将数据结构或对象转换为一系列位的过程，以便它可以存储在文件或内存缓冲区中，或通过网络连接链路传输，以便稍后在同一个或另一个计算机环境中重建。

设计一个算法来序列化和反序列化 **二叉搜索树** 。 对序列化/反序列化算法的工作方式没有限制。 您只需确保二叉搜索树可以序列化为字符串，并且可以将该字符串反序列化为最初的二叉搜索树。

**编码的字符串应尽可能紧凑。**
 
### 示例

#### 示例 1：

```
输入：root = [2,1,3]
输出：[2,1,3]
```

#### 示例 2：

```
输入：root = []
输出：[]
```

## 解题

```ts 
import { TreeNode } from '~/utils/treeNode'

/**
 * 后序遍历
 * @desc 时间复杂度 O(N)  空间复杂度 O(N)
 * @param root
 * @returns
 */
export function serialize(root: TreeNode | null): string {
  const list: number[] = []
  postOrder(root, list)
  return list.join(',')

  function postOrder(node: TreeNode | null, list: number[]) {
    if (!node) return
    postOrder(node.left, list)
    postOrder(node.right, list)
    list.push(node.val)
  }
}

/**
 * 后序遍历
 * @desc 时间复杂度 O(N)  空间复杂度 O(N)
 * @param data
 * @returns
 */
export function deserialize(data: string): TreeNode | null {
  if (!data.length) return null

  return construct(
    -Number.MAX_VALUE,
    Number.MAX_VALUE,
    data.split(',').map<number>(i => Number(i)),
  )

  function construct(lower: number, upper: number, stack: number[]) {
    if (
      stack.length === 0
      || stack[stack.length - 1] < lower
      || stack[stack.length - 1] > upper
    )
      return null

    const val = stack.pop()!
    const root = new TreeNode(val)
    root.right = construct(val, upper, stack)
    root.left = construct(lower, val, stack)
    return root
  }
}
```