/**
 * 暴力解法
 * @desc 时间复杂度 O(3^m*4^n)   空间复杂度 O(m+n)
 * @param digits
 * @return {string[]}
 */
export function letterCombinations(digits: string): string[] {
  if (digits === '') return []

  const keyMap: Map<string, string[]> = new Map([
    ['2', ['a', 'b', 'c']],
    ['3', ['d', 'e', 'f']],
    ['4', ['g', 'h', 'i']],
    ['5', ['j', 'k', 'l']],
    ['6', ['m', 'n', 'o']],
    ['7', ['p', 'q', 'r', 's']],
    ['8', ['t', 'u', 'v']],
    ['9', ['w', 'x', 'y', 'z']],
  ])

  let ans: string[] = []

  for (let i = 0; i < digits.length; i++) {
    const map: string[] = keyMap.get(digits[i]) || []
    if (!ans.length) {
      ans.push(...map)
    }
    else {
      const newAns: string[] = []
      ans.forEach((str) => {
        map.forEach((letter) => {
          newAns.push(str + letter)
        })
      })
      ans = newAns
    }
  }

  return ans
}

/**
 * 回溯
 * @desc 时间复杂度 O(3^m*4^n)   空间复杂度 O(m+n)
 * @param digits
 * @return {string[]}
 */
export function letterCombinations2(digits: string): string[] {
  if (!digits) return []

  const keyMap: Map<string, string> = new Map([
    ['2', 'abc'],
    ['3', 'def'],
    ['4', 'ghi'],
    ['5', 'jkl'],
    ['6', 'mno'],
    ['7', 'pqrs'],
    ['8', 'tuv'],
    ['9', 'wxyz'],
  ])

  const ans: string[] = []
  backtrack('', digits)

  return ans

  function backtrack(str: string, digits: string) {
    if (!digits.length) {
      ans.push(str) // 如果字符串为空了，将拼接好的字符加入数组
    }
    else {
      // 拿到字符串第一个字符其对应的数字
      const letters: string = keyMap.get(digits[0]) || ''
      // 对可能性进行组合
      for (let i = 0; i < letters.length; i++) {
        str += letters[i]
        // 递归组好的 str和下一段字符串
        backtrack(str, digits.slice(1))
        // 回溯
        str = str.slice(0, -1)
      }
    }
  }
}
