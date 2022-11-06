/**
 * 直接遍历
 * @desc 时间复杂度 O(N) 空间复杂度 O(1)
 * @param command
 * @returns
 */
export function interpret(command: string): string {
  let res = ''
  for (let i = 0; i < command.length; i++) {
    if (command[i] === 'G') {
      res += 'G'
    }
    else if (command[i] === '(') {
      if (command[i + 1] === ')')
        res += 'o'

      else
        res += 'al'
    }
  }
  return res
}
