# 判断国际象棋棋盘中一个格子的颜色

> 难度：简单
>
> https://leetcode.cn/problems/determine-color-of-a-chessboard-square/

## 题目

给你一个坐标 `coordinates` ，它是一个字符串，表示国际象棋棋盘中一个格子的坐标。下图是国际象棋棋盘示意图。

![image](https://user-images.githubusercontent.com/54696834/206342937-baff0119-7739-4588-ae89-dcbf6d22cebf.png)

如果所给格子的颜色是白色，请你返回 `true`，如果是黑色，请返回 `false` 。

给定坐标一定代表国际象棋棋盘上一个存在的格子。坐标第一个字符是字母，第二个字符是数字。

### 示例

#### 示例 1：

```
输入：coordinates = "a1"
输出：false
解释：如上图棋盘所示，"a1" 坐标的格子是黑色的，所以返回 false 。
```

#### 示例 2：

```
输入：coordinates = "h3"
输出：true
解释：如上图棋盘所示，"h3" 坐标的格子是白色的，所以返回 true 。
```

#### 示例 3：

```
输入：coordinates = "c7"
输出：false
```

## 解题

```ts 
/**
 * 数学
 * @desc 时间复杂度 O(1) 空间复杂度 O(1)
 * @param coordinates
 * @returns
 */
export function squareIsWhite(coordinates: string): boolean {
  return ((coordinates[0].charCodeAt(0) - 'a'.charCodeAt(0) + 1) + (coordinates[1].charCodeAt(0) - '0'.charCodeAt(0))) % 2 === 1
}
```