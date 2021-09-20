/**
 * 暴力解法
 * @desc 时间复杂度 -> O(n)  空间复杂度  -> O(1)
 * @param s {string}
 * @return {number}
 */
export function myAtoi(s: string): number {
    let isStart: boolean = false; // 判断是否已经开始
    let resStr: string = '';

    // 去除首位空格
    s = s.trim();

    for (let i: number = 0; i < s.length; i++) {
        const sym = ['+', '-'];

        if (!isStart) {
            if (!isNumber(s[i]) && !sym.includes(s[i])) {
                return 0;
            }

            if (sym.includes(s[i]) || isNumber(s[i])) {
                isStart = true;
                resStr = s[i];
            }
        } else {
            if (isNumber(s[i])) {
                resStr += s[i];
            } else {
                return handleRes(resStr);
            }
        }
    }

    return handleRes(resStr);

    /**
     * 判断是否为数值
     * @param str {string}
     * @return {boolean}
     */
    function isNumber(str: string): boolean {
        if (str === ' ') return false;
        return !isNaN(Number(str));
    }

    /**
     * 处理结果，判断边缘情况
     * @param resStr {string}
     * @return {number}
     */
    function handleRes(resStr: string) {
        let res: number = Number(resStr);
        res = isNaN(res) ? 0 : res;

        if (res < Math.pow(-2, 31)) {
            return Math.pow(-2, 31)
        } else if (res > Math.pow(2, 31) - 1) {
            return Math.pow(2, 31) - 1
        } else {
            return res
        }
    }
}
