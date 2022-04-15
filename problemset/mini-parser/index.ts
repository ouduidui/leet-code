export class NestedInteger {
  list: NestedInteger[] = []

  constructor(public value?: number) {}

  isInteger(): boolean {
    return this.value !== undefined
  }

  getInteger(): number | null {
    return this.isInteger() ? this.value! : null
  }

  setInteger(value: number) {
    this.value = value
  }

  add(elem: NestedInteger) {
    this.list.push(elem)
  }

  getList(): NestedInteger[] {
    return this.list
  }
}

/**
 * 深度优先搜索
 * @desc 时间复杂度 O(N)  空间复杂度 O(N)
 * @param s
 * @returns
 */
export function deserialize(s: string): NestedInteger {
  let i = 0
  return dfs(s)

  function dfs(s: string) {
    if (s[i] === '[') {
      i++
      const ni = new NestedInteger()
      while (s[i] !== ']') {
        ni.add(dfs(s))
        if (s[i] === ',') i++
      }
      i++
      return ni
    }
    else {
      let negative = false
      if (s[i] === '-') {
        negative = true
        i++
      }
      let num = 0
      while (i < s.length && isDigit(s[i])) {
        num = num * 10 + s[i].charCodeAt(0) - '0'.charCodeAt(0)
        i++
      }
      if (negative)
        num = -num
      return new NestedInteger(num)
    }
  }

  function isDigit(ch: string): boolean {
    return !isNaN(Number(ch))
  }
}

/**
 * 栈
 * @desc 时间复杂度 O(N)  空间复杂度 O(N)
 * @param s
 * @returns
 */
export function deserialize2(s: string): NestedInteger {
  if (s[0] !== '[') return new NestedInteger(Number(s))
  const isDigit = (ch: string): boolean => !isNaN(Number(ch))

  const stack: NestedInteger[] = []
  let num = 0
  let negative = false
  for (let i = 0; i < s.length; i++) {
    const ch = s[i]
    if (ch === '-') {
      negative = true
    }
    else if (isDigit(ch)) {
      num = num * 10 + ch.charCodeAt(0) - '0'.charCodeAt(0)
    }
    else if (ch === '[') {
      stack.push(new NestedInteger())
    }
    else if (ch === ',' || ch === ']') {
      if (isDigit(s[i - 1])) {
        if (negative) num = -num
        stack[stack.length - 1].add(new NestedInteger(num))
      }
      num = 0
      negative = false
      if (ch === ']' && stack.length > 1) {
        const ni = stack.pop()!
        stack[stack.length - 1].add(ni)
      }
    }
  }

  return stack.pop()!
}
