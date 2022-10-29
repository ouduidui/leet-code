/**
 * 模拟
 * @desc 时间复杂度 O(n) 空间复杂度 O(1)
 * @param items
 * @param ruleKey
 * @param ruleValue
 * @returns
 */
export function countMatches(items: string[][], ruleKey: string, ruleValue: string): number {
  const rulekeyMap = new Map([['type', 0], ['color', 1], ['name', 2]])
  const ruleKeyIndex = rulekeyMap.get(ruleKey)!
  return items.filter(item => item[ruleKeyIndex] === ruleValue).length
}
