# 复原 IP 地址

> 难度：中等
>
> https://leetcode-cn.com/problems/restore-ip-addresses/

## 题目

**有效 IP 地址** 正好由四个整数（每个整数位于 `0` 到 `255` 之间组成，且不能含有
前导 `0`），整数之间用 `'.'` 分隔。

- 例如："0.1.2.201" 和 "192.168.1.1" 是 **有效** IP 地址，但是
  "0.011.255.245"、"192.168.1.312" 和 "192.168@1.1" 是 无效 IP 地址。

给定一个只包含数字的字符串 `s` ，用以表示一个 IP 地址，返回所有可能的**有效 IP
地址**，这些地址可以通过在 `s` 中插入 `'.'` 来形成。你不能重新排序或删除 `s` 中
的任何数字。你可以按 **任何** 顺序返回答案。

### 示例

#### 示例 1：

```
输入：s = "25525511135"
输出：["255.255.11.135","255.255.111.35"]
```

#### 示例 2：

```
输入：s = "0000"
输出：["0.0.0.0"]
```

#### 示例 3：

```
输入：s = "1111"
输出：["1.1.1.1"]
```

#### 示例 4：

```
输入：s = "010010"
输出：["0.10.0.10","0.100.1.0"]
```

#### 示例 5：

```
输入：s = "101023"
输出：["1.0.10.23","1.0.102.3","10.1.0.23","10.10.2.3","101.0.2.3"]
```

## 解法

```typescript
/**
 * 回溯
 * @desc 时间复杂度 O(N)  空间复杂度 O(1)
 * @param s {string}
 * @return {string[]}
 */
export function restoreIpAddresses(s: string): string[] {
  const ans: string[] = [];
  dfs([], 0);
  return ans;

  function dfs(segments: number[], idx: number) {
    if (segments.length === 4 && idx === s.length) {
      // 如果找到了 4 段 IP 地址并且遍历完了字符串，那么就是一种答案
      ans.push(segments.join('.'));
      return;
    } else if (segments.length === 4 || idx === s.length) {
      // 如果还没有找到 4 段 IP 地址就已经遍历完了字符串，那么提前回溯
      return;
    }

    // 不能有前导零
    if (s[idx] === '0') {
      dfs([...segments, 0], idx + 1);
      return;
    }

    // 枚举每一种可能性并递归
    let address = 0;
    for (let i = idx; i < s.length; i++) {
      address = address * 10 + Number(s[i]);
      if (address > 0 && address <= 255) {
        dfs([...segments, address], i + 1);
      } else {
        break;
      }
    }
  }
}
```
