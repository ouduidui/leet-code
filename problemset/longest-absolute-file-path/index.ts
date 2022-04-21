/**
 * 栈
 * @desc 时间复杂度 O(N)  空间复杂度 O(N)
 * @param input
 * @returns
 */
export function lengthLongestPath(input: string): number {
  const len = input.length
  let pos = 0
  let ans = 0
  const stack: number[] = []

  while (pos < len) {
    // 检测当前文件的深度
    let depth = 1
    while (pos < len && input[pos] === '\t') {
      pos++
      depth++
    }

    // 统计当前文件名称的长度
    let isFile = false
    let l = 0
    while (pos < len && input[pos] !== '\n') {
      if (input[pos] === '.')
        isFile = true

      l++
      pos++
    }

    // 跳过当前的换行符
    pos++

    while (stack.length >= depth)
      stack.pop()

    if (stack.length)
      l += stack[stack.length - 1] + 1

    if (isFile)
      ans = Math.max(ans, l)
    else
      stack.push(l)
  }
  return ans
}
