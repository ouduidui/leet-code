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
