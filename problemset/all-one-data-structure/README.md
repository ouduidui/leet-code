# 全 O(1) 的数据结构

> 难度：困难
>
> https://leetcode-cn.com/problems/all-one-data-structure/

## 题目

请你设计一个用于存储字符串计数的数据结构，并能够返回计数最小和最大的字符串。

实现 `AllOne` 类：

- `AllOne()` 初始化数据结构的对象。
- `inc(String key) `字符串 `key` 的计数增加 `1` 。如果数据结构中尚不存在 `key`
  ，那么插入计数为 1 的 `key` 。
- `dec(String key)` 字符串 `key` 的计数减少 `1` 。如果 `key` 的计数在减少后为
  `0` ，那么需要将这个 `key` `从数据结构中删除。测试用例保证：在减少计数前，key`
  存在于数据结构中。
- `getMaxKey() `返回任意一个计数最大的字符串。如果没有元素存在，返回一个空字符串
  `""`  。
- `getMinKey()` 返回任意一个计数最小的字符串。如果没有元素存在，返回一个空字符串
  `""`  。

#### 示例：

```
输入
["AllOne", "inc", "inc", "getMaxKey", "getMinKey", "inc", "getMaxKey", "getMinKey"]
[[], ["hello"], ["hello"], [], [], ["leet"], [], []]
输出
[null, null, null, "hello", "hello", null, "hello", "leet"]

解释
AllOne allOne = new AllOne();
allOne.inc("hello");
allOne.inc("hello");
allOne.getMaxKey(); // 返回 "hello"
allOne.getMinKey(); // 返回 "hello"
allOne.inc("leet");
allOne.getMaxKey(); // 返回 "hello"
allOne.getMinKey(); // 返回 "leet"
```

## 解题

```typescript
export class AllOne {
  root: Node = new Node()
  nodes: Map<string, Node> = new Map<string, Node>()

  constructor() {
    // 初始化链表哨兵，下面判断节点的next若为root的话，则表示next为空，prev同理
    this.root.prev = this.root
    this.root.next = this.root
  }

  /**
   * 新增key，如存在增加计数
   * @param key
   */
  inc(key: string): void {
    // 如果存在该key值
    if (this.nodes.has(key)) {
      // 获取该key值的双链表
      const cur = this.nodes.get(key)!
      const next = cur.next!
      if (next === this.root || next.count > cur.count + 1) {
        this.nodes.set(key, cur.insert(new Node(key, cur.count + 1)))
      }
      else {
        next.keys.add(key)
        this.nodes.set(key, next)
      }
      cur.keys.delete(key)
      if (cur.keys.size === 0) cur.remove()
    }
    // 如果不存在该key值
    else {
      if (this.root.next === this.root || this.root.next!.count > 1) {
        this.nodes.set(key, this.root.insert(new Node(key, 1)))
      }
      else {
        this.root.next!.keys.add(key)
        this.nodes.set(key, this.root.next!)
      }
    }
  }

  /**
   * 对应字符串 key 计数减一
   * @param key
   */
  dec(key: string): void {
    // 如果没有对应字符串，直接返回
    if (!this.nodes.has(key)) return
    // 获取该key值的双链表
    const cur = this.nodes.get(key)!
    // key仅出现一次，将其移除nodes
    if (cur.count === 1) {
      this.nodes.delete(key)
    }
    // key 出现不止一次
    else {
      const pre = cur.prev!
      if (pre === this.root || pre.count < cur.count - 1) {
        this.nodes.set(key, pre.insert(new Node(key, cur.count - 1)))
      }
      else {
        pre.keys.add(key)
        this.nodes.set(key, pre)
      }
    }

    cur.keys.delete(key)
    if (cur.keys.size === 0) cur.remove()
  }

  /**
   * 返回任意一个计数最小的字符串
   */
  getMaxKey(): string {
    if (!this.root.prev) return ''

    let maxKey = ''
    // 在链表不为空时，返回链表尾节点的 keys 中的任一元素
    if (this.root.prev!.keys.size !== 0)
      maxKey = Array.from(this.root.prev!.keys)[0]
    return maxKey
  }

  /**
   * 返回任意一个计数最大的字符串
   */
  getMinKey(): string {
    if (!this.root.next) return ''

    let minKey = ''
    // 在链表不为空时，返回链表头节点的 keys 中的任一元素
    if (this.root.next!.keys.size !== 0)
      minKey = Array.from(this.root.next!.keys)[0]

    return minKey
  }
}

/**
 * 双向链表
 */
class Node {
  count: number
  keys: Set<string>
  prev: Node | null = null // 上一个节点
  next: Node | null = null // 下一个节点

  constructor(key = '', count = 0) {
    this.count = count
    this.keys = new Set<string>([key])
  }

  /**
   * 在末尾插入新节点
   * @param node
   */
  insert(node: Node) {
    node.prev = this
    node.next = this.next
    node.prev.next = node
    node.next && (node.next.prev = node)
    return node
  }

  /**
   * 移除当前节点
   */
  remove() {
    this.prev && (this.prev.next = this.next)
    this.next && (this.next.prev = this.prev)
  }
}
```
