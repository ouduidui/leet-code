const MAX_RANGE = 1e9 + 7

export class RangeModule {
  st: SegmentTree = new SegmentTree()

  addRange(left: number, right: number): void {
    this.st.update(this.st.root, 1, MAX_RANGE, left, right - 1, true)
  }

  queryRange(left: number, right: number): boolean {
    return this.st.query(this.st.root, 1, MAX_RANGE, left, right - 1)
  }

  removeRange(left: number, right: number): void {
    this.st.update(this.st.root, 1, MAX_RANGE, left, right - 1, false)
  }
}

class SegNode {
  ls: SegNode | null = null
  rs: SegNode | null = null
  val = false
  add = false
}

class SegmentTree {
  root: SegNode = new SegNode()

  update(node: SegNode, lc: number, rc: number, l: number, r: number, v: boolean): void {
    if (l <= lc && rc <= r) {
      node.val = v
      node.add = true
      return
    }
    this.pushdown(node)
    const mid = lc + rc >> 1
    if (l <= mid)
      this.update(node.ls!, lc, mid, l, r, v)

    if (r > mid)
      this.update(node.rs!, mid + 1, rc, l, r, v)

    this.pushup(node)
  }

  query(node: SegNode, lc: number, rc: number, l: number, r: number): boolean {
    if (l <= lc && rc <= r)
      return node.val

    this.pushdown(node)
    let ans = true
    const mid = lc + rc >> 1
    if (l <= mid)
      ans = ans && this.query(node.ls!, lc, mid, l, r)

    if (r > mid)
      ans = ans && this.query(node.rs!, mid + 1, rc, l, r)

    return ans
  }

  pushup(node: SegNode): void {
    node.val = node.ls!.val && node.rs!.val
  }

  pushdown(node: SegNode): void {
    if (node.ls == null)
      node.ls = new SegNode()

    if (node.rs == null)
      node.rs = new SegNode()

    if (!node.add)
      return

    node.ls.add = node.rs.add = true
    node.ls.val = node.rs.val = node.val
    node.add = false
  }
}
