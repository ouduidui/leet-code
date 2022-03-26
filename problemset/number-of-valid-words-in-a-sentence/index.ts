/**
 * 遍历
 * @desc 时间复杂度 O(N)  空间复杂度 O(1)
 * @param sentence {string}
 * @return {number}
 */
export function countValidWords(sentence: string): number {
  if (sentence === '') return 0

  const len = sentence.length
  let i = 0
  let result = 0

  // 遍历字符串
  while (i < len) {
    // 将 i 定位到字符的第一个单词
    while (i < len && sentence[i] === ' ')
      i++

    if (i >= len) break

    let hasHyphens = false // 判断是否出现过连字符
    let isPass = true // 判断是否通过
    // 遍历一个单词
    while (sentence[i] !== ' ' && i < len) {
      // 如果isPass为false的话，无需执行校验，直接 i++，定到位下一个空格或句末
      if (isPass) {
        const s = sentence[i]
        // 校验数值
        if (!isNaN(Number(s))) {
          isPass = false
        }
        // 校验连字符
        else if (s === '-') {
          // 如果已经出现过连字符，或者连字符前后不是字母，则不通过
          if (
            hasHyphens
            || !isLetter(sentence[i - 1])
            || !isLetter(sentence[i + 1])
          )
            isPass = false

          hasHyphens = true
        }
        // 校验符号
        else if (s === '!' || s === '.' || s === ',') {
          // 如果符号不是最后一个则不通过（这个条件同时可以限制符号只出现一次）
          if (sentence[i + 1] !== ' ' && i + 1 !== len)
            isPass = false
        }
      }

      i++
    }

    // 如果通过校验则更新结果
    isPass && result++
  }

  return result

  /**
   * 校验是否为单词
   * @param str
   */
  function isLetter(str: string): boolean {
    return str >= 'a' && str <= 'z'
  }
}
