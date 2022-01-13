// Definition for singly-linked list.
export class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export function createListNode(arr: Array<number>): ListNode | null {
  return arr.reduceRight((prev: ListNode | null, cur: number) => {
    if (prev) {
      return new ListNode(cur, prev);
    } else {
      return new ListNode(cur, null);
    }
  }, null);
}
