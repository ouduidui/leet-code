# 克隆图

> 难度：中等
>
> https://leetcode-cn.com/problems/clone-graph/

## 题目

给你无向 **连通** 图中一个节点的引用，请你返回该图的 **深拷贝**（克隆）。

图中的每个节点都包含它的值 `val（int）` 和其邻居的列表（`list[Node]`）。

```java
class Node {
    public int val;
    public List<Node> neighbors;
}
```

测试用例格式：

简单起见，每个节点的值都和它的索引相同。例如，第一个节点值为 `1`（`val = 1`），
第二个节点值为 `2`（`val = 2`），以此类推。该图在测试用例中使用邻接列表表示。

**邻接列表** 是用于表示有限图的无序列表的集合。每个列表都描述了图中节点的邻居集
。

给定节点将始终是图中的第一个节点（值为 1）。你必须将 **给定节点的拷贝** 作为对克
隆图的引用返回。

### 示例

#### 示例 1：

![clone-graph-1](https://user-images.githubusercontent.com/54696834/159101943-c6767c4d-50ee-4f5b-a25e-ca7e87f279bc.png)

```
输入：adjList = [[2,4],[1,3],[2,4],[1,3]]
输出：[[2,4],[1,3],[2,4],[1,3]]
解释：
图中有 4 个节点。
节点 1 的值是 1，它有两个邻居：节点 2 和 4 。
节点 2 的值是 2，它有两个邻居：节点 1 和 3 。
节点 3 的值是 3，它有两个邻居：节点 2 和 4 。
节点 4 的值是 4，它有两个邻居：节点 1 和 3 。
```

#### 示例 2：

![clone-graph-2](https://user-images.githubusercontent.com/54696834/159102018-78f27c56-7d4b-4cbc-9d51-7d554d65aba6.png)

```
输入：adjList = [[]]
输出：[[]]
解释：输入包含一个空列表。该图仅仅只有一个值为 1 的节点，它没有任何邻居。
```

#### 示例 3：

```
输入：adjList = []
输出：[]
解释：这个图是空的，它不含任何节点。
```

#### 示例 4：

![clone-graph-3](https://user-images.githubusercontent.com/54696834/159102014-fc9c81da-9aa9-480e-b046-bb41de0004dc.png)

```
输入：adjList = [[2],[1]]
输出：[[2],[1]]
```

## 解题

### 深度优先搜索

```typescript
/**
 * 深度优先搜索
 * @desc 时间复杂度 O(N)  空间复杂度 O(N)
 * @param node
 */
export function cloneGraph(node: Node | null): Node | null {
  const visited = new Map<Node, Node>();
  return _cloneNode(node);

  function _cloneNode(node: Node | null): Node | null {
    if (node === null) return null;

    // 如果该节点已经被访问过了，则直接从哈希表中取出对应的克隆节点返回
    if (visited.has(node)) {
      return visited.get(node)!;
    }

    // 克隆节点，注意到为了深拷贝我们不会克隆它的邻居的列表
    const cloneNode = new Node(node.val);
    // 哈希表存储
    visited.set(node, cloneNode);

    // 遍历该节点的邻居并更新克隆节点的邻居列表
    for (const neighbor of node.neighbors) {
      cloneNode.neighbors.push(<Node>_cloneNode(neighbor));
    }

    return cloneNode;
  }
}
```

### 广度优先遍历

```typescript
/**
 * 广度优先遍历
 * @desc 时间复杂度 O(N)  空间复杂度 O(N)
 * @param node
 */
export function cloneGraph2(node: Node | null): Node | null {
  if (node === null) return null;

  const visited = new Map<Node, Node>();

  const queue: Node[] = [node];
  visited.set(node, new Node(node.val));

  while (queue.length) {
    const node = queue.pop()!;
    for (const neighbor of node.neighbors) {
      if (!visited.has(neighbor)) {
        visited.set(neighbor, new Node(neighbor.val));
        queue.unshift(neighbor);
      }
      visited.get(node)!.neighbors.push(visited.get(neighbor)!);
    }
  }

  return visited.get(node)!;
}
```
