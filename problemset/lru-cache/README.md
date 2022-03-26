# LRU 缓存

> 难度：中等
>
> https://leetcode-cn.com/problems/lru-cache/

## 题目

请你设计并实现一个满足 **`LRU` (最近最少使用) 缓存** 约束的数据结构。

实现 `LRUCache` 类：

- `LRUCache(int capacity)` 以 **正整数** 作为容量 `capacity` 初始化 LRU 缓存
- `int get(int key)` 如果关键字 `key` 存在于缓存中，则返回关键字的值，否则返回
  `-1` 。
- `void put(int key, int value)` 如果关键字 `key` 已经存在，则变更其数据值
  `value` ；如果不存在，则向缓存中插入该组 `key-value` 。如果插入操作导致关键字
  数量超过 `capacity` ，则应该 **逐出** 最久未使用的关键字。

函数 `get` 和 `put` 必须以 `O(1)` 的平均时间复杂度运行。

### 示例：

```
输入
["LRUCache", "put", "put", "get", "put", "get", "put", "get", "get", "get"]
[[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]
输出
[null, null, null, 1, null, -1, null, -1, 3, 4]

解释
LRUCache lRUCache = new LRUCache(2);
lRUCache.put(1, 1); // 缓存是 {1=1}
lRUCache.put(2, 2); // 缓存是 {1=1, 2=2}
lRUCache.get(1);    // 返回 1
lRUCache.put(3, 3); // 该操作会使得关键字 2 作废，缓存是 {1=1, 3=3}
lRUCache.get(2);    // 返回 -1 (未找到)
lRUCache.put(4, 4); // 该操作会使得关键字 1 作废，缓存是 {4=4, 3=3}
lRUCache.get(1);    // 返回 -1 (未找到)
lRUCache.get(3);    // 返回 3
lRUCache.get(4);    // 返回 4
```

## 解题

```typescript
export class LRUCache {
  private capacity: number; // 容量
  private size = 0; // 当前存储数量
  private cache = new Map<number, DoublyLinkedNode>(); // 哈希表
  private head: DoublyLinkedNode = new DoublyLinkedNode(); // 双向链表的头部
  private tail: DoublyLinkedNode = new DoublyLinkedNode(); // 双向链表的尾部

  /**
   * 初始化
   * @param capacity
   */
  constructor(capacity: number) {
    this.capacity = capacity; // 更新容量
    // 初始化双向链表，头尾互连
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  /**
   * 取值
   * @param key
   */
  get(key: number): number {
    // 如果哈希表没有找到该key，则返回 -1
    if (!this.cache.has(key)) return -1;

    const node = this.cache.get(key)!;
    // 将其移到头部
    this.moveToHead(node);
    return node.val;
  }

  /**
   * 插值
   * @param key
   * @param value
   */
  put(key: number, value: number): void {
    if (this.cache.has(key)) {
      // 如果找到对应key，直接将其更新val并移动至头部
      const node = this.cache.get(key)!;
      node.val = value;
      this.moveToHead(node);
    } else {
      // 如果之前没存过，则新建一个节点
      const node = new DoublyLinkedNode(key, value);
      this.cache.set(key, node);
      this.addToHead(node);
      this.size++;

      if (this.size > this.capacity) {
        // 如果超出容量，直接从双向链表删除最后的节点，并从哈希表删除
        const removeNode = this.removeTail();
        this.cache.delete(removeNode.key);
        this.size--;
      }
    }
  }

  /**
   * 将 node 新增到双向链表头部
   * @param node
   * @private
   */
  private addToHead(node: DoublyLinkedNode): void {
    // 将node插入head之后
    node.prev = this.head;
    node.next = this.head.next;
    node.next && (node.next.prev = node);
    this.head.next = node;
  }

  /**
   * 从双向链表中删除node节点
   * @param node
   * @private
   */
  private removeNode(node: DoublyLinkedNode): void {
    // 更新上一个节点的 next
    node.prev && (node.prev.next = node.next);
    // 更新下一个节点的 prev
    node.next && (node.next.prev = node.prev);
  }

  /**
   * 将 node 移动到双向链表头部
   * @param node
   * @private
   */
  private moveToHead(node: DoublyLinkedNode): void {
    // 先将该节点从双向链表中删除
    this.removeNode(node);
    // 然后重新插入双向链表头部
    this.addToHead(node);
  }

  /**
   * 删除双向链表最后的节点
   * @private
   */
  private removeTail(): DoublyLinkedNode {
    // 获取双向链表最后的节点
    const node = this.tail.prev!;
    // 将其删除
    this.removeNode(node);
    // 返回删除的节点
    return node;
  }
}

// 双向链表
class DoublyLinkedNode {
  key: number; // 键
  val: number; // 值
  prev: DoublyLinkedNode | null = null; // 上个节点
  next: DoublyLinkedNode | null = null; // 下个节点

  constructor(key?: number, val?: number) {
    this.key = key === undefined ? 0 : key;
    this.val = val === undefined ? 0 : val;
  }
}
```
