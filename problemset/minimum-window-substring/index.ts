/**
 * 滑动串口
 * @desc 时间复杂度 O(M)   空间复杂度 O(M+N)
 * @param s {string}
 * @param t {string}
 */
export function minWindow(s: string, t: string): string {
  if (t.length > s.length) return ''

  // 存储 t 字符串，去重并记录每个字符串出现次数
  const need = new Map<string, number>()
  for (const i of t) {
    const count = need.get(i) || 0
    need.set(i, count + 1)
  }
  // 去重后字符串的长度
  const needLen = need.size

  // 记录窗口出现的符合 t 的字符串（去重）即每个字符出现次数
  const window = new Map<string, number>()

  // 滑动串口的左右指针
  let leftPoint = 0
  let rightPoint = 0
  // 记录最小覆盖子串的左右位置
  // end初始化为s.length + 1，如果最后end还是等于s.length + 1则代表没有符合的子串
  let start = 0
  let end = s.length + 1
  // 记录窗口已经符合条件的字符数量
  let valid = 0

  while (rightPoint < s.length) {
    const rightWord = s[rightPoint]
    if (need.has(rightWord)) {
      // 如果右指针所处的字符是要找的字符的话
      // 在window更新该字符的数量
      const count = window.get(rightWord) || 0
      window.set(rightWord, count + 1)
      // 如果数量刚好对上了，更新valid
      if (need.get(rightWord) === count + 1)
        valid++
    }

    // 移动右指针
    rightPoint++

    // 如果valid === needLen，证明窗口的子串已经全覆盖
    while (valid === needLen) {
      // 如果子串比上一个保存的子串短的话，更新子串
      if (rightPoint - leftPoint < end) {
        start = leftPoint
        end = rightPoint - leftPoint
      }

      // 接下来要移动左指针，因此要判断移出的字符串是否是 t 的字符串
      const leftWord = s[leftPoint]
      // 如果是符合条件的字符串，则更新window和valid值
      if (need.has(leftWord)) {
        const count = window.get(leftWord)!
        if (count === need.get(leftWord))
          valid--

        window.set(leftWord, count - 1)
      }
      // 移动左指针
      leftPoint++
    }
  }

  // 最后返回符合条件的子串
  return end === s.length + 1 ? '' : s.substr(start, end)
}
