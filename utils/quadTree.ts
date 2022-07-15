export class Node {
  constructor(
    public val: boolean,
    public isLeaf = false,
    public topLeft: Node | null = null,
    public topRight: Node | null = null,
    public bottomLeft: Node | null = null,
    public bottomRight: Node | null = null,
  ) { }
}

export type QuadTreeArrType = ([0 | 1, 0 | 1] | null)[]

export const createQuadTree = (arr: QuadTreeArrType): Node | null => {
  if (arr.length === 0) return null

  const rootVal = arr.shift()!
  const root = new Node(rootVal[1] === 1, rootVal[0] === 1)
  const queue: Node[] = [root]

  const childName: ('topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight')[]
    = ['topLeft', 'topRight', 'bottomLeft', 'bottomRight']
  while (queue.length && arr.length) {
    const node = queue.pop()!
    for (let i = 0; i < 4; i++) {
      const val = arr.shift()!
      if (val === null) continue
      const child = new Node(val[1] === 1, val[0] === 1)
      node[childName[i]] = child
      queue.unshift(child)
    }
  }

  return root
}
