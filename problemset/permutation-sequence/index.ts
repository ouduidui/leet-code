/**
 * 回溯
 * @desc 时间复杂度 O(N!)  空间复杂度 O(1)
 * @param n {number}
 * @param k {number}
 * @return {string}
 */
export function getPermutation(n: number, k: number): string {
    let idx = 1;
    return backtrack('') || '';

    function backtrack(str: string): string | undefined {
        if (str.length === n && idx === k) {
            return str;
        } else if (str.length === n) {
            idx++;
        } else {
            for (let i = 1; i <= n; i++) {
                if (str.split('').includes(`${i}`)) continue;

                const res = backtrack(str + i);
                if (res) {
                    return res;
                }
            }
        }
    }
}


export function getPermutation2(n: number, k: number): string {
    const factorial:number[] = [1];
    for(let i = 1; i < n; i++) {
        factorial[i] = factorial[i - 1] * i;
    }

    let ans = '';
    const valid = new Array(n + 1).fill(1);
    k--;
    for(let i = 1; i <= n; i++) {
        let order = k / factorial[n - i] + 1;
        for(let j = 1; j <= n; j++) {
            order -= valid[j];
            if(order === 0) {
                ans += j;
                valid[j] = 0;
                break;
            }
        }
        k %= factorial[n - i];
    }

    return ans;
}