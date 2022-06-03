/**
 * 计数
 * @desc 时间复杂度 O(N)  空间复杂度 O(1)
 * @param preorder
 * @returns
 */
export function isValidSerialization(preorder: string): boolean {
  const len = preorder.length
  let i = 0
  let slots = 1

  while (i < len) {
    if (slots === 0) return false
    switch (preorder[i]) {
      case ',':
        i++
        break
      case '#':
        slots--
        i++
        break
      default:
        while (i < len && preorder[i] !== ',') i++
        // slots = slots - 1 + 2
        slots++
    }
  }
  return slots === 0
}
