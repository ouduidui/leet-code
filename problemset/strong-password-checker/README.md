# 强密码检验器

> 难度：困难
>
> https://leetcode-cn.com/problems/strong-password-checker/

## 题目

如果一个密码满足下述所有条件，则认为这个密码是强密码：

- 由至少 `6` 个，至多 `20` 个字符组成。
- 至少包含 **一个小写** 字母，**一个大写** 字母，和 **一个数字** 。
- 同一字符 **不能** 连续出现三次 (比如 "...aaa..." 是不允许的, 但是 "...aa...a..." 如果满足其他条件也可以算是强密码)。

给你一个字符串 `password` ，返回 将 `password` 修改到满足强密码条件需要的最少修改步数。如果 `password` 已经是强密码，则返回 `0` 。

在一步修改操作中，你可以：

- 插入一个字符到 `password` ，
- 从 `password` 中删除一个字符，或
- 用另一个字符来替换 `password` 中的某个字符。
 
### 示例

#### 示例 1：

```
输入：password = "a"
输出：5
```

#### 示例 2：

```
输入：password = "aA1"
输出：3
```

#### 示例 3：

```
输入：password = "1337C0d3"
输出：0
```

## 解题

```ts
/**
 * 分类讨论
 * @desc 时间复杂度 O(N)  空间复杂度 O(1)
 * @param password
 * @returns
 */
export function strongPasswordChecker(password: string): number {
  const isLowerCase = (ch: string): boolean => (ch >= 'a' && ch <= 'z')
  const isUpperCase = (ch: string): boolean => (ch >= 'A' && ch <= 'Z')
  const isNumber = (ch: string): boolean => (ch >= '0' && ch <= '9')

  const len = password.length
  let hasLower: 0 | 1 = 0
  let hasUpper: 0 | 1 = 0
  let hasNumber: 0 | 1 = 0

  for (let i = 0; i < len; i++) {
    const ch = password.charAt(i)
    if (isLowerCase(ch))
      hasLower = 1
    else if (isUpperCase(ch))
      hasUpper = 1
    else if (isNumber(ch))
      hasNumber = 1
  }

  const categories = hasLower + hasUpper + hasNumber

  // 少于 6 个的情况
  if (len < 6) { return Math.max(6 - len, 3 - categories) }

  // 少于或等于 20 个的情况
  else if (len <= 20) {
    let replace = 0 // 记录需要更换的个数
    let count = 0 // 统计连续出现cur的次数
    let cur = '#'

    for (let i = 0; i < len; i++) {
      const ch = password.charAt(i)
      if (ch === cur) {
        count++
      }
      else {
        // 我们只需替换 count / 3 个元素，即隔两个换一个
        replace += (count / 3) >> 0
        // 重置
        count = 1
        cur = ch
      }
    }

    // 最后在清空一下count，更新replace
    replace += (count / 3) >> 0

    return Math.max(replace, 3 - categories)
  }

  // 多于 20 个的情况
  else {
    let replace = 0 // 记录需要更换的个数
    let remove = len - 20 // 需要删除的次数

    let canRemove = 0
    let count = 0
    let cur = '#'

    for (let i = 0; i < len; i++) {
      const ch = password.charAt(i)
      if (ch === cur) {
        count++
      }
      else {
        // 如果有一元素连续出现超过3次，且还有删除元素的空间的话
        if (remove > 0 && count >= 3) {
          // count % 3 === 0 的情况，利用一个删除次数来删除一个重复元素
          // 因此将其变成了 count % 3 === 2 的情况，可以减少一次更换次数
          if (count % 3 === 0) {
            remove--
            replace--
          }
          // count % 3 === 1 的情况，可以通过利用两次删除次数了换取减少一次更换次数
          // 但这里的成本太大，希望把更多更换机会留给上面的情况，因此我们可以统计次数
          // 在最后还有删除次数的时候，再进行更换
          else if (count % 3 === 1) {
            canRemove++
          }
        }

        // 更新replace
        replace += (count / 3) >> 0
        count = 1
        cur = ch
      }
    }

    // 遍历后，清空count，更新replace
    if (remove > 0 && count >= 3) {
      if (count % 3 === 0) {
        remove--
        replace--
      }
      else if (count % 3 === 1) {
        canRemove++
      }
    }
    replace += Math.floor(count / 3)

    // 使用 count % 3 === 1 的数量，由剩余的替换次数、组数和剩余的删除次数共同决定
    let use = Math.min(Math.min(replace, canRemove), (remove >> 1))
    replace -= use
    remove -= use * 2

    // 由于每有一次替换次数就一定有 3 个连续相同的字符（count / 3 决定），因此这里可以直接计算出使用 count % 3 === 2 的组的数量
    use = Math.min(replace, (remove / 3) >> 0)
    replace -= use
    remove -= use * 3

    return (len - 20) + Math.max(replace, 3 - categories)
  }
}
```