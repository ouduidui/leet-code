/**
 * 模拟
 * @desc 时间复杂度 O(M)   空间复杂度 O(M)
 * @param words {string[]}
 * @param maxWidth {number}
 * @return {string[]}
 */
export function fullJustify(words: string[], maxWidth: number): string[] {
  const ans: string[] = []

  // 右指针
  let right = 0
  const n = words.length

  /**
   * 生成n个空白格字符串
   * @param n {number}
   * @return {string}
   */
  const blank = (n: number): string => new Array(n).fill(' ').join('')

  // eslint-disable-next-line no-constant-condition
  while (true) {
    // 左指针
    const left = right
    // 记录文本累计长度
    let sumLen = 0

    // 当右指针还没到头，
    // 且该行文本长度 sumLen 加上下一个单词的长度 words[right].length 再加上最小空格数 right-left
    // 小于等于最大长度 maxWidth 时
    // 移动右指标，并累加 sumLen
    while (
      right < n
      && sumLen + words[right].length + right - left <= maxWidth
    ) {
      sumLen += words[right].length
      right++
    }

    // 如果右指针到顶了，退出循环返回结果
    if (right === n) {
      // 获取剩余单词，并用空格隔开
      const s = words.slice(left).join(' ')
      // 用空白格填充剩余部分
      ans.push(s + blank(maxWidth - s.length))
      break
    }

    const numWords = right - left // 该行单词数量
    const numSpaces = maxWidth - sumLen // 该行空格数量

    // 如果该行只有一个单词 且不是最后一行
    if (numWords === 1) {
      // 用空格将剩余部分补齐
      ans.push(words[left] + blank(numSpaces))
      continue
    }

    // 平均空格数（向下取整）
    const avgSpace = Math.floor(numSpaces / (numWords - 1))
    // 多出的空格数
    const extraSpace = numSpaces % (numWords - 1)
    // 将多余的空格数填充到第一个单词后面
    const s1 = words
      .slice(left, left + extraSpace + 1)
      .join(blank(avgSpace + 1))
    const s2 = words.slice(left + extraSpace + 1, right).join(blank(avgSpace))
    ans.push(s1 + blank(avgSpace) + s2)
  }

  return ans
}
