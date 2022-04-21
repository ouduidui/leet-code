/**
 * 模拟
 * 时间复杂度 O(N)  空间复杂度 O(N)
 * @param sentence
 * @returns
 */
export function toGoatLatin(sentence: string): string {
  const arr = sentence.split(' ')
  const vowel = ['a', 'e', 'i', 'o', 'u']
  let suffix = 'maa'
  for (let i = 0; i < arr.length; i++) {
    const word = arr[i]
    arr[i] = vowel.includes(word[0].toLowerCase())
      ? word + suffix
      : word.substring(1) + word.substring(0, 1) + suffix
    suffix += 'a'
  }

  return arr.join(' ')
}
