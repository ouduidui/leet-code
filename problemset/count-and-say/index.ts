/**
 * 遍历生成
 * @desc 时间复杂度 O(NM)  空间复杂度 O(M)  ->  NN 为给定的正整数，MM 为生成的字符串中的最大长度
 * @param n {number}
 * @return {string}
 */
export function countAndSay(n: number): string {
  let ans = '1'

  for (let i = 2; i <= n; i++) {
    let left = 0
    let right = 0
    const ansArr: string[] = []

    while (right < ans.length) {
      while (right < ans.length && ans[left] === ans[right])
        right++

      ansArr.push(`${right - left}${ans[left]}`)
      left = right
    }
    ans = ansArr.join('')
  }

  return ans
}
