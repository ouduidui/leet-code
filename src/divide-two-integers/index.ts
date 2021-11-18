/**
 * 二分法
 * @desc 时间复杂度 O(logC ^ 2)   空间复杂度 O(logC)
 * @param dividend {number} 被除数
 * @param divisor {number} 除数
 * @return {number}
 */
export function divide(dividend: number, divisor: number): number {
    // 考虑边缘情况
    const {isEdgeCage, value} = edgeCaseHandle(dividend, divisor);
    if (isEdgeCage) return value;

    // 将除数和被除数都变成负数
    let rev: boolean = false;  // 判断是否转变过
    if (dividend > 0) {
        dividend = -dividend;
        rev = !rev;
    }
    if (divisor > 0) {
        divisor = -divisor;
        rev = !rev;
    }

    const MAX_VALUE: number = 2 ** 31 - 1;
    let left: number = 1;
    let right: number = MAX_VALUE;
    let ans: number = 0;

    while (left <= right) {
        const mid: number = left + ((right - left) >> 1);
        const check: boolean = quickAdd(divisor, mid, dividend);

        if (check) {
            ans = mid;
            if (mid === MAX_VALUE) {
                break;
            }
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return rev ? -ans : ans;

    // 快速乘
    function quickAdd(y: number, z: number, x: number): boolean {
        // x < 0; y < 0
        // z * y >= x
        let result: number = 0;
        let add = y;
        while (z !== 0) {
            // z & 1 判断奇偶数，0 -> 偶数；1 -> 技奇数
            if ((z & 1) !== 0) {
                // result + add >= x
                if (result < x - add) {
                    return false
                }
                result += add;
            }
            if (z !== 1) {
                // add + add >= x
                if (add < x - add) {
                    return false;
                }
                add += add;
            }

            //  z = z / (2^1)   -> z = z / 2
            z >>= 1;
        }
        return true;
    }
}

/**
 * 类二分法
 * @desc 时间复杂度 O(logC)   空间复杂度 O(logC)
 * @param dividend {number} 被除数
 * @param divisor {number} 除数
 * @return {number}
 */
export function divide2(dividend: number, divisor: number): number {
    // 考虑边缘情况
    const {isEdgeCage, value} = edgeCaseHandle(dividend, divisor);
    if (isEdgeCage) return value;

    // 将除数和被除数都变成负数
    let rev: boolean = false;  // 判断是否转变过
    if (dividend > 0) {
        dividend = -dividend;
        rev = !rev;
    }
    if (divisor > 0) {
        divisor = -divisor;
        rev = !rev;
    }

    const candidates: number[] = [divisor];
    let idx: number = 0;
    while (candidates[idx] >= dividend - candidates[idx]) {
        candidates.push(candidates[idx] + candidates[idx]);
        idx++;
    }
    let ans: number = 0;
    for (let i = candidates.length - 1; i >= 0; i--) {
        if (candidates[i] >= dividend) {
            ans += 1 << i;
            dividend -= candidates[i];
        }
    }

    return rev ? -ans : ans;
}

function edgeCaseHandle(dividend: number, divisor: number): { isEdgeCage: boolean, value: number } {
    const MAX_VALUE: number = 2 ** 31 - 1;
    const MIN_VALUE: number = -(2 ** 31);

    // 考虑被除数为最小值的情况
    if (dividend === MIN_VALUE) {
        if (divisor === 1) return {isEdgeCage: true, value: MIN_VALUE};
        if (divisor === -1) return {isEdgeCage: true, value: MAX_VALUE};
    }

    // 考虑除数为最小值的情况
    if (divisor === MIN_VALUE) return {isEdgeCage: true, value: dividend === MIN_VALUE ? 1 : 0};

    // 考虑被除数为 0 的情况
    if (dividend === 0) return {isEdgeCage: true, value: 0};

    return {isEdgeCage: false, value: NaN};
}
