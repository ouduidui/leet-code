/**
 * 正则
 * @desc 时间复杂度 O(N)  空间复杂度 O(1)
 * @param address
 * @returns
 */
export function defangIPaddr(address: string): string {
  return address.replace(/\./g, '[.]')
}
