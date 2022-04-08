// 完美二叉树
export class Node {
  val: number
  left: Node | null
  right: Node | null
  next: Node | null

  constructor(val?: number, left?: Node, right?: Node, next?: Node) {
    this.val = val === undefined ? 0 : val
    this.left = left === undefined ? null : left
    this.right = right === undefined ? null : right
    this.next = next === undefined ? null : next
  }
}

export function createBinaryTree(array: (number | null)[]): Node | null {
  if (!array.length || array[0] === null) return null
  const rootTree = new Node(array.shift()!)
  const queue: Node[] = [rootTree]

  while (array.length) {
    const tree = queue.pop()!
    const num1 = array.shift()
    if (num1) {
      tree.left = new Node(num1)
      queue.unshift(tree.left)
    }
    const num2 = array.shift()
    if (num2) {
      tree.right = new Node(num2)
      queue.unshift(tree.right)
    }
  }

  return rootTree
}

export function createPerfectBinaryTree(
  array: (number | '#' | null)[],
): Node | null {
  if (!array.length || array[0] === null) return null
  const rootTree = new Node(array.shift() as number)
  const queue: Node[] = [rootTree]
  const nextQueue: Node[] = [rootTree]

  while (array.length) {
    const item = array.shift()

    if (item === '#') {
      while (nextQueue.length) {
        const node1 = nextQueue.pop()!
        node1.next = nextQueue.length ? nextQueue[nextQueue.length - 1] : null
      }
    }
    else {
      const node = queue.pop()!
      if (item) {
        node.left = new Node(item)
        queue.unshift(node.left)
        nextQueue.unshift(node.left)
      }

      const item2 = array.shift() as number
      if (item2) {
        node.right = new Node(item2)
        queue.unshift(node.right)
        nextQueue.unshift(node.right)
      }
    }
  }

  return rootTree
}
