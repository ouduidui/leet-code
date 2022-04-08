/**
 * 反向计算
 * @desc 时间复杂度 O(log max(tx, ty))  空间复杂度 O(1)
 * @param sx
 * @param sy
 * @param tx
 * @param ty
 * @returns
 */
export function reachingPoints(
  sx: number,
  sy: number,
  tx: number,
  ty: number,
): boolean {
  while (tx > sx && ty > sy && tx !== ty) {
    if (tx > ty) // 上一状态为(tx - ty, ty)
      tx %= ty
    else // 上一状态为(tx, ty - tx)
      ty %= tx
  }

  if (tx === sx && ty === sy) return true
  if (tx === sx) return ty > sy && (ty - sy) % tx === 0
  if (ty === sy) return tx > sx && (tx - sx) % ty === 0
  return false
}
