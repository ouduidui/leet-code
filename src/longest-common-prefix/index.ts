/**
 * 暴力解法
 * @desc 时间复杂度 O(MN) M为第一个字符串长度，N为strs长度   空间复杂度 O(1)
 * @param strs {string[]}
 * @return {string}
 */
export function longestCommonPrefix(strs: string[]): string {
    if (!strs || !strs.length) return '';

    let ans: string = '';
    const firstStr: string = strs[0];
    const len: number = firstStr.length;

    for (let i: number = 0; i < len; i++) {
        let letter: string = firstStr[i];
        for (let j: number = 1; j < strs.length; j++) {
            if (strs[j][i] !== letter) {
                return ans;
            }
        }
        ans += letter;
    }

    return ans;
}
