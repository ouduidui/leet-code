# “气球” 的最大数量

> 难度：简单
>
> https://leetcode-cn.com/problems/maximum-number-of-balloons/

## 题目

给你一个字符串 `text`，你需要使用 `text` 中的字母来拼凑尽可能多的单词
`"balloon"（气球`）。

字符串 `text` 中的每个字母最多只能被使用一次。请你返回最多可以拼凑出多少个单词
`"balloon"`。

### 示例

#### 示例 1：

![maximum-number-of-balloons-1](https://user-images.githubusercontent.com/54696834/159101986-c2f5130f-78aa-42bb-820a-381c6ec6ee53.jpg)

```
输入：text = "nlaebolko"
输出：1
```

#### 示例 2：

![maximum-number-of-balloons-2](https://user-images.githubusercontent.com/54696834/159101978-5b3b9163-324a-4b38-bd71-40d5fc0d6a46.jpg)

```
输入：text = "loonbalxballpoon"
输出：2
```

#### 示例 3：

```
输入：text = "leetcode"
输出：0
```

## 解题

```typescript
/**
 * 统计
 * @desc 时间复杂度 O(N)  空间复杂度 O(1)
 * @param text
 */
export function maxNumberOfBalloons(text: string): number {
  // b a l o n
  const counts = new Array(5).fill(0);

  for (const l of text) {
    switch (l) {
      case 'b':
        counts[0]++;
        break;
      case 'a':
        counts[1]++;
        break;
      case 'l':
        counts[2]++;
        break;
      case 'o':
        counts[3]++;
        break;
      case 'n':
        counts[4]++;
        break;
    }
  }

  counts[2] = counts[2] >> 1;
  counts[3] = counts[3] >> 1;

  return Math.min(...counts);
}
```
