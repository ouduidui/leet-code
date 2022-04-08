// Definition for singly-linked list.
export class ListNode {
  val: number
  next: ListNode | null

  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

export function createListNode(arr: Array<number>): ListNode | null {
  return arr.reduceRight((prev: ListNode | null, cur: number) => {
    if (prev)
      return new ListNode(cur, prev)

    else
      return new ListNode(cur, null)
  }, null)
}

export function createCycleListNode(
  arr: Array<number>,
  pos: number,
): ListNode | null {
  const node = createListNode(arr)

  if (node && pos !== -1) {
    let prevNode: ListNode | null = null
    let cur: ListNode | null = node
    let i = 0
    while (cur?.next) {
      if (i === pos)
        prevNode = cur

      cur = cur.next
      i++
    }

    cur.next = prevNode
  }

  return node
}

export function createIntersectionListNode(
  intersectVal: number,
  listA: number[],
  listB: number[],
  skipA: number,
  skipB: number,
): [ListNode | null, ListNode | null, ListNode | null] {
  if (
    !listA.length
    || !listB.length
    || !listA.includes(intersectVal)
    || !listB.includes(intersectVal)
    || skipA >= listA.length
    || skipB >= listB.length
  )
    return [createListNode(listA), createListNode(listB), null]

  const intersectionNode = new ListNode(listA[skipA])
  let cur = intersectionNode

  let i = skipA + 1
  while (i < listA.length) {
    cur.next = new ListNode(listA[i])
    cur = cur.next
    i++
  }

  const listNodeA = new ListNode(listA[0])
  cur = listNodeA
  i = 1
  while (i < skipA) {
    cur.next = new ListNode(listA[i])
    cur = cur.next
    i++
  }
  cur.next = intersectionNode

  const listNodeB = new ListNode(listB[0])
  cur = listNodeB
  i = 1
  while (i < skipB) {
    cur.next = new ListNode(listB[i])
    cur = cur.next
    i++
  }
  cur.next = intersectionNode

  return [listNodeA, listNodeB, intersectionNode]
}
