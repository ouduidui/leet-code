# 填充每个节点的下一个右侧节点指针 II

> 难度：中等
>
> https://leetcode-cn.com/problems/populating-next-right-pointers-in-each-node-ii/

## 题目

给定一个二叉树

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

进阶：

- 你只能使用常量级额外空间。
- 使用递归解题也符合要求，本题中递归程序占用的栈空间不算做额外的空间复杂度。

### 示例

![populating-next-right-pointers-in-each-node-ii](https://user-images.githubusercontent.com/88995580/159103903-bb958307-a673-4807-9e14-1bff688852bc.png)

```
输入：root = [1,2,3,4,5,null,7]
输出：[1,#,2,3,#,4,5,7,#]
解释：给定二叉树如图 A 所示，你的函数应该填充它的每个 next 指针，以指向其下一个右侧节点，如图 B 所示。序列化输出按层序遍历顺序（由 next 指针连接），'#' 表示每层的末尾。
```

## 解题

### 层级遍历

```typescript
/**
 * 层级遍历
 * @desc 时间复杂度 O(N)  空间复杂度 O(N)
 * @param root
 */
export function connect(root: Node | null): Node | null {
  if (root === null) return null;

  const queue: Node[] = [root];

  while (queue.length) {
    const len = queue.length;
    let last: Node | null = null;
    for (let i = 0; i < len; i++) {
      const node = queue.pop()!;
      if (node.left) queue.unshift(node.left);
      if (node.right) queue.unshift(node.right);
      if (last) last.next = node;
      last = node;
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
  if (root === null) return null;

  let start: Node | null = root;
  let last: Node | null;
  let nextStart: Node | null;
  while (start) {
    last = null;
    nextStart = null;
    for (let p: Node | null = start; p !== null; p = p.next) {
      p.left && handle(p.left);
      p.right && handle(p.right);
      start = nextStart;
    }
  }

  return root;

  function handle(p: Node) {
    if (last) last.next = p;
    if (nextStart === null) nextStart = p;
    last = p;
  }
}
```
