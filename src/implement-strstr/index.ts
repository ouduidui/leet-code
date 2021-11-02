/**
 * 暴力解法
 * @desc 时间复杂度 O(N*M)  空间复杂度 O(1)
 * @param haystack {string}
 * @param needle {string}
 * @return {number}
 */
export function strStr(haystack: string, needle: string): number {
    if (!needle) return 0;

    let ans: number = -1;
    const len1: number = haystack.length;
    const len2: number = needle.length;

    if (!haystack || len2 > len1) return ans;

    for (let i: number = 0; i + len2 <= len1; i++) {
        ans = i;

        for (let j: number = 0; j < len2; j++) {
            if (haystack[i + j] !== needle[j]) {
                ans = -1;
                break;
            }
        }

        if (ans !== -1) return ans;
    }

    return ans;
}
