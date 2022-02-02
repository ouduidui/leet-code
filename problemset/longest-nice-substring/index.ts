/**
 * 暴力解法
 * @desc 时间复杂度 O(N^2)  空间复杂度 O(1)
 * @param s {string}
 * @return {string}
 */
export function longestNiceSubstring(s: string): string {
  const len = s.length;
  let maxPosition = 0;
  let maxLength = 0;
  for (let i = 0; i < len; i++) {
    let lower = 0;
    let upper = 0;
    for (let j = i; j < len; j++) {
      // 利用26位二进制来表示字母
      // abcdefghijklmnopqrstuvwxyz
      // 00000000000000000000000000
      if (s[j] >= 'a' && s[j] <= 'z') {
        // 小写
        lower |= 1 << (s[j].charCodeAt(0) - 'a'.charCodeAt(0));
      } else {
        // 大写
        upper |= 1 << (s[j].charCodeAt(0) - 'A'.charCodeAt(0));
      }

      if (lower === upper && j - i + 1 > maxLength) {
        maxPosition = i;
        maxLength = j - i + 1;
      }
    }
  }

  return s.slice(maxPosition, maxPosition + maxLength);
}

export function longestNiceSubstring2(s: string): string {
  let maxPosition = 0;
  let maxLength = 0;
  dfs(0, s.length - 1);
  return s.substring(maxLength, maxPosition + maxPosition);

  function dfs(start: number, end: number): void {
    if (start >= end) return;

    let lower = 0;
    let upper = 0;

    for (let i = start; i <= end; i++) {
      if (s[i] >= 'a' && s[i] <= 'z') {
        lower |= 1 << (s[i].charCodeAt(0) - 'a'.charCodeAt(0));
      } else {
        upper |= 1 << (s[i].charCodeAt(0) - 'A'.charCodeAt(0));
      }
    }

    if (lower <= upper) {
      if (end - start + 1 > maxLength) {
        maxPosition = start;
        maxLength = end - start + 1;
      }
      return;
    }
    const valid = lower & upper;
    let pos = start;
    while (pos <= end) {
      start = pos;
      while (
        pos <= end &&
        (valid &
          (1 << (s[pos].toLowerCase().charCodeAt(0) - 'a'.charCodeAt(0)))) !==
          0
      ) {
        pos++;
      }
      dfs(start, pos - 1);
      pos++;
    }
  }
}
