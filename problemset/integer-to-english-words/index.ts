/**
 * 递归
 * @desc 时间复杂度 O(1)  空间复杂度 O(1)
 * @param num
 * @returns
 */
export function numberToWords(num: number): string {
  if (num === 0) return 'Zero'

  const SINGLES = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine']
  const TEENS = ['Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen']
  const TENS = ['', 'Ten', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety']
  const THOUSANDS = ['', 'Thousand', 'Million', 'Billion']

  const result: string[] = []

  for (
    let i = 3, unit = 1000000000;
    i >= 0;
    i--, unit = (unit / 1000) >> 0
  ) {
    const curNum = (num / unit) >> 0
    if (curNum !== 0) {
      num -= curNum * unit
      const cur: string[] = []
      dfs(cur, curNum)
      cur.push(`${THOUSANDS[i]} `)
      result.push(cur.join(''))
    }
  }

  return result.join('').trim()

  function dfs(cur: string[], num: number): void {
    if (num === 0) return

    if (num < 10) {
      cur.push(`${SINGLES[num]} `)
    }
    else if (num < 20) {
      cur.push(`${TEENS[num - 10]} `)
    }
    else if (num < 100) {
      cur.push(`${TENS[Math.floor(num / 10)]} `)
      dfs(cur, num % 10)
    }
    else {
      cur.push(`${SINGLES[Math.floor(num / 100)]} Hundred `)
      dfs(cur, num % 100)
    }
  }
}

/**
 * 迭代
 * @desc 时间复杂度 O(1)  空间复杂度 O(1)
 * @param num
 * @returns
 */
export function numberToWords2(num: number): string {
  if (num === 0)
    return 'Zero'

  const SINGLES = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine']
  const TEENS = ['Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen']
  const TENS = ['', 'Ten', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety']
  const THOUSANDS = ['', 'Thousand', 'Million', 'Billion']

  const result: string[] = []

  for (
    let i = 3, unit = 1000000000;
    i >= 0;
    i--, unit = (unit / 1000) >> 0
  ) {
    const curNum = (num / unit) >> 0
    if (curNum !== 0) {
      num -= curNum * unit
      result.push(`${toEnglish(curNum) + THOUSANDS[i]} `)
    }
  }

  return result.join('').trim()

  function toEnglish(num: number): string {
    const curr = []
    const hundred = Math.floor(num / 100)
    num %= 100
    if (hundred !== 0)
      curr.push(`${SINGLES[hundred]} Hundred `)

    const ten = Math.floor(num / 10)
    if (ten >= 2) {
      curr.push(`${TENS[ten]} `)
      num %= 10
    }
    if (num > 0 && num < 10)
      curr.push(`${SINGLES[num]} `)

    else if (num >= 10)
      curr.push(`${TEENS[num - 10]} `)

    return curr.join('')
  }
}
