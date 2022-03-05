# 比较版本号

> 难度：中等
>
> https://leetcode-cn.com/problems/compare-version-numbers/

## 题目

给你两个版本号 `version1` 和 `version2` ，请你比较它们。

版本号由一个或多个修订号组成，各修订号由一个 `'.'` 连接。每个修订号由 **多位数
字** 组成，可能包含 **前导零** 。每个版本号至少包含一个字符。修订号从左到右编号
，下标从 0 开始，最左边的修订号下标为 0 ，下一个修订号下标为 1 ，以此类推。例如
，2.5.33 和 0.1 都是有效的版本号。

比较版本号时，请按从左到右的顺序依次比较它们的修订号。比较修订号时，只需比较
**忽略任何前导零后的整数值** 。也就是说，修订号 1 和修订号 001 **相等** 。如果版
本号没有指定某个下标处的修订号，则该修订号视为 0 。例如，版本 1.0 小于版本 1.1
，因为它们下标为 0 的修订号相同，而下标为 1 的修订号分别为 0 和 1 ，0 < 1 。

返回规则如下：

- 如果  version1 > version2  返回  1，
- 如果  version1 < version2 返回 -1，
- 除此之外返回 0。

### 示例

#### 示例 1：

```
输入：version1 = "1.01", version2 = "1.001"
输出：0
解释：忽略前导零，"01" 和 "001" 都表示相同的整数 "1"
```

#### 示例 2：

```
输入：version1 = "1.0", version2 = "1.0.0"
输出：0
解释：version1 没有指定下标为 2 的修订号，即视为 "0"
```

#### 示例 3：

```
输入：version1 = "0.1", version2 = "1.1"
输出：-1
解释：version1 中下标为 0 的修订号是 "0"，version2 中下标为 0 的修订号是 "1" 。0 < 1，所以 version1 < version2
```

## 解题

### 字符串分割

```typescript
/**
 * 字符串分割
 * @desc 时间复杂度 O(N+M)  空间复杂度 O(N+M)
 * @param version1
 * @param version2
 */
export function compareVersion(version1: string, version2: string): number {
  if (version1 === version2) return 0;

  const v1 = version1.split('.');
  const v2 = version2.split('.');

  while (v1.length || v2.length) {
    const i1 = Number(v1.shift() || '0');
    const i2 = Number(v2.shift() || '0');

    if (i1 > i2) return 1;
    if (i1 < i2) return -1;
  }

  return 0;
}
```

### 双指针

```typescript
/**
 * 双指针
 * @desc 时间复杂度 O(N+M)  空间复杂度 O(N+M)
 * @param version1
 * @param version2
 */
export function compareVersion2(version1: string, version2: string): number {
  if (version1 === version2) return 0;

  const m = version1.length;
  const n = version2.length;
  let p1 = 0;
  let p2 = 0;

  while (p1 < m || p2 < n) {
    let x = 0;
    for (; p1 < m && version1[p1] !== '.'; p1++) {
      x = x * 10 + Number(version1[p1]);
    }

    let y = 0;
    for (; p2 < n && version2[p2] !== '.'; p2++) {
      y = y * 10 + Number(version2[p2]);
    }

    if (x > y) return 1;
    if (x < y) return -1;

    p1++;
    p2++;
  }

  return 0;
}
```
