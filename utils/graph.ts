// 图
export class Node {
  val: number
  neighbors: Node[]
  constructor(val?: number, neighbors?: Node[]) {
    this.val = val === undefined ? 0 : val
    this.neighbors = neighbors === undefined ? [] : neighbors
  }
}

// 创建图
export function createGraph(arr: number[][]): Node | null {
  if (arr.length === 0) return null

  const nodeMap = new Map<number, Node>()

  let i
  for (i = 1; i <= arr.length; i++)
    nodeMap.set(i, new Node(i))

  for (i = 1; i <= arr.length; i++) {
    const node = nodeMap.get(i)!
    const neighbors: Node[] = []

    for (const n of arr[i - 1])
      neighbors.push(nodeMap.get(n)!)

    if (neighbors.length)
      node.neighbors = neighbors
  }

  return nodeMap.get(1)!
}
