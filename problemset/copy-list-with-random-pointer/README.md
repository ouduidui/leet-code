# 复制带随机指针的链表

> 难度：中等
>
> https://leetcode-cn.com/problems/copy-list-with-random-pointer/

## 题目

给你一个长度为 `n` 的链表，每个节点包含一个额外增加的随机指针 `random` ，该指针
可以指向链表中的任何节点或空节点。

构造这个链表的 **深拷贝**。 深拷贝应该正好由 `n` 个 **全新** 节点组成，其中每个
新节点的值都设为其对应的原节点的值。新节点的 `next` 指针和 `random` 指针也都应指
向复制链表中的新节点，并使原链表和复制链表中的这些指针能够表示相同的链表状态。复
制链表中的指针都不应指向原链表中的节点 。

例如，如果原链表中有 `X` 和 `Y` 两个节点，其中 `X.random --> Y` 。那么在复制链表
中对应的两个节点 `x` 和 `y` ，同样有 `x.random --> y` 。

返回复制链表的头节点。

用一个由 `n` 个节点组成的链表来表示输入/输出中的链表。每个节点用一个
`[val, random_index]` 表示：

- `val`：一个表示 `Node.val` 的整数。
- `random_index`：随机指针指向的节点索引（范围从 `0` 到 `n-1`）；如果不指向任何
  节点，则为 `null` 。

你的代码 **只** 接受原链表的头节点 `head` 作为传入参数。

### 示例

#### 示例 1：

![copy-list-with-random-pointer-1](https://user-images.githubusercontent.com/54696834/159101944-f6f379ef-c092-4c7e-a304-f96a8aaf154a.png)

```
输入：head = [[7,null],[13,0],[11,4],[10,2],[1,0]]
输出：[[7,null],[13,0],[11,4],[10,2],[1,0]]
```

#### 示例 2：

![copy-list-with-random-pointer-2](https://user-images.githubusercontent.com/54696834/159101949-4ac41d0c-b164-4189-857c-1adf5b722bbc.png)

```
输入：head = [[1,1],[2,1]]
输出：[[1,1],[2,1]]
```

#### 示例 3：

![copy-list-with-random-pointer-3](https://user-images.githubusercontent.com/54696834/159101946-dbaa406e-a81f-421b-9de5-e8f274508344.png)

```
输入：head = [[3,null],[3,0],[3,null]]
输出：[[3,null],[3,0],[3,null]]
```

## 解题

### 回溯 + 哈希表

```typescript
/**
 * 回溯 + 哈希表
 * @desc 时间复杂度 O(N)  空间复杂度 O(N)
 * @param head
 */
export function copyRandomList(head: Node | null): Node | null {
  const nodeMap = new Map<Node, Node>();
  return _copyRandomList(head);

  function _copyRandomList(node: Node | null): Node | null {
    if (node === null) return null;

    if (!nodeMap.has(node)) {
      const cloneNode = new Node(node.val);
      nodeMap.set(node, cloneNode);
      cloneNode.next = _copyRandomList(node.next);
      cloneNode.random = _copyRandomList(node.random);
    }

    return nodeMap.get(node)!;
  }
}
```

### 迭代 + 节点拆分

```typescript
/**
 * 迭代 + 节点拆分
 * @desc 时间复杂度 O(N)  空间复杂度 O(1)
 * @param head
 */
export function copyRandomList2(head: Node | null): Node | null {
  if (head === null) return null;

  let node: Node | null;
  // 实现链表复制，穿插在原列表中
  // node1 -> node2  =====>   node1 -> cloneNode1 -> node2 -> cloneNode2
  for (node = head; node; node = node.next.next) {
    node.next = new Node(node.val, node.next || undefined);
  }

  // 实现随机节点绑定
  for (node = head; node && node.next; node = node.next.next) {
    const cloneNode = node.next!;
    cloneNode.random = node.random ? node.random.next : null;
  }

  const cloneHead = head.next;
  // 将复制链表从原链表脱离开来
  for (node = head; node !== null; node = node.next) {
    const cloneNode = node.next!;
    node.next = node.next!.next;
    cloneNode.next = cloneNode.next ? cloneNode.next.next : null;
  }

  return cloneHead;
}
```
