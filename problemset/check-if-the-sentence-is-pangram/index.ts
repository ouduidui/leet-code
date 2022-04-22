/**
 * 哈希表
 * @desc 时间复杂度 O(N)  空间复杂度 O(N)
 * @param sentence
 * @returns
 */
export function checkIfPangram(sentence: string): boolean {
  return new Set<string>(sentence.split('')).size === 26
}
