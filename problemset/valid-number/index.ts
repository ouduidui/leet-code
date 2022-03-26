/**
 * 正则
 * @desc 时间复杂度 O(N)   空间复杂度 O(1)
 * @param s {string}
 * @return {boolean}
 */
export function isNumber(s: string): boolean {
  const regExp = /^[+-]?((\d+(\.\d*)?)|\.\d+)([eE][-+]?\d+)?$/
  return regExp.test(s)
}

/**
 * 确定有限状态自动机
 * @desc 时间复杂度 O(N)   空间复杂度 O(1)
 * @param s {string}
 * @return {boolean}
 */
export function isNumber2(s: string): boolean {
  enum State {
    STATE_INITIAL = 'STATE_INITIAL', // 初始状态
    STATE_INT_SIGN = 'STATE_INT_SIGN', // 符号位
    STATE_INTEGER = 'STATE_INTEGER', // 整数部分
    STATE_POINT = 'STATE_POINT', // 左侧有整数的小数点
    STATE_POINT_WITHOUT_INT = 'STATE_POINT_WITHOUT_INT', // 左侧无整数的小数点
    STATE_FRACTION = 'STATE_FRACTION', // 小数部分
    STATE_EXP = 'STATE_EXP', // 字符 e
    STATE_EXP_SIGN = 'STATE_EXP_SIGN', // 指数部分的符号位
    STATE_EXP_NUMBER = 'STATE_EXP_NUMBER', // 指数部分的整数部分
  }

  enum CharType {
    CHAR_NUMBER = 'CHAR_NUMBER', // 数值
    CHAR_EXP = 'CHAR_EXP', // e 指数
    CHAR_POINT = 'CHAR_POINT', // 小数点
    CHAR_SIGN = 'CHAR_SIGN', // 正负符号
    CHAR_ILLEGAL = 'CHAR_ILLEGAL', // 特殊状态
  }

  // 判断单个字符串类型
  const toCharType = (ch: string) => {
    if (!isNaN(Number(ch)))
      return CharType.CHAR_NUMBER
    else if (ch.toLowerCase() === 'e')
      return CharType.CHAR_EXP
    else if (ch === '.')
      return CharType.CHAR_POINT
    else if (ch === '+' || ch === '-')
      return CharType.CHAR_SIGN
    else
      return CharType.CHAR_ILLEGAL
  }

  const initialMap = new Map<CharType, State>([
    [CharType.CHAR_NUMBER, State.STATE_INTEGER],
    [CharType.CHAR_POINT, State.STATE_POINT_WITHOUT_INT],
    [CharType.CHAR_SIGN, State.STATE_INT_SIGN],
  ])
  const intSignMap = new Map<CharType, State>([
    [CharType.CHAR_NUMBER, State.STATE_INTEGER],
    [CharType.CHAR_POINT, State.STATE_POINT_WITHOUT_INT],
  ])
  const integerMap = new Map<CharType, State>([
    [CharType.CHAR_NUMBER, State.STATE_INTEGER],
    [CharType.CHAR_EXP, State.STATE_EXP],
    [CharType.CHAR_POINT, State.STATE_POINT],
  ])
  const pointMap = new Map<CharType, State>([
    [CharType.CHAR_NUMBER, State.STATE_FRACTION],
    [CharType.CHAR_EXP, State.STATE_EXP],
  ])
  const pointWithoutIntMap = new Map<CharType, State>([
    [CharType.CHAR_NUMBER, State.STATE_FRACTION],
  ])
  const fractionMap = new Map<CharType, State>([
    [CharType.CHAR_NUMBER, State.STATE_FRACTION],
    [CharType.CHAR_EXP, State.STATE_EXP],
  ])
  const expMap = new Map<CharType, State>([
    [CharType.CHAR_NUMBER, State.STATE_EXP_NUMBER],
    [CharType.CHAR_SIGN, State.STATE_EXP_SIGN],
  ])
  const expSignMap = new Map<CharType, State>([
    [CharType.CHAR_NUMBER, State.STATE_EXP_NUMBER],
  ])
  const expNumberMap = new Map<CharType, State>([
    [CharType.CHAR_NUMBER, State.STATE_EXP_NUMBER],
  ])
  const transfer = new Map<State, Map<CharType, State>>([
    [State.STATE_INITIAL, initialMap],
    [State.STATE_INT_SIGN, intSignMap],
    [State.STATE_INTEGER, integerMap],
    [State.STATE_POINT, pointMap],
    [State.STATE_POINT_WITHOUT_INT, pointWithoutIntMap],
    [State.STATE_FRACTION, fractionMap],
    [State.STATE_EXP, expMap],
    [State.STATE_EXP_SIGN, expSignMap],
    [State.STATE_EXP_NUMBER, expNumberMap],
  ])

  const length = s.length
  let state: State = State.STATE_INITIAL

  for (let i = 0; i < length; i++) {
    const type = toCharType(s[i])
    const map: Map<CharType, State> = transfer.get(state)!
    if (map.has(type))
      state = map.get(type)!
    else
      return false
  }

  return [
    State.STATE_INTEGER,
    State.STATE_POINT,
    State.STATE_FRACTION,
    State.STATE_EXP_NUMBER,
  ].includes(state)
}
