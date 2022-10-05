/**
 * 哈希表
 * @desc 时间复杂度 O(N)  空间复杂度 O(N)
 * @param cpdomains
 * @returns
 */
export function subdomainVisits(cpdomains: string[]): string[] {
  const ans = []
  const counts = new Map()
  for (const cpdomain of cpdomains) {
    const space = cpdomain.indexOf(' ')
    const count = parseInt(cpdomain.slice(0, space))
    const domain = cpdomain.slice(space + 1)
    counts.set(domain, (counts.get(domain) || 0) + count)
    for (let i = 0; i < domain.length; i++) {
      if (domain[i] === '.') {
        const subdomain = domain.slice(i + 1)
        counts.set(subdomain, (counts.get(subdomain) || 0) + count)
      }
    }
  }
  for (const [subdomain, count] of counts.entries())
    ans.push(`${count} ${subdomain}`)

  return ans
}
