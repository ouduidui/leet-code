/**
 * 排序
 * @desc 时间复杂度 O(nklogk) n是strs中的字符串的数量，k是strs中的字符串的的最大长度
 * @desc 空间复杂度 O(nk)
 * @param strs
 */
export function groupAnagrams(strs: string[]): string[][] {
  if (strs.length === 1) return [strs]

  const map = new Map<string, string[]>()

  for (const str of strs) {
    const arr = [...str]
    arr.sort()
    const key = arr.join('')
    const list: string[] = map.has(key) ? (map.get(key) as string[]) : []
    list.push(str)
    map.set(key, list)
  }

  return Array.from(map.values())
}
