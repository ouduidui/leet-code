/**
 * 栈
 * @desc 时间复杂度 O(N)   空间复杂度 O(N)
 * @param path
 */
export function simplifyPath(path: string): string {
  const stack: string[] = []
  const pathNames = path.split('/')

  for (const name of pathNames) {
    if (name === '..')
      stack.length && stack.pop()
    else if (name.length && name !== '.')
      stack.push(name)
  }

  return `/${stack.join('/')}`
}
