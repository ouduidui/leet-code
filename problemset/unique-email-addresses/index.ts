/**
 * 哈希表
 * @desc 时间复杂度 O(N)  空间复杂度 O(N)
 * @param emails
 * @returns
 */
export function numUniqueEmails(emails: string[]): number {
  const set = new Set<string>()
  for (const email of emails) {
    const [local, domain] = email.split('@')
    const newLocal = local.split('+')[0].split('.').join('')
    set.add(`${newLocal}@${domain}`)
  }

  return set.size
}
