/**
 * 计算每个单词的前缀后缀组合可能性
 */
export class WordFilter {
  dictionary: Map<string, number>

  constructor(words: string[]) {
    this.dictionary = new Map<string, number>()
    for (let i = 0; i < words.length; i++) {
      const word = words[i]
      const len = word.length
      for (let prefixLength = 1; prefixLength <= len; prefixLength++) {
        for (let suffixLength = 1; suffixLength <= len; suffixLength++) {
          this.dictionary.set(
            `${word.substring(0, prefixLength)}#${word.substring(len - suffixLength)}`,
            i,
          )
        }
      }
    }
  }

  f(pref: string, suff: string): number {
    return this.dictionary.has(`${pref}#${suff}`)
      ? this.dictionary.get(`${pref}#${suff}`)!
      : -1
  }
}
