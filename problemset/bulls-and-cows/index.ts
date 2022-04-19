/**
 * 遍历
 * @desc 时间复杂度 O(N)  空间复杂度 O(1)
 * @param secret
 * @param guess
 * @returns
 */
export function getHint(secret: string, guess: string): string {
  let bulls = 0
  const secretCounts = new Array(10).fill(0)
  const guessCounts = new Array(10).fill(0)

  for (let i = 0; i < secret.length; i++) {
    if (secret[i] === guess[i]) {
      bulls++
    }
    else {
      secretCounts[secret[i].charCodeAt(0) - '0'.charCodeAt(0)]++
      guessCounts[guess[i].charCodeAt(0) - '0'.charCodeAt(0)]++
    }
  }
  let cows = 0
  for (let i = 0; i < 10; i++)
    cows += Math.min(secretCounts[i], guessCounts[i])

  return `${bulls}A${cows}B`
}
