export class Node {
  val: number
  next: Node | null
  random: Node | null

  constructor(val?: number, next?: Node, random?: Node) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
    this.random = random === undefined ? null : random
  }
}

export function createListNodeWithRandomPointer(
  arr: [number, number | null][],
): Node | null {
  if (arr.length === 0) return null

  const head = new Node(arr[0][0])
  let cur: Node = head
  const len = arr.length
  const nodeMap = new Map<number, Node>()
  nodeMap.set(0, cur)

  let i
  for (i = 1; i < len; i++) {
    const node = new Node(arr[i][0])
    nodeMap.set(i, node)
    cur.next = node
    cur = node
  }

  cur = head
  for (i = 0; i < len; i++) {
    const randomIndex = arr[i][1]
    if (randomIndex !== null)
      cur.random = nodeMap.get(randomIndex)!

    cur = cur.next!
  }

  return head
}
