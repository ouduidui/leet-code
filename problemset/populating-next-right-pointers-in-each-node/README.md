# 填充每个节点的下一个右侧节点指针

> 难度：中等
>
> https://leetcode-cn.com/problems/populating-next-right-pointers-in-each-node/

## 题目

给定一个 **完美二叉树** ，其所有叶子节点都在同一层，每个父节点都有两个子节点。二
叉树定义如下：

```
struct Node {
  int val;
  Node *left;
  Node *right;
  Node *next;
}
```

填充它的每个 `next` 指针，让这个指针指向其下一个右侧节点。如果找不到下一个右侧节
点，则将 `next` 指针设置为 `NULL`。

初始状态下，所有 `next` 指针都被设置为 `NULL`。

### 示例

#### 示例 1：

![populating-next-right-pointers-in-each-node](https://user-images.githubusercontent.com/54696834/159101951-8043f9fc-2519-4e5d-85a2-9861c17646ba.png)

```
输入：root = [1,2,3,4,5,6,7]
输出：[1,#,2,3,#,4,5,6,7,#]
解释：给定二叉树如图 A 所示，你的函数应该填充它的每个 next 指针，以指向其下一个右侧节点，如图 B 所示。序列化的输出按层序遍历排列，同一层节点由 next 指针连接，'#' 标志着每一层的结束。
```

#### 示例 2：

```
输入：root = []
输出：[]
```

## 解法

### 层次遍历

```typescript
/**
 * 层次遍历
 * @desc 时间复杂度 O(N)  空间复杂度 O(N)
 * @param root
 */
export function connect(root: Node | null): Node | null {
  if (root === null) return root;

  // 初始化队列
  const queue = [root];

  while (queue.length) {
    const size = queue.length;
    for (let i = 0; i < size; i++) {
      const node = queue.shift()!;
      if (i < size - 1) node.next = queue[0];
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }

  return root;
}
```

### 使用已建立的 next 指针

```typescript
/**
 * 使用已建立的 next 指针
 * @desc 时间复杂度 O(N)  空间复杂度 O(1)
 * @param root
 */
export function connect2(root: Node | null): Node | null {
  if (root === null) return root;

  // 该层最左的节点
  let leftmost = root;

  while (leftmost.left) {
    // 父节点
    let head: Node | null = leftmost;

    while (head) {
      // 同个父节点下的左右节点相接
      head.left!.next = head.right;
      // 左父节点的右子节点连接右父节点的左子节点
      if (head.next) {
        head.right!.next = head.next.left;
      }
      // 更新下一个同级父节点
      head = head.next;
    }

    // 去下一层的最左的节点
    leftmost = leftmost.left;
  }

  return root;
}
```
