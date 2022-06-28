
/**
 * 哈希表
 */

const map = new Map<string, string>()
const baseUrl = 'https://tinyurl.com/'
export function encode(longUrl: string): string {
  let key
  while (true) {
    key = ((Math.random() * Number.MAX_SAFE_INTEGER) >> 0).toFixed(16)
    if (!map.has(key)) break
  }
  map.set(key, longUrl)
  const tinyUrl = baseUrl + key
  return tinyUrl
}

export function decode(shortUrl: string): string {
  const key = shortUrl.substring(shortUrl.lastIndexOf('/') + 1)
  return map.get(key) || ''
}
