/**
 * 暴力解法
 * @desc 时间复杂度：O(N) N为num的长度  空间复杂度：O(1)
 * @param num {number}
 * @return {string}
 */
export function intToRoman(num: number): string {
  const romanMap: Map<number, string> = new Map([
    [1, 'I'],
    [5, 'V'],
    [10, 'X'],
    [50, 'L'],
    [100, 'C'],
    [500, 'D'],
    [1000, 'M'],
  ])

  let carry = 0 // 进位
  let roman = '' // 罗马值结果

  while (num > 0) {
    const n: number = num % 10
    num = Math.floor(num / 10)

    let r = '' // 当前数值对应的罗马值

    if (n === 1 || n === 5) {
      r += romanMap.get(n * Math.pow(10, carry))
    }
    else if (n < 5) {
      if (n === 4) {
        r += romanMap.get(Math.pow(10, carry))
        r += romanMap.get(5 * Math.pow(10, carry))
      }
      else {
        r += Array(n)
          .fill(romanMap.get(Math.pow(10, carry)))
          .join('')
      }
    }
    else if (n < 10) {
      if (n === 9) {
        r += romanMap.get(Math.pow(10, carry))
        r += romanMap.get(10 * Math.pow(10, carry))
      }
      else {
        r += romanMap.get(5 * Math.pow(10, carry))
        r += Array(n - 5)
          .fill(romanMap.get(Math.pow(10, carry)))
          .join('')
      }
    }

    carry++
    roman = r + roman // 将新的罗马值插在前面
  }

  return roman
}

/**
 * 模拟
 * @desc 时间复杂度：O(1)  空间复杂度：O(1)
 * @param num {number}
 * @return {string}
 */
export function intToRoman2(num: number): string {
  const romanMap: Map<number, string> = new Map([
    [1000, 'M'],
    [900, 'CM'],
    [500, 'D'],
    [400, 'CD'],
    [100, 'C'],
    [90, 'XC'],
    [50, 'L'],
    [40, 'XL'],
    [10, 'X'],
    [9, 'IX'],
    [5, 'V'],
    [4, 'IV'],
    [1, 'I'],
  ])
  const roman: string[] = []
  for (const [value, symbol] of romanMap) {
    while (num >= value) {
      num -= value
      roman.push(symbol)
    }
    if (num === 0)
      break
  }

  return roman.join('')
}

/**
 * 硬编码数字
 * @desc 时间复杂度：O(1)  空间复杂度：O(1)
 * @param num {number}
 * @return {string}
 */
export function intToRoman3(num: number): string {
  const thousands: string[] = ['', 'M', 'MM', 'MMM']
  const hundreds: string[] = [
    '',
    'C',
    'CC',
    'CCC',
    'CD',
    'D',
    'DC',
    'DCC',
    'DCCC',
    'CM',
  ]
  const tens: string[] = [
    '',
    'X',
    'XX',
    'XXX',
    'XL',
    'L',
    'LX',
    'LXX',
    'LXXX',
    'XC',
  ]
  const ones: string[] = [
    '',
    'I',
    'II',
    'III',
    'IV',
    'V',
    'VI',
    'VII',
    'VIII',
    'IX',
  ]

  const roman: string[] = []
  roman.push(thousands[Math.floor(num / 1000)])
  roman.push(hundreds[Math.floor((num % 1000) / 100)])
  roman.push(tens[Math.floor((num % 100) / 10)])
  roman.push(ones[num % 10])
  return roman.join('')
}
