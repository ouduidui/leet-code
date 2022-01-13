# 最长公共前缀

> 难度：简单
>
> https://leetcode-cn.com/problems/longest-common-prefix/

## 题目

编写一个函数来查找字符串数组中的最长公共前缀。

如果不存在公共前缀，返回空字符串`""`。

### 示例

#### 示例 1：

```
输入：strs = ["flower","flow","flight"]
输出："fl"
```

#### 示例 2：

```
输入：strs = ["dog","racecar","car"]
输出：""
解释：输入不存在公共前缀。
```

## 解法

```typescript
/**
 * 纵向扫描
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
```
