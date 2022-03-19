# 搜索二维矩阵

> 难度：中等
>
> https://leetcode-cn.com/problems/search-a-2d-matrix/

## 题目

编写一个高效的算法来判断 `m x n` 矩阵中，是否存在一个目标值。该矩阵具有如下特性
：

- 每行中的整数从左到右按升序排列。
- 每行的第一个整数大于前一行的最后一个整数。

### 示例

#### 示例 1：

![search-a-2d-matrix-1](https://user-images.githubusercontent.com/88995580/159103220-f710f135-7ed9-440f-8b1b-548b05945733.jpg)

```
输入：matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
输出：true
```

#### 示例 2：

![search-a-2d-matrix-2](https://user-images.githubusercontent.com/88995580/159103224-9d1e0cb3-589a-426c-afce-6c4d1beab107.jpg)

```
输入：matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
输出：false
```
