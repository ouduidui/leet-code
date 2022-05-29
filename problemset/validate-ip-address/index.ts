/**
 * 依次判断
 * @desc 时间复杂度 O(N)  空间复杂度 O(1)
 * @param queryIP
 * @returns
 */
export function validIPAddress(queryIP: string): 'IPv4' | 'IPv6' | 'Neither' {
  if (queryIP.split('.').length === 4) return checkIPv4(queryIP)
  if (queryIP.split(':').length === 8) return checkIPv6(queryIP)
  return 'Neither'

  function checkIPv4(queryIP: string): 'IPv4' | 'Neither' {
    const arr = queryIP.split('.')
    for (const str of arr) {
      if (str === '') return 'Neither'
      if (str[0] === '0' && str.length !== 1) return 'Neither'
      for (const ch of str)
        if (!isNumber(ch)) return 'Neither'

      const num = Number(str)
      if (num < 0 || num > 255) return 'Neither'
    }

    return 'IPv4'
  }

  function checkIPv6(queryIP: string): 'IPv6' | 'Neither' {
    const arr = queryIP.split(':')
    for (const str of arr) {
      const len = str.length
      if (len < 1 || len > 4) return 'Neither'
      for (const ch of str)
        if (!isLetterOrNumber(ch)) return 'Neither'
    }

    return 'IPv6'
  }

  function isNumber(ch: string) {
    return ch >= '0' && ch <= '9'
  }

  function isLetterOrNumber(ch: string) {
    if (ch >= '0' && ch <= '9') return true
    if (ch >= 'A' && ch <= 'F') return true
    if (ch >= 'a' && ch <= 'f') return true
    return false
  }
}
