/**
 * 哈希表
 * @desc 时间复杂度 O(N)  空间复杂度 O(N)
 * @param words
 * @returns
 */
export function uniqueMorseRepresentations(words: string[]): number {
  const match = ['.-', '-...', '-.-.', '-..', '.', '..-.', '--.', '....', '..', '.---', '-.-', '.-..', '--', '-.', '---', '.--.', '--.-', '.-.', '...', '-', '..-', '...-', '.--', '-..-', '-.--', '--..']

  const getMorse = (ch: string) => match[ch.charCodeAt(0) - 'a'.charCodeAt(0)]

  const set = new Set<string>()

  for (const word of words) {
    let morse = ''
    for (let i = 0; i < word.length; i++)
      morse += getMorse(word[i])

    set.add(morse)
  }

  return set.size
}
