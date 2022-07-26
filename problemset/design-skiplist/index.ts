const MAX_LEVEL = 32
const P_FACTOR = 0.25

const randomLevel = () => {
  let level = 1
  // 随机生成
  while (Math.random() < P_FACTOR && level < MAX_LEVEL)
    level++

  return level
}

/**
 * 直接构造
 */
export class Skiplist {
  private head = new SkiplistNode(-1, MAX_LEVEL)
  private level = 0

  search(target: number): boolean {
    let curr: SkiplistNode | null = this.head
    for (let i = this.level - 1; i >= 0; i--) {
      // 找到第 i 层小于且最接近 target 的元素
      while (curr?.forward[i] && curr.forward[i]!.val < target)
        curr = curr.forward[i]
    }

    curr = curr?.forward[0] || null
    // 检测当前元素的值是否等于target
    return curr?.val === target
  }

  add(num: number): void {
    const update = new Array(MAX_LEVEL).fill(this.head)
    let curr: SkiplistNode | null = this.head
    for (let i = this.level - 1; i >= 0; i--) {
      // 找到第 i 层小于且最接近 num 的元素
      while (curr?.forward[i] && curr?.forward[i]!.val < num)
        curr = curr.forward[i]
      update[i] = curr
    }
    const level = randomLevel()
    this.level = Math.max(this.level, level)
    const newNode = new SkiplistNode(num, level)
    for (let i = 0; i < level; i++) {
      // 对第 i 层的状态进行更新，将当前元素的 forward 指向新的节点
      newNode.forward[i] = update[i].forward[i]
      update[i].forward[i] = newNode
    }
  }

  erase(num: number): boolean {
    const update = new Array<SkiplistNode | null>(MAX_LEVEL).fill(null)
    let curr: SkiplistNode | null = this.head
    for (let i = this.level - 1; i >= 0; i--) {
      // 找到第 i 层小于且最接近 num 的元素
      while (curr?.forward[i] && curr.forward[i]!.val < num)
        curr = curr.forward[i]
      update[i] = curr
    }

    curr = curr!.forward[0]
    // 如果值不存在则返回false
    if (!curr || curr.val !== num) return false

    for (let i = 0; i < this.level; i++) {
      if (update[i]?.forward[i] !== curr) break
      // 对第 i 层的状态进行更新，将 forward 指向被删除节点的下一跳
      update[i]!.forward[i] = curr.forward[i]
    }

    // 更新当前的level
    while (this.level > 1 && !this.head.forward[this.level - 1])
      this.level--

    return true
  }
}

class SkiplistNode {
  forward: (SkiplistNode | null)[]
  constructor(public val: number, maxLevel: number) {
    this.forward = new Array(maxLevel).fill(null)
  }
}
