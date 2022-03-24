# 图片平滑器

> 难度：简单
>
> https://leetcode-cn.com/problems/image-smoother/

## 题目

**图像平滑器** 是大小为  `3 x 3` 的过滤器，用于对图像的每个单元格平滑处理，平滑
处理后单元格的值为该单元格的平均灰度。

每个单元格的  **平均灰度** 定义为：该单元格自身及其周围的 `8` 个单元格的平均值，
结果需向下取整。（即，需要计算蓝色平滑器中 `9` 个单元格的平均值）。

如果一个单元格周围存在单元格缺失的情况，则计算平均灰度时不考虑缺失的单元格（即，
需要计算红色平滑器中 `4` 个单元格的平均值）。

![image-smoother-1](https://user-images.githubusercontent.com/54696834/159825130-f69f39c8-f322-4471-9bbd-53d1c16b9b19.jpg)

给你一个表示图像灰度的 `m x n` 整数矩阵 `img` ，返回对图像的每个单元格平滑处理后
的图像 。

### 示例

#### 示例 1：

![image-smoother-2](https://user-images.githubusercontent.com/54696834/159825128-eaedbcea-0835-4ea9-83ef-9ddb055b5c11.jpg)

```
输入:img = [[1,1,1],[1,0,1],[1,1,1]]
输出:[[0, 0, 0],[0, 0, 0], [0, 0, 0]]
解释:
对于点 (0,0), (0,2), (2,0), (2,2): 平均(3/4) = 平均(0.75) = 0
对于点 (0,1), (1,0), (1,2), (2,1): 平均(5/6) = 平均(0.83333333) = 0
对于点 (1,1): 平均(8/9) = 平均(0.88888889) = 0
```

#### 示例 2：

![image-smoother-3](https://user-images.githubusercontent.com/54696834/159825121-3c2092bc-f819-4391-9c86-1b673342b12b.jpg)

```
输入: img = [[100,200,100],[200,50,200],[100,200,100]]
输出: [[137,141,137],[141,138,141],[137,141,137]]
解释:
对于点 (0,0), (0,2), (2,0), (2,2): floor((100+200+200+50)/4) = floor(137.5) = 137
对于点 (0,1), (1,0), (1,2), (2,1): floor((200+200+50+200+100+100)/6) = floor(141.666667) = 141
对于点 (1,1): floor((50+200+200+200+200+100+100+100+100)/9) = floor(138.888889) = 138
```

## 解题

```typescript
/**
 * 模拟
 * @desc 时间复杂度 O(MN) 空间复杂度 O(1)
 * @param img
 * @returns
 */
export function imageSmoother(img: number[][]): number[][] {
  const m = img.length;
  const n = img[0].length;
  const result: number[][] = new Array(m)
    .fill([])
    .map(() => new Array(n).fill(0));

  const dist = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, -1],
    [0, 0],
    [0, 1],
    [1, -1],
    [1, 0],
    [1, 1]
  ];

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      let num = 0;
      let sum = 0;
      for (const d of dist) {
        const x = i + d[0];
        const y = j + d[1];
        if (x >= 0 && x < m && y >= 0 && y < n) {
          num++;
          sum += img[x][y];
        }
      }
      result[i][j] = (sum / num) >> 0;
    }
  }

  return result;
}
```
