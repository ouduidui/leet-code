/**
 * 栈 + 遍历
 * @desc 时间复杂度 O(N)  空间复杂度 O(N)
 * @param code
 * @returns
 */
export function isValid(code: string): boolean {
  const len = code.length
  const tagStack: string[] = []

  let i = 0
  while (i < len) {
    if (code[i] === '<') {
      if (i === len - 1)
        return false

      // 结束标签
      if (code[i + 1] === '/') {
        // 从i开始找，找到第一个 ‘>’ 的下标
        const j = code.indexOf('>', i)
        if (j < 0)
          return false

        const tagName = code.slice(i + 2, j)
        if (tagStack.length === 0 || tagStack[tagStack.length - 1] !== tagName)
          return false

        tagStack.pop()
        i = j + 1
        if (tagStack.length === 0 && i !== len)
          return false
      }
      // CDATA
      else if (code[i + 1] === '!') {
        if (tagStack.length === 0)
          return false

        if (i + 9 > len)
          return false

        const cdata = code.slice(i + 2, i + 9)
        if (cdata !== '[CDATA[')
          return false

        const j = code.indexOf(']]>', i)
        if (j < 0)
          return false

        i = j + 1
      }
      // 开始标签
      else {
        const j = code.indexOf('>', i)
        if (j < 0)
          return false

        const tagName = code.slice(i + 1, j)
        if (tagName.length < 1 || tagName.length > 9)
          return false

        for (const ch of tagName) {
          if (!(ch >= 'A' && ch <= 'Z'))
            return false
        }

        tagStack.push(tagName)
        i = j + 1
      }
    }
    else {
      if (tagStack.length === 0)
        return false

      i++
    }
  }
  return tagStack.length === 0
}
