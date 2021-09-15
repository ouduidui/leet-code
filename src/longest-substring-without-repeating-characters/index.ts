/**
 * 暴力解法
 * @desc 时间复杂度 O(N^2)  空间复杂度 O(N)
 * @param s<string> 字符串
 * @return number
 */
export function lengthOfLongestSubstring(s: string): number {
    if (s.length < 2) return s.length;

    const arr: Array<string> = s.split('');
    let count: number = 0;

    // 遍历数组
    for (let i: number = 0; i < arr.length; i++) {
        // 重置一下set，将第一个值放入
        const set: Set<string> = new Set(arr[i]);
        // 遍历剩余的值
        for (let j: number = i + 1; j < arr.length; j++) {
            // 如果set中包含，则更新count，结束遍历；否则将其加入set中
            if (set.has(arr[j])) {
                count = count > j - i ? count : j - i;
                break;
            } else {
                set.add(arr[j])
            }

            // 遍历结束后，更新count
            if(j === arr.length - 1) {
                count = count > j - i + 1 ? count : j - i + 1;
            }
        }
    }
    return count;
}

