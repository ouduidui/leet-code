export class Node {
  val: number
  children: Node[] = []
  constructor(val?: number) {
    this.val = val === undefined ? 0 : val
  }
}

export function createNAryTree(arr: (number | null)[]): Node | null {
  if (arr.length === 0) return null

  const root = new Node(arr.shift()!)
  const queue: Node[] = [root]
  let curNode: Node | null = null

  while (arr.length) {
    const item = arr.shift()!
    if (item !== null) {
      const node = new Node(item)
      curNode!.children.push(node)
      queue.unshift(node)
    }
    else {
      curNode = queue.pop()!
    }
  }

  return root
}
