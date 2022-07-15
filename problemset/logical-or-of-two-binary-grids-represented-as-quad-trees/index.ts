import { Node } from '~/utils/quadTree'

/**
 * 分治
 * @desc 时间复杂度 O(N²)  空间复杂度 O(logN)
 * @param quadTree1
 * @param quadTree2
 * @returns
 */
export function intersect(quadTree1: Node | null, quadTree2: Node | null): Node | null {
  if (quadTree1?.isLeaf) {
    if (quadTree1?.val)
      return new Node(true, true)

    return new Node(
      !!quadTree2?.val,
      !!quadTree2?.isLeaf,
      quadTree2?.topLeft,
      quadTree2?.topRight,
      quadTree2?.bottomLeft,
      quadTree2?.bottomRight,
    )
  }

  if (quadTree2?.isLeaf)
    return intersect(quadTree2, quadTree1)

  const o1 = intersect(quadTree1?.topLeft || null, quadTree2?.topLeft || null)
  const o2 = intersect(quadTree1?.topRight || null, quadTree2?.topRight || null)
  const o3 = intersect(quadTree1?.bottomLeft || null, quadTree2?.bottomLeft || null)
  const o4 = intersect(quadTree1?.bottomRight || null, quadTree2?.bottomRight || null)

  if (
    o1?.isLeaf
    && o2?.isLeaf
    && o3?.isLeaf
    && o4?.isLeaf
    && o1.val === o2.val
    && o1.val === o3.val
    && o1.val === o4.val
  )
    return new Node(o1.val, true)

  return new Node(false, false, o1, o2, o3, o4)
}
