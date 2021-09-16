/**
 * 中心扩展
 * @desc 时间复杂度 O(N^2)  空间复杂度 O(1)
 * @param s {string}
 * @return {string}
 */
export function longestPalindrome(s: string): string {
    if (s.length < 2) return s;

    // 初始化结果，默认为第一个字符
    let res: string = s[0];

    // 遍历，以i为中心点
    for (let i: number = 0; i < s.length; i++) {
        // 中心点为一个字符的情况
        if (i > 0 && s[i - 1] === s[i + 1]) {
            findPalindrome(i, i)
        }
        // 中心点为两个个字符的情况
        if (s[i] === s[i + 1]) {
            findPalindrome(i, i + 1)
        }
    }

    return res;

    /**
     * 查找回文子串
     * @param left {number}
     * @param right {number}
     */
    function findPalindrome(left: number, right: number): void {
        // 初始化中心点
        let palindrome = left === right ? s[left] : s[left] + s[right];
        // 向左右散开，一一比较
        while (s[--left] === s[++right] && left >= 0 && right < s.length) {
            palindrome = s[left] + palindrome + s[right];
        }
        // 返回最长值
        res = res.length < palindrome.length ? palindrome : res;
    }
}
